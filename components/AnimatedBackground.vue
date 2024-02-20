<template>
  <div class="fixed inset-0">
    <canvas
      ref="canvas"
      class="absolute blur-md saturate-200"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script lang="ts" setup>
import { breakpointsTailwind } from '@vueuse/core'

interface Dot {
  x: number
  y: number
  radius: number
  color: string
}

const canvas = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null

const { x, y } = useMouse()
const { width, height } = useWindowSize()
const isMobile = useBreakpoints(breakpointsTailwind).smallerOrEqual('md')

const dots = ref<Dot[]>([])
const colors = ['hsl(273, 67%, {light})', 'hsl(224, 64%, {light})']
const minLight = 25
const maxLight = 40
const dotAmount = isMobile.value ? 10 : 20

const renderDot = (dot: Dot) => {
  if (ctx) {
    ctx.beginPath()
    ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2)
    ctx.fillStyle = dot.color
    ctx.fill()
  }
}

const createDots = () => {
  if (ctx) {
    Array.from({ length: dotAmount }).forEach(() => {
      const x = Math.random() * width.value
      const y = Math.random() * height.value
      const radius = Math.random() * 20 + 5
      const color = colors[Math.floor(Math.random() * colors.length)].replace('{light}', Math.floor(Math.min(Math.random() * 100 + minLight, maxLight)) + '%')
      const dot = { x, y, radius, color }
      
      dots.value.push(dot)
    })
  }
}

const moveDots = () => {
  if (ctx) {
    ctx.clearRect(0, 0, width.value, height.value)
    dots.value.forEach((dot) => {
      const dx = x.value - dot.x
      const dy = Math.min(y.value, height.value) - dot.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      const maxDistance = 50
      const force = (maxDistance - distance) / maxDistance
      const maxForce = 0.05
      const accelerationX = dx / distance * force * maxForce
      const accelerationY = dy / distance * force * maxForce

      dot.x += accelerationX
      dot.y += accelerationY

      if (dot.x < 0 || dot.x > width.value) {
        dot.x = Math.random() * width.value
      }
      if (dot.y < 0 || dot.y > height.value) {
        dot.y = Math.random() * height.value
      }

      renderDot(dot)
    })

    requestAnimationFrame(moveDots)
  }
}

onMounted(() => {
  if (canvas.value) {
    ctx = canvas.value.getContext('2d')
    createDots()
    requestAnimationFrame(moveDots)
  }
})

</script>