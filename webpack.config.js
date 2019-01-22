/*
 * @Description: 
 * @Author: Tank
 * @GitHub: https://github.com/zhihuifanqiechaodan
 * @Date: 2019-01-18 14:17:17
 * @LastEditTime: 2019-01-22 15:13:55
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
        contentBase: '/',
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
    ],
    // 这个节点, 用于配置所有第三方模块的"加载器"
    module: {
        // 所有第三方模块的匹配规则
        rules: [{
                test: /\.css$/, // 配置处理 .css 文件的第三方 loader 规则
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.less$/, // 配置处理 .less 文件的第三方 loader 规则
                use: ['style-loader', 'css-loader', 'less-loader']
            }, {
                test: /\.scss$/, // 配置处理 .scss 文件的第三方 loader 规则                
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.(jpg|png|gif|bmp|jpeg)$/, // 配置处理图片路径的第三方 loader 规则 
                use: [{
                    // 处理图片和字体的第三方loader
                    loader: 'url-loader',
                    options: {
                        /**
                         * 详解:
                         *      limit给定的值是图片的大小, 单位是byte,如果引用的图片大于等于给定的limit值,则不会被转为base64格式的字符串, 如果图片小于给定的 limit 值, 则会被转为base64格式的字符串
                         * 注意:
                         *      图片路径虽然不会被转为base64格式的字符串,但是会被转为hash值,主要是为了防止不同文件夹中的图片的重名
                         */
                        limit: 171371,
                        /**
                         * 详解:
                         *      如果想要即显示图片的原本名字和格式,但又不想因为重名而显示出同一张图片按照以下配置
                         *      hash值最多32位, [hash:8] 意味着在图片名称前面放置一个8位的hash值然后通过 "-"连接
                         *      [name] 设置图片名称为原本的图片名称
                         *      [ext] 设置图片的格式为原本图片的格式
                         */
                        name: '[hash:8]-[name].[ext]'
                    }
                }]
            }, {
                test: /\.(ttf|woff2|woff|eot|svg)$/, // 配置处理字体文件的第三方 loader 规则 
                use: 'url-loader'
            },
            {
                test: /\.js$/, // 配置 babel 来转换高级的JS语法
                use: 'babel-loader',
                exclude: /node_modules/ // 忽略node_modules目录下的js文件转换
            }
        ]
    }
}