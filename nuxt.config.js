import * as MODES from "nuxt-purgecss";
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
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
    title: '巫迪科技|工业数据采集',
    meta: [
      { name: 'viewport', content: ' initial-scale=1' }
    ]
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
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()]
  },
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
    'nuxt-seo',
    'nuxt-purgecss'
  ],
  purgeCSS: {
    mode: MODES.webpack,
    enabled: ({ isDev, isClient }) => (!isDev && isClient), // or `false` when in dev/debug mode
    paths: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js'
    ],
    styleExtensions: ['.css'],
    whitelist: ['body', 'html', 'nuxt-progress'],
    extractors: [
      {
        extractor: content => content.match(/[A-z0-9-:\\/]+/g) || [],
        extensions: ['html', 'vue', 'js']
      }
    ]
  },
  seo: {
    lang: 'zh-cn',
    language: '简体中文',
    image:'https://woody.vip/woody.png',
    name: '宁夏巫迪科技有限公司',
    viewport:'width=device-width, initial-scale=1.0',
    company: '宁夏巫迪科技有限公司',
    description: '专注于工业物联网,致力于开拓工业新基建,有完整的工业信息化建设方案,旗下采集网关(MDC)可采集各种主流机床(CNC)/PLC/机器人(ROBOT),包括发那科(Fanuc),西门子(Sismens),' +
      '三菱(Mitsubishi),哈斯(Haas),西铁城(Citizen),兄弟(Brother),海德汉(Heidenhain),马扎克(Mazak),德马吉(DMG),森精机(Mori),' +
      '法格(Fagor),凯恩帝,广数,新代(Syntec),Modbus,欧姆龙(Omron),施耐德(Schneider),台达(Delta),库卡(Kuka),ABB等',
    keywords: '工业物联网,机床采集,PLC采集,MDC,DNC',
    url: 'https://www.woody.vip',
    openGraph:{
      type:true,
      images: 'https://www.woody.vip/woody.png',
      url: 'https://www.woody.vip',
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
    // postcss: {
    //   plugins: [
    //     purgecss({
    //       content: ['./pages/**/*.vue', './layouts/**/*.vue', './components/**/*.vue', './content/**/*.md', './content/**/*.json'],
    //       whitelist: ['html', 'body', 'has-navbar-fixed-top', 'nuxt-link-exact-active', 'nuxt-progress'],
    //       whitelistPatternsChildren: [/svg-inline--fa/, /__layout/, /__nuxt/],
    //     })
    //   ]
    // },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.module.rules.forEach(rule => {
        if (String(rule.test) === String(/\.(png|jpe?g|gif|svg|webp)$/)) {
          // add a second loader when loading images
          rule.use.push({
            loader: 'image-webpack-loader',
            options: {
              svgo: {
                plugins: [
                  // use these settings for internet explorer for proper scalable SVGs
                  // https://css-tricks.com/scale-svg/
                  { removeViewBox: false },
                  { removeDimensions: true }
                ]
              }
            }
          })
        }
      })
    }
  }
}
