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

<!-- 选择省份 -->
<van-field class="ss"
  v-model="result"
  is-link
  readonly
  name="picker"
  
    label-align="top"
  label="选择器"  
  placeholder="点击选择城市"
  @click="showPicker = true"
/>
<van-popup v-model:show="showPicker" position="bottom">
  <van-picker
    :columns="columns"
    @confirm="onConfirm"
    @cancel="showPicker = false"
  />
</van-popup>



  </div>
  <div >

<van-cell-group inset>
   <van-field 
    v-model="value"
    label="项目名称"
    placeholder="请输入项目名称"
    label-align="top"
  />
</van-cell-group>

  </div>
  <div>
    <van-field
  v-model="result"
  is-link
  readonly
  name="area"
  label="地区选择"
  placeholder="点击选择省市区"
  @click="showArea = true"
/>
<van-popup v-model:show="showArea" position="bottom">
  <van-area
    :area-list="areaList"
    @confirm="onConfirm"
    @cancel="showArea = false"
  />
</van-popup>
  </div>
  <div></div>
</template>


// <script>
// import { ref } from 'vue';
// export default {
//   setup() {
//     const active = ref(0);
//     return { active };
//   },
// };
// </script>
<script setup>
import {ref} from 'vue';
import { areaList } from '@vant/area-data';

const active = ref(0);

//
//  const result = ref('');
//     const showPicker = ref(false);
//     const columns = [
//       { text: '杭州', value: 'Hangzhou' },
//       { text: '宁波', value: 'Ningbo' },
//       { text: '温州', value: 'Wenzhou' },
//       { text: '绍兴', value: 'Shaoxing' },
//       { text: '湖州', value: 'Huzhou' },];
//       const onConfirm = ({ selectedOptions }) => {
//       result.value = selectedOptions[0]?.text;
//       showPicker.value = false;
//     };
const result = ref('');
    const showArea = ref(false);
    const onConfirm = ({ selectedOptions }) => {
      showArea.value = false;
      result.value = selectedOptions.map((item) => item.text).join('/');
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
  .ss{
    font-size: 20px;
  }
  .cs{
    width: 200px;
    height: 200px;
    font-size: 40px;
  }
  .inset{}
</style>



