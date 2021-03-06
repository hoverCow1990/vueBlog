import 'babel-polyfill'
import Vue from 'vue'
import Components from './components'
import Cookies from './cookies'
import Filters from './filters'
import Constent from './constent'
import Http from './http'
import Events from './events'
import User from './user'
import '@/assets/css/reset.css'
import '@/assets/css/global.less'
import '@/assets/font/iconfont.css'

// 使用所有全局组件
Vue.use(Components)
Vue.use(Filters)
Vue.use(Cookies)
Vue.use(Constent)
Vue.use(Http)
Vue.use(Events)
Vue.use(User)
