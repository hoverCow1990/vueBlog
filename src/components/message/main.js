import Vue from 'vue'
import message from './message'

let instance
let instances = []
let count = 1
let existList = [0, 0, 0, 0, 0, 0]
let MessageConstructor = Vue.extend(message)
let lastMesgData = {
  message: '',
  time: new Date()
}

let Message = option => {
  let nowTime = new Date()

  option = option || {}
  if (typeof option === 'string') {
    option = {
      message: option
    }
  }
  // 没有message或者同一个message多次渲染阻止
  if (!option.message || (option.message === lastMesgData.message && nowTime - lastMesgData.time < 3000)) return

  let userOnClose = option.onClose
  let id = 'message_' + count++
  let existCount

  // 搜索没有被占用的message位子
  for (let i = 0; i < existList.length; i++) {
    if (!existList[i]) {
      existList[i] = 1
      existCount = i
      break
    }
  }

  if (existCount === void 0) return // 同时超过6条message 遮蔽

  option.onClose = () => {
    existList[existCount] = 0
    Message.close(id, userOnClose)
  }
  lastMesgData = {
    message: option.message,
    time: new Date()
  }

  instance = new MessageConstructor({
    data: {
      ...option,
      existCount
    }
  })
  instance.id = id
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.isShow = true
  instance.dom = instance.vm.$el
  instances.push(instance)
  lastMesgData.time = nowTime
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
