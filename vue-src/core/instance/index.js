import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'

// Vue构造函数
function Vue (options) {
  // if (process.env.NODE_ENV !== 'production' &&
  //   !(this instanceof Vue)
  // ) {
  //   warn('Vue is a constructor and should be called with the `new` keyword')
  // }
  this._init(options)
}

// 扩展Vue构造函数

initMixin(Vue) // _init()
stateMixin(Vue) // $set $delate $props $data $watch
eventsMixin(Vue) // $on $once $off $emit
lifecycleMixin(Vue) // _update $forceUpdate $destroy
renderMixin(Vue) // _render $nextTick

export default Vue
