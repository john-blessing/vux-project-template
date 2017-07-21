<template>
  <div class="helloPage">
    <flexbox align="center" justify="center">
      <flexbox-item><img src="../assets/vux_logo.png" alt=""><h1> Hello Vux</h1></flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import {
    Flexbox,
    FlexboxItem
  } from 'vux'
  export default {
    components: {
      Flexbox,
      FlexboxItem
    }
  }

</script>

<style lang="less">
  .helloPage{
    width: 100%;
    height: 100vh;
    .vux-flexbox{
      height: 100%;
      .vux-flexbox-item{
          width: 100%;
          text-align: center;
      }
    }
    img{
      width: 150px;
    }
    h1{
      text-align: center;
    }
  }

</style>
