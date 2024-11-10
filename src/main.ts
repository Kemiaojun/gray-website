import '@/assets/styles/css/main.css'
// 图标css导入
import '@/assets/styles/iconfont/blossom/iconfont.css'
import '@/assets/styles/iconfont/graython/iconfont.css'
import '@/assets/styles/iconfont/weblogo/iconfont.js'

// 重写element样式
import 'element-plus/theme-chalk/dark/css-vars.css'
// 主题样式
import '@/assets/styles/css/theme.css'



import { createApp } from 'vue'
import App from './App.vue'

import pinia from '@/stores/store-config'
import router from '@/router/index'
import '@/router/route-init'



import BLRow from '@/components/BLRow.vue'
import BLCol from '@/components/BLCol.vue'
import BLTag from '@/components/BLTag.vue'
import ToTop from '@/components/ToTop/index.vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
import ToolBox from '@/components/layout/ToolBox.vue'
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.component('bl-row', BLRow)
.component('bl-col', BLCol)
.component('bl-tag', BLTag)
.component('to-top',ToTop)
.component('svg-icon',SvgIcon)
.component('tool-box',ToolBox)
app.mount('#app')
