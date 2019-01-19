<!--
 * @Description: 
 * @Author: Tank
 * @GitHub: https://github.com/zhihuifanqiechaodan
 * @Date: 2019-01-18 14:17:34
 * @LastEditTime: 2019-01-19 13:34:58
 -->

## 初步渐进的学习webpack的使

#### 关于webpack

借助webpack这个前端自动化构建工具, 可以完美实现资源的合并/打包/压缩/混淆等诸多功能

根据官网的图片介绍webpack打包的过程

[wenpack官网](<https://www.webpackjs.com/> )

#### 安装webpack的两种方式

1. 在命令行运行以下代码, 全局安装webpack,这样就能在全局使用webpack的命令

   ```javascript
   npm i webpack -g
   ```

2. 在项目根目录中打开命令行窗口/终端运行, 安装到项目依赖

   ```javascript
   npm u webpack --save-dev 使用webpack打包构建项目
   ```


#### 使用webpack打包构建项目

1. 在命令行运行以下代码, 初始化项目, 使用npm管理项目中的依赖包

   ```javascript
   npm init -y
   ```
2. 剩余关于各个配置介绍请查看main.js文件,有详细注释.