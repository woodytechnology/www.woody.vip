import * as MODES from "nuxt-purgecss";

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
    'nuxt-seo',
    'nuxt-purgecss',
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
