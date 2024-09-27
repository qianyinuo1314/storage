<template>
  <div class="about">
    <h1>This is an about page</h1>
<van-tabbar v-model="active">
  <van-tabbar-item icon="home-o">标签</van-tabbar-item>
  <van-tabbar-item icon="search">标签</van-tabbar-item>
  <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
</van-tabbar>
<!-- 轮播图 -->
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item >
    <img src="../assets/1.jpg" class="l-1">
  </van-swipe-item>
  <van-swipe-item>
    <img src="../assets/l-3.jpg"  class="l-1">
  </van-swipe-item>
  <van-swipe-item>
    <img src="../assets/l-1.jpeg"  class="l-1">
  </van-swipe-item>
  <van-swipe-item>
    <img src="../assets/l-2.jpeg"  class="l-1">
  </van-swipe-item>
</van-swipe>




  </div>
</template>


<script>
import { ref } from 'vue';
export default {
  setup() {
    const active = ref(0);
    return { active };
  },
};
</script>

<style>
  .my-swipe .van-swipe-item {
    color: #fff;
    width: 672px;
    height: 278px;
    font-size: 20px;
    line-height: 278px;
    text-align: center;
   /* background:rgb(185, 126, 126); */
  }
  .l-1{
    width: 672px;
    height: 278px;
  }
</style>



