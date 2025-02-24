const startDate = new Date(2020, 3, 1)
const MILLISECONDS_IN_A_YEAR = 1000 * 60 * 60 * 24 * 365

export function useYearsOfExperience() {
  const years = ref('');
  const { locale } = useI18n()
  const interval = ref<ReturnType<typeof setInterval>>()

  const updateYears = () => {
    const now = Date.now()
    years.value = Intl.NumberFormat(locale.value, { maximumFractionDigits: 8, minimumFractionDigits: 8 }).format(((now - startDate.getTime()) / MILLISECONDS_IN_A_YEAR))
  }

  watch(locale, () => {
    updateYears()
  })

  onMounted(() => {
    updateYears()
    interval.value = setInterval(updateYears, 1000)
  })

  onBeforeUnmount(() => {
    clearInterval(interval.value)
  })

  return { years }
}