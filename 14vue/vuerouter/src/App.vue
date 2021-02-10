<template>
  <div id="app">
<!--    <router-link to="/home" tag="button">首页</router-link>-->
<!--    <router-link to="/about" tag="button">关于</router-link>-->
    <router-link to="/user/jt">用户</router-link>
<!--    <router-link :to="{path: '/profile', query: {name: 'jt', age: 22}}">档案</router-link>-->

    <button @click="profileClick">档案</button>

    <!--  使用keep-alive可以使得这个组件不会被销毁 exclude属性指定哪些组件排除 -->
    <keep-alive exclude="Profile,User">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'jt',
      query: {
        name: 'jt',
        age: 22
      }
    }
  },
  methods: {
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: this.query
      })
    }
  }
}
</script>

<style>

</style>
