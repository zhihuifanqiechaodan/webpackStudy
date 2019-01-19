/*
 * @Description: 
 * @Author: Tank
 * @GitHub: https://github.com/zhihuifanqiechaodan
 * @Date: 2019-01-18 14:17:17
 * @LastEditTime: 2019-01-19 13:12:12
 */
const path = require('path')
// 启用热跟新的第二步
const webpack = require('webpack')
// 导入在内存中生成 HTML 页面的插件 (注意: 只要是插件都一定要放到plugins这个节点中)
const htmlWebpackPlugin = require('html-webpack-plugin')

// 这个配置文件, 起始就是一个 js 文件, 通过Node中的模块操作, 向外暴露了一个配置对象
module.exports = {
    // 提供 mode 配置选项，告知 webpack 使用相应模式的内置优化。
    mode: 'development',
    // 入口, 表示要使用 webpack 打包那个文件
    entry: path.join(__dirname, './src/main.js'),
    // 出口文件的配置项
    output: {
        // 指定打包好的文件, 输出到那个目录去
        path: path.join(__dirname, './dist'),
        // 指定打包好的文件的名称
        filename: 'bundle.js'
    },
    // 配置 dev-server 命令参数的节点
    devServer: {
        // 自动打开浏览器
        open: true,
        // 设置启动时候的运行端口
        port: 3000, 
        /**
         * 指定托管的根目录
         * 使用 contentBase 指令需要指定启动的目录, 同时还需要修改index.html中script标签的src属性
         * 所以推荐使用 html-webpack-plugin 插件配置启动页面(请到main.js中查看介绍)
         */
        contentBase: 'src',
        // 启用热更新的第一步
        hot: true
    },
    // 配置插件的节点
    plugins: [
        // new一个热更新的模块对象, 这是启用热更新的第三步
        new webpack.HotModuleReplacementPlugin(),
        // 创建一个在内存中生成 HTML 页面的插件的配置
        new htmlWebpackPlugin({
            // 指定模板页面, 将来会根据指定的页面路径, 去生成内存中的页面
            template: path.join(__dirname, './src/index.html'),
            // 指定生成页面的名称 (注意: 浏览器打开默认访问的是index.html页面)
            filename: 'index.html'
        })
    ]
}