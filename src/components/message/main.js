import Vue from 'vue'
import message from './message'

let instance
let instances = []
let count = 1
let MessageConstructor = Vue.extend(message)

let Message = option => {
  option = option || {}
  if (typeof option === 'string') {
    option = {
      message: option
    }
  }
  let userOnClose = option.onClose
  let id = 'message_' + count++

  option.onClose = () => {
    Message.close(id, userOnClose)
  }

  instance = new MessageConstructor({
    data: option
  })
  instance.id = id
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.isShow = true
  instance.dom = instance.vm.$el
  instances.push(instance)
  return instance.vm
}

Message.close = (id, userOnClose) => {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i])
      }
      instances.splice(i, 1)
      break
    }
  }
}

export default Message
