import Vue from 'vue'
import Components from '@/components'
import Message from '@/components/message/main'
import '@/assets/css/reset.css'
import '@/assets/css/global.css'
import '@/assets/font/iconfont.css'

for (let key in Components) {
  console.log(`cow${Components[key].name}`)
  Vue.component(`cow${Components[key].name}`, Components[key])
}

Vue.prototype.$message = Message
