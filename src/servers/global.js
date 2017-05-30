import Vue from 'vue'
import Components from '@/components'
import '@/assets/css/reset.css'
import '@/assets/css/global.css'
import '@/assets/font/iconfont.css'

for (let key in Components) {
  Vue.component(`cow${Components[key].name}`, Components[key])
}
