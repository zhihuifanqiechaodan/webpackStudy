/*
 * @Description: 
 * @Author: Tank
 * @GitHub: https://github.com/zhihuifanqiechaodan
 * @Date: 2019-02-16 10:00:48
 * @LastEditTime: 2019-02-16 10:03:42
 */
// 1. 使用 import 语法, 导入 vue-router 包(第二步安装路由放到了main.js中)
import VueRouter from 'vue-router'

import login from '../components/login.vue'
import acount from '../components/acount.vue'
import home from '../components/subcom/home.vue'
// 3. 创建路由对象
const router = new VueRouter({
    routes: [{
            path: '/login',
            component: login,
            // 子路由添加一个children属性, 它是一个数组
            children: [{
                path: 'home', // 注意: 子路由不加 '/'
                component: home
            }]
        },
        {
            path: '/acount',
            component: acount
        }
    ]
})
export default router