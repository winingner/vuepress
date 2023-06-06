
import { defaultTheme } from 'vuepress'

import { searchPlugin } from '@vuepress/plugin-search'

import { registerComponentsPlugin }from '@vuepress/plugin-register-components'

import { getDirname, path } from '@vuepress/utils'
const __dirname = getDirname(import.meta.url)

import { containerPlugin } from '@vuepress/plugin-container'

export default {
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '文档',
    base:'/',
    locales: {
      '/': {
        lang: '中文',
        title:'你好'
      },
      '/en/': {
        lang: '英文',
        title:'vuepress'
      },
    },
    // 默认主题配置
    theme: defaultTheme({
      // 头像
      // logo: '/assets/images/bear.webp',
      locales: {
        '/': {
          selectLanguageName: '简体中文',
        },
        '/en/': {
          selectLanguageName: 'English',
        },
      },
      // 头部导航
      navbar: [
        {
          text: '首页',
          link: '/',
        },
        {
          text:'文档',
          link:'/goods/'
        },
        {
          text: '下拉框',
          children: ['/group/foo.md', '/group/bar.md'],
        },
        { text: '链接', link: 'https://github.com/winingner/vuepressfour' }
      ],
      colorModeSwitch:true,
      selectLanguageText:'语言',
      selectLanguageAriaLabel:'',
      // 侧边栏
      sidebar: {
        '/goods/': [
          {
            text: '迁移界面',
            collapsible: true,
            children: [],
          },
        ],
        '/sidebar/':[
          {
            text: '功能效果',
            collapsible: true,
            children:[]
          }
        ]
      },
      lastUpdated:true,
      lastUpdatedText : '更新时间',
      // tip:'TIP'
      notFound : ['页面丢失啦'],
      backToHome : '回到首页',
      toggleColorMode: '换肤',
    }),
    plugins: [
      searchPlugin({
        // 配置项
        locales: {
          '/': {
            placeholder: '搜索',
          },
          '/en/': {
            placeholder: 'Search',
          },
        },
      }),
      registerComponentsPlugin({
        // 配置项
        componentsDir: path.resolve(__dirname, './components'),
      }),
    //   'demo-container'
    containerPlugin({
        type: 'tip',
        locales: {
          '/': {
            defaultInfo: '提示',
          },
          '/en/': {
            defaultInfo: 'TIP',
          },
        },
      }),
    ],
  }
