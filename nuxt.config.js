
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  head: {
    title: '巫迪科技|工业数据采集'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/echarts',
    '@/plugins/v-clock',
    { src:'@/plugins/v-particles',mode: 'client' }, // only on client side

    { src: '@/plugins/vue-seamless-scroll.js', mode: 'client' }, // only on client side
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    'nuxt-seo'
  ],
  seo: {
    lang: 'zh-cn',
    language: '简体中文',
    image:'https://woody.vip/woody.png',
    name: '宁夏巫迪科技有限公司',
    company: 'company',
    description: 'CNC/PLC数据采集,专注于工业物联网,致力于开拓工业新基建',
    url: 'https://woody.vip',
    openGraph:{
      type:true,
      images: 'https://woody.vip/woody.png',
      url: 'https://woody.vip',
    }
  },
  /*
  ** Build configuration
  */
  build: {
    analyze: true,
    babel: {
      presets ({ isServer }) {
        const targets = isServer ? { node: '10' } : { ie: '9' }
        return [
          [ require.resolve('@nuxt/babel-preset-app'), { targets } ]
        ]
      }
    },
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
