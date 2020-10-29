/* @flow */

import Vue from 'core/index'
import { mountComponent } from 'core/instance/lifecycle'
import { inBrowser } from 'core/util/index'

import {
  query
} from 'web/util/index'

import { patch } from './patch'

// 安装平台补丁功能 
Vue.prototype.__patch__ = patch;

// 公共挂载方法
Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
): Component {
  el = el && inBrowser ? query(el) : undefined
  return mountComponent(this, el, hydrating)
}

export default Vue
