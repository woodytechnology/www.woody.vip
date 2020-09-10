import zh_CN from './zh-CN'
import en from './en'

const lang={
  locales: [
    {
      code: 'en',
      iso: 'en-US'
    },
    {
      code: 'cn',
      iso: 'zh-CN'
    }
  ],
  defaultLocale: 'cn',
  seo: true,
  vueI18n: {
    fallbackLocale: 'cn',
    messages: {
      'cn': zh_CN,
      'en':en
    }
  }
}
export default lang
