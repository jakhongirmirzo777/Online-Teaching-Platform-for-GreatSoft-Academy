import en from '../lang/en-US'
import ru from '../lang/ru-RU'
import uz from '../lang/uz-UZ'

export const I18N = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      img: '~assets/svgs/en.svg',
    },
    {
      code: 'ru',
      iso: 'ru-RU',
      name: 'Russian',
      img: '~assets/svgs/ru.svg',
    },
    {
      code: 'uz',
      iso: 'uz-UZ',
      img: '~assets/svgs/uz.svg',
      name: 'Uzbek',
    },
  ],
  defaultLocale: 'en',
  routes: {
    index: {
      en: '/',
      ru: '/',
      uz: '/',
    },
    about: {
      en: '/about',
      ru: '/about',
      uz: '/about',
    },
    login: {
      en: '/login',
      ru: '/login',
      uz: '/login',
    },
    contactUs: {
      en: '/contact-us',
      ru: '/contact-us',
      uz: '/contact-us',
    },
    pricing: {
      en: '/pricing',
      ru: '/pricing',
      uz: '/pricing',
    },
    instructors: {
      en: '/instructors',
      ru: '/instructors',
      uz: '/instructors',
    },
    courses: {
      en: '/courses',
      ru: '/courses',
      uz: '/courses',
    },
    quiz: {
      en: '/quiz/subject/',
      ru: '/quiz/subject/',
      uz: '/quiz/subject/',
    },
  },
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, ru, uz },
  },
}
