<template>
  <div id="app">
    <transition name="slide-fade">
      <router-view keep-alive></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    mounted() {
      console.log(this.$store.state.route.path)
      console.log(this.$store.state.route.params)
      console.log(this.$store.state.route.query)
    }
  }

</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-enter {
    transform: translateX(10px);
    opacity: 0;
  }

  body {
    background-color: #fbf9fe;
  }

</style>
