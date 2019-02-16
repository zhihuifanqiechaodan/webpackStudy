/*
 * @Description: 
 * @Author: Tank
 * @GitHub: https://github.com/zhihuifanqiechaodan
 * @Date: 2019-01-18 14:16:47
 * @LastEditTime: 2019-02-16 10:12:55
 */
// main.js文件是项目的入口文件
/**--------------------------------------------我是分割线------------------------------------------------ */
/**
 * 包的查找规则:
 *      1.找项目根目录中有没有 node_modules 的文件夹
 *      2.在 node_modules 中根据包名, 找到对应的XXX文件夹
 *      3.在 XXX 文件夹中, 找一个叫做package.jaon的包配置文件
 *      4.在 package.json 文件中, 查找一个叫做 main 属性[main属性指定了这个包在被加载的时候, 的入口文件]
 */
/**--------------------------------------------我是分割线------------------------------------------------ */
/**
 * 使用 webpack-dev-server 这个工具来实现自动编译的功能
 * 第一部分:
 *      1.运行 npm i webpack-dev-server -D 把这个工具安装到项目的本地发开依赖
 *      2.本地安装的webpack-dev-server无法把它当作脚本命令在终端中直接运行;(只有那些安装到全局 -g 工具, 才能在终端中正常运行)
 *      3.打开package.json文件,找到script节点,在其中添加一条配置项如下:
 *      "script": {
 *          "dev": "webpack-dev-server"
 *      }
 *      4.这时候在终端运行 npm run dev 的时候就相当于在运行webpack-dev-server了
 *      4.1 运行npm run dev 后会有报错提示要依赖于webpack, 所以需要在npm i webpack -D 安装这个包到本地开发依赖
 *      4.2 运行npm run dev 后会有报错提示需要依赖于webpack-cli, 所以需要在npm i webpack-cli -D 安装这个包到本  地开发依赖
 *      5.这时候就可以实时编译我们的代码了(编写代码结束后保存自动编译,只需要刷新页面就能出现效果了)
 *      6.关于配置webpack-dev-server的其他配置请查看webpack.config.js文件中devServer节点的配置和注释
 * 第二部分:
 *      1.webpack-dev-server 帮我们打包生成的bundle.js文件, 并没有存放到实际的物理磁盘上;而是直接托管到了电脑的内 存中,所以我们在项目根目录中根本找不到这个打包好的bundle.js文件
 *      2.webpack-dev-server 帮我们打包生成的bundle.js文件, 以一种虚拟的形式托管到了项目的根目录中,虽然看不到这个 文件,但是它与src dist等文件平级
 */
/**--------------------------------------------我是分割线------------------------------------------------ */
/**
 * 使用html-webpack-plugin来配置启动页面
 * 第一部分:
 *     1.运行 npm i html-webpack-plugin --save-dev 安装本地发开依赖
 *     2.修改webpack.config.js配置文件如下: 具体配置描述在webpack.config.js中查看
 *     const htmlWebpackPlugin = require('html-webpack-plugin')
 *     module.exports = {
 *         plugins:[
 *             new htmlWebpackPlugin({
 *                 template: path.join(__dirname, 'src/index.jtml'),
 *                 filename: 'index.html'
 *             })
 *         ]
 *     }
 *     3.这时候可以将index.html页面中的script标签注释掉了,因为这个插件会自动把bundle.js注入到index.html页面中
 * 作用: 
 *     1.自动在内存中根据指定页面生成一个内存页面
 *     2.自动把打包好的 bundle.js追加到内存页面中
 */
/**--------------------------------------------我是分割线------------------------------------------------ */
// 使用 import 语法, 导入 jQuery 包
import $ from 'jquery'
// 隔行变色
$(function () {
    $('li:odd').css('background', 'green')
    $('li:even').css('background', function () {
        return "pink"
    })
})
/**--------------------------------------------我是分割线------------------------------------------------ */
/**
 * 注意: 
 *      1.webpack默认只能打包处理 JS 类型的文件, 无法处理其他非 JS 类型的文件;
 *      2.默认情况下, webpack无法处理css文件中的 url 地址, 不管是图片还是字体库,只要是url地址都无法处理;
 *      3.如果要处理非 JS 类型的文件, 需要手动安装一些合适的第三方 loader 加载器;
 * 安装部分:
 *      1.如果想要打包处理 css 文件, 需要安装 npm i style-loader css-loader -D
 *      2.如果想要打包处理 less 文件, 需要安装 npm i less less-loader -D
 *      3.如果想要打包处理 scss 文件, 需要安装 npm i sass-loader node-sass -D
 *      4.如果想要打包处理 "样式" 文件中的url地址, 需要安装 npm i url-loader file-loader -D
 * 配置部分:
 *      1.打开webpack.config.js这个配置文件, 在里面新增一个配置节点叫做 module, 它是一个对象.
 *      2.在这个module对象身上有一个rules属性, 这个rules属性是一个数组; 它存放了所有第三方的匹配和处理规则;
 *      3.详细用法和配置解释请查看webpack.config.js中module节点注释
 * 处理过程:
 *      1.发现要处理的文件不是 JS 文件, 然后就去配置文件中查找有没有第三方文件的 loader 规则;
 *      2.如果能找到对应的规则, 就会调用对应的 loader 处理这种文件类型;
 *      3.在调用 loader 的时候, 调用顺序是从后往前调用
 *      4.当最后一个loader 调用完毕, 会把处理的结果直接交给webpack进行打包合并,最终输出到bundel.js中
 */
// 使用 import 语法, 导入 css 样式表
import './css/index.css'
// 使用 import 语法, 导入 less 样式表
import './css/index.less'
// 使用 import 语法, 导入 scss 样式表
import './css/index.scss'
// 使用 import 语法, 导入 bootstrap 中字体样式
import 'bootstrap/dist/css/bootstrap.css'
/**--------------------------------------------我是分割线------------------------------------------------ */
/**
 * webapck无法处理高级ES6或者ES7语法,需要借助于第三方loader
 * 第一部分:
 *      1.通过babel,可以将高级的语法转为低级的语法, 需要安装以下两套包, 安装babel相关的loader
 *      2.第一套包: npm i babel-core babel-loader babel-plugin-transform-runtime -D // babel的转换工具
 *      3.第二套包: npm i babel-preset-env babel-preset-stage-0 -D // 语法的对应关系
 * 配置部分:
 *      1.打开webpack.config.js文件, 在 module 节点下的rules数组中, 添加一个新的匹配规则
 *      1.1 {test:/\.js/$, use:'babel-loader', exclude:/node_modules/}
 *      1.2 注意: 在配置babel的loader规则的时候, 必须用exclude把node_modules这个目录排除掉
 *      1.3 如果不排除, 则babel会把node_modules文件中所有第三方js文件都打包编译, 非常消耗CPU同时打包速度非常慢
 *      1.4 如果不排除,哪怕babel把所有的node_modules中JS文件打包编译完成, 项目也无法正常运行
 *      2.在项目根目录中, 新建一个.babelrc的babel配置卫检, 这个配置文件属于JSON格式,书写要符合JSON规范
 *      2.1在 .babelre 写如下配置:
 *      {
 *          presets: ["env", "stage-0"] // 语法转化的对应关系
 *          plugins: ["transform-runtime"] // babel的转换工具
 *      }
 */
class Person {
    static obj = {
        name: '番茄'
    }
}
console.log(Person.obj)
/**--------------------------------------------我是分割线------------------------------------------------ */
/**
 * 在webpack构建工具中使用vue
 * 第一部分:
 *      1.npm i vue -S // 安装vue包
 *      2.import Vue from 'vue' // 在main.js文件中引用vue
 *    注意:
 *      1.在webpack中, 使用 import Vue from 'vue' 导入的"vue" 构造函数功能不够完整
 *      2.只提供了runtime-only的方式, 并没有提供像网页中那样使用script导入的包完整
 *      3.打开webpack.config配置文件,新建一个resolve节点,在其中的alias重新配置vue包引用的路径,引用完整的vue.js包
 * 配置部分:
 *      // resolve配置webpack如何寻找模块对应的文件
 *       resolve: {
 *          // 配置项通过别名来把原来导入路径映射成一个新的导入路径
 *          alias: {
 *             // 修改 vue 被导入时候的包的路径
 *            "vue$": "vue/dist/vue.js"
 *          }
 *       }
 *
 * 第二部分:
 *      1.webpack默认无法打包 .vue 文件, 需要安装相关的 loader;
 *      2.如果想要打包处理 css 文件, 需要安装 npm i vue-loader vue-template-compiler -D
 * 配置部分:
 *      1.在配置文件中, 新增 loader 配置项 { test:/\.vue$/, use: "vue-loader" }
 */
// 使用 import 语法, 导入 vue 包
import Vue from 'vue'
// 导入组件
import app from './app.vue'
/**
 * 结合webpack使用vue-router
 */
// 1. 使用 import 语法, 导入 vue-router 包
import VueRouter from 'vue-router'
// 2. 手动安装 VueRouter
Vue.use(VueRouter)
// 3. 导入创建的路由对象
import router from './router/router'

let vm = new Vue({
    el: "#app",
    data: {
        msg: '123456'
    },
    /**
     * 通过render函数将app组件放到页面中去, 当作主页面, render函数创建的组件会替换页面中el:"#app"控制的区域
     * render: function (createElements) {
     *      return createElements(app)
     *  }
     * 以下是简写: render: c => c(app)
     */
    render: c => c(app),
    router // 将路由对象挂载到 VM 实例上
})
/**
 * 总结梳理: webpack 中如何使用vue
 * 1.安装vue的包: 
 *      npm i vue -S
 * 2.由于 webpack 中, 推荐使用 .vue 这个组件模板文件定义组件, 所以需要安装能解析这种文件的loader:
 *      npm i vue-loader vue-template-vue-template-compiler -D
 * 3.在 main.js 入口文件中, 导入 vue 模块 import Vue from 'vue'
 * 4.在webpack.config.js配置文件中的resolve节点下alias节点中配置修改vue被导入时包的路径:
 *      resolve:{ alias:{ "vue$": "vue/dist/vue.js" } }
 * 5.定义一个 .vue 结尾的app组件, 其中组件由三部分组成: template script style
 * 6.使用 import app from './app.vue' 导入这个组件
 * 7.创建 vm 实例 :
 *      let vm = new Vue({ el: "#app", render: c => c(app) })
 * 8.在 index.html 页面中创建一个 id 为 app 的 div 元素, 作为 vm 实例要控制的区域
 */
/**--------------------------------------------我是分割线------------------------------------------------ */
/**
 * 在 node 中向外暴露成员和导入的形式
 * module.exports = {}
 * let 名称 = require('模块标识符')
 * 
 * 在 ES6 中, 使用 export.default 和 export 向外暴露成员
 * 例如: export.default = {}
 * 例如: export let abs = 'XXX'
 * 
 * 导入模块使用 import 模块名称 from '模块标识符' import '标识路径'
 * 例如: import XXX, {abs as newabs, xxx, xxx} from 'XXX'
 * 
 * 注意: 使用 export 向外暴露的成员, 只能使用 { } 的形式来接收, 这种形式叫做按需导出
 * 注意: 使用 export 可以向外暴露多个成员, 同时, 如果某些成员, 我们在 import 的时候不需要, 则可以不再 {} 中定义
 * 注意: 使用 export 导出的成员, 必须严格按照导出时候的名称, 来使用 { } 来接收
 * 注意: 使用 export 导出的成员, 如果就想换个名称来接收, 可以使用 as 来起别名
 */
/**
 * 组件中style标签lang属性和scoped属性
 * 注意: 普通的 style 标签只支持普通的样式写法, 如果要启用 scss 或 less 写法,需要为style元素设置lang属性
 * 注意: 设置 scoped 属性意味着当前你写的样式只会在当前组件内生效, 不会污染全局样式
 * scoped实现的原理:
 *  样式的 scoped 属性是 css 的属性选择器来实现的, 它会自动给根标签元素添加一个属性
 * 注意: 只要 style 标签是在 .vue 组件中定义的, 建议都为 style 开启 scoped 属性
 * 例如: <style lang="scss" scoped> </style>
 */