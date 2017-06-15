import Vue from 'vue'
import Components from '@/components'

export default {
  install () {
    for (let key in Components) {
      console.log(`cow${Components[key].name}`)
      Vue.component(`cow${Components[key].name}`, Components[key])
    }
  }
}
