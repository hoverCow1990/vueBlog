import Components from '@/components'
import Message from '@/components/message/main'

const components = {
  install (Vue) {
    for (let key in Components) {
      console.log(`cow${Components[key].name}`)
      Vue.component(`cow${Components[key].name}`, Components[key])
    }
    Vue.prototype.$message = Message
  }
}

export default components
