import Vue from 'vue'
import Components from './components'
import Cookies from './cookies'
import '@/assets/css/reset.css'
import '@/assets/css/global.less'
import '@/assets/font/iconfont.css'

// 使用所有全局组件
Vue.use(Components)
Vue.use(Cookies, {a: 1})
