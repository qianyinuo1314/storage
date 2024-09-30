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
<van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      v-model="username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>

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


  
  <van-uploader v-model="fileList" multiple />

<div>
  <van-form @failed="onFailed">
  <van-cell-group inset>
    <!-- 通过 pattern 进行正则校验 -->
    <van-field
      v-model="value1"
      name="pattern"
      placeholder="正则校验"
      :rules="[{ pattern, message: '请输入正确内容' }]"
    />
    <!-- 通过 validator 进行函数校验 -->
    <van-field
      v-model="value2"
      name="validator"
      placeholder="函数校验"
      :rules="[{ validator, message: '请输入正确内容' }]"
    />
    <!-- 通过 validator 返回错误提示 -->
    <van-field
      v-model="value3"
      name="validatorMessage"
      placeholder="校验函数返回错误提示"
      :rules="[{ validator: validatorMessage }]"
    />
    <!-- 通过 validator 进行异步函数校验 -->
    <van-field
      v-model="value4"
      name="asyncValidator"
      placeholder="异步函数校验"
      :rules="[{ validator: asyncValidator, message: '请输入正确内容' }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="onChange">
      提交
    </van-button>
  </div>
</van-form>

</div>
  <div></div>
</template>


// <script>
import { ref } from 'vue';
import { closeToast, showLoadingToast } from 'vant';
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
import { Uploader } from 'vant';


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
    const fileList = ref([
      { url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg' },
      // Uploader 根据文件后缀来判断是否为图片文件
      // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      { url: 'https://cloud-image', isImage: true },
    ]);
//表单验证基础用法
const username = ref('');
    const password = ref('');
    const onSubmit = (values) => {
      console.log('submit', values);
    };

    //表单校验
    const value1 = ref('');
    const value2 = ref('');
    const value3 = ref('abc');
    const value4 = ref('');
    const pattern = /\d{6}/;

    // 校验函数返回 true 表示校验通过，false 表示不通过
    const validator = (val) => /1\d{10}/.test(val);

    // 校验函数可以直接返回一段错误提示
    const validatorMessage = (val) => `${val} 不合法，请重新输入`;

    // 校验函数可以返回 Promise，实现异步校验
    const asyncValidator = (val) =>
      new Promise((resolve) => {
        showLoadingToast('验证中...');

        setTimeout(() => {
          closeToast();
          resolve(val === '1234');
        }, 1000);
      });

    const onFailed = (errorInfo) => {
      console.log('failed', errorInfo);
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



