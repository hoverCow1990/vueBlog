import Vue from 'vue'
import Components from './components'
import Message from '@/components/message/main'
import '@/assets/css/reset.css'
import '@/assets/css/global.css'
import '@/assets/font/iconfont.css'

// 使用所有全局组件
Vue.use(Components)

// 使用message组件
Vue.prototype.$message = Message
