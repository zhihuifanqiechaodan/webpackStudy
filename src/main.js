/*
 * @Description: 
 * @Author: Tank
 * @GitHub: https://github.com/zhihuifanqiechaodan
 * @Date: 2019-01-18 14:16:47
 * @LastEditTime: 2019-01-19 17:04:16
 */

// main.js文件项目的入口文件
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