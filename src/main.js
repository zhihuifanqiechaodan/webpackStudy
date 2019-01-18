/*
 * @Description: 
 * @Author: Tank
 * @GitHub: https://github.com/zhihuifanqiechaodan
 * @Date: 2019-01-18 14:16:47
 * @LastEditTime: 2019-01-18 15:25:03
 */

// main.js文件项目的入口文件

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
 *      4.2 运行npm run dev 后会有报错提示需要依赖于webpack-cli, 所以需要在npm i webpack-cli -D 安装这个包到本地开发依赖
 *      5.这时候就可以实时编译我们的代码了(编写代码结束后保存自动编译,只需要刷新页面就能出现效果了)
 *      6.关于配置webpack-dev-server的其他配置请查看webpack.config.js文件中devServer节点的配置和注释
 * 第二部分:
 *      1.webpack-dev-server 帮我们打包生成的bundle.js文件, 并没有存放到实际的物理磁盘上;而是直接托管到了电脑的内存中,所以我们在项目根目录中根本找不到这个打包好的bundle.js文件
 *      2.webpack-dev-server 帮我们打包生成的bundle.js文件, 以一种虚拟的形式托管到了项目的根目录中,虽然看不到这个文件,但是它与src dist等文件平级
 */

 /**
  * 使用html-webpack-plugin来实现
  */
import $ from 'jquery'
// 隔行变色
$(function () {
    $('li:odd').css('background', 'black')
    $('li:even').css('background', function () {
        return "pink"
    })
})