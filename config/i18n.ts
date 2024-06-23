import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import language from './translation/language'

const resources = {
    en: {
        translation: {
            'lang': language.en
        }
    },
    th: {
        translation: {
            'lang': language.th
        }
    }
} as const

i18n.use(initReactI18next).init({
    resources,
    lng: 'en'
})

export default i18n