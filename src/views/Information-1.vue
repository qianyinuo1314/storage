<template>
  <div class="sss">
    <header>
      <div class="h-1">
        <van-row gutter="50">
          <van-col span="8">
            <!--            <a href="javascript:history.back()">-->
            <!--              <van-icon name="arrow-left"/>-->
            <!--            </a>-->
            <!-- 返回上一层页面 -->
            <van-icon @click="router.back()" name="arrow-left"/>
          </van-col>
          <van-col span="16">信息采集</van-col>
        </van-row>
        <!-- <van-nav-bar
         title="信息采集"
         left-text=""
         left-arrow
         @click-left="onClickLeft"
         />-->

      </div> 
      <div class="h-2">
        <!-- <van-progress :percentage="50" /> -->
        <van-progress :percentage="12.5"
                      stroke-width="8"
                      color="#fff"
                      :show-pivot="false"
                      track-color="#855E4230 "/>
      </div>
    </header>
    <section>
      
      <div class="s-1">
        <div class="s-1-1"> 当前状况</div>
        <div class="s-2">
          <!-- 选择省份 -->
          
          <van-form @submit="onSubmit">
            <van-cell-group inset>
              <van-field class="custom-field-font"
                         required
                         v-model="form.result"
                         is-link
                         readonly
                         label-align="top"
                         name="area"
                         label="省份"
                         placeholder="请输入"
                         @click="showArea = true"
              />
              <van-popup v-model:show="showArea" position="bottom">
                <van-area
                    :area-list="areaList"
                    :columns-num="1"
                    @confirm="onConfirm"
                    @cancel="showArea = false"
                />
              </van-popup>
              <van-field class="custom-field-font"
                         v-model="form.name"
                         name="项目名称"
                         required
                         label="项目名称"
                         placeholder="请输入项目名称"
                         label-align="top"
                         :rules="[{ required: true, message: '请输入' }]"
              />
              <van-field class="custom-field-font" 
                         v-model="form.daima"
                         name="项目代码"
                         required
                         label="项目代码"
                         placeholder="请输入项目代码"
                         label-align="top"
                         :rules="[{ required: true, message: '请输入' }]"
              />
              <van-field class="custom-field-font"
                         v-model="form.location"
                         name="建设地点"
                         required
                         label="建设地点"
                         placeholder="请选择建设地点"
                         label-align="top"
                         :rules="[{ required: true, message: '请输入' }]"
              />
              <van-field class="custom-field-font"
                         v-model="form.address"
                         name="具体地址"
                         required
                         label="具体地址"
                         placeholder="请输入具体地址"
                         label-align="top"
                         :rules="[{ required: true, message: '请输入' }]"
              />
              <van-field class="custom-field-font"
                         v-model="form.photo"
                         required
                         name="uploader"
                         label="电站图片"
                         label-align="top"
                         :rules="[{ required: true, message: '请输入' }]"
              >
                <template #input>
                  <van-uploader v-model="fileList" multiple/>
                </template>
              </van-field>
            </van-cell-group>
            <van-tabbar v-model="active">
            <div style="margin: 10px;width:100%">
              
              <van-button round block type="primary" native-type="submit">
                下一步
              </van-button>
              
            </div>
            </van-tabbar>
          </van-form>
        </div>
      </div>
    </section>
  </div>
 
  <div></div>

</template>
src
<script setup>
import {ref} from 'vue';

import {Uploader} from 'vant';
import {areaList} from '@vant/area-data';
import {Progress} from 'vant';
import router from "@/router";

const active = ref(0);
const showArea = ref(false);


//文件上传
const fileList = ref([]);
const form = ref({
  result: '',
  name: '',
  daima: '',
  location: '',
  address: '',
  photo: '',
  password: '',
})
const onConfirm = ({selectedOptions}) => {
  showArea.value = false;
  form.value.result = selectedOptions.map((item) => item.text).join('/');
};
const onSubmit = () => {
  
  router.push('/Information-2')
};


</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  /* background-image:url('../assets/header.png') ; */
  background-size: 100% 100px;
  background-repeat: no-repeat;

}

a {
  text-decoration: none;
  color: rgb(255, 255, 255);

}

ul {
  list-style: none;
}

.sss {
  background-color: transparent;
  background-image: url('../assets/header.png');
  background-size: 100% 250px;
  background-repeat: no-repeat;
}

header {

  color: rgb(255, 255, 255);

}

.h-1 {
  height: 50%;
  padding-top: 20px;
  padding-bottom: 10px;
  margin-left: 20px;
  font-size: 20px;

}


section{
 
}

section > div {
 

  margin-left: 20px;
  margin-right: 20px;
  /* border-radius:10px  10px 0px 0; */

}
.h-2 {

  height: 50%;
  margin-left: 20px;
  margin-right: 20px;
  height: 40px;
  padding-top: 15px;
  padding-bottom: 15px;
  /* background-image: url('../assets/header.png'); */
  /* margin-bottom: 20px; */
}
.s-1 {

  border-radius: 10px 10px 0px 0;
   background: white;
  
  /* height: 400px; */
}

.s-1-1 {

 background: white;
  border-radius: 10px 10px 0px 0;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  
  /* font-size: 13px; */
}

.s-1-2 {
  
  margin-left: 20px;

  

}

.s-2 {
  margin-left: 15px;
  margin-right: 10px;
   padding-bottom: 40px;
}
.custom-field-font{
/* font-size: 10px; */
padding: 10px;
/* margin-left: 15px; */
 
 
}
.vvv {
  font-size: 10px;
 
  
}
</style>
