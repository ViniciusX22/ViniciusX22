export const skillLinks = {
  Python: 'https://www.python.org/',
  MongoDB: 'https://www.mongodb.com/',
  'HTML/CSS': 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  Bulma: 'https://bulma.io/',
  JavaScript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  TypeScript: 'https://www.typescriptlang.org/',
  'Vue.js': 'https://vuejs.org/',
  'Nuxt.js': 'https://nuxtjs.org/',
  Unity: 'https://unity.com/',
  'C#': 'https://learn.microsoft.com/en-us/dotnet/csharp/',
  GSAP: 'https://gsap.com/',
  TailwindCSS: 'https://tailwindcss.com/',
  Selenium: 'https://www.selenium.dev/',
  'Telegram API': 'https://core.telegram.org/',
  'Node.js': 'https://nodejs.org/',
  'Express.js': 'https://expressjs.com/'
}

export type Skill = keyof typeof skillLinks

export interface ProjectDescription {
  en: string
  pt: string
}

export interface Project {
  name: string
	description: ProjectDescription
	cover: string
  media?: string
	url: string
  skills: Skill[]
}