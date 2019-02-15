<!--
 * @Description: 
 * @Author: Tank
 * @GitHub: https://github.com/zhihuifanqiechaodan
 * @Date: 2019-01-25 14:07:16
 * @LastEditTime: 2019-02-15 17:01:33
 -->
<template>
  <div>
    <h1>我是app组件</h1>
    <router-link to="/login">登录</router-link>
    <router-link to="/acount">注册</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "1213124"
    };
  }
};
</script>