<template>
<div class="sss">


     <header>
     <div class="h-1"> 
        <van-row gutter="50">
  <van-col span="8">
    <a href="javascript:history.back()"><van-icon name="arrow-left" /></a>
    </van-col>
  <van-col span="8">信息采集</van-col>
  <van-col span="8"></van-col>
</van-row>

</div> 

  
     </header>   
     <section>
        <div class="h-2">

    <!-- <van-progress :percentage="50" /> -->

  
   <van-progress :percentage="37.5" 
stroke-width="8" 
color="#fff" 
 :show-pivot="false"
  track-color="#855E4230 " />
</div>
     <div class="s-1">
        <div class="s-1-1">技术路线与指标</div>
       
        <div class="s-1-2">
             <van-form @submit="onSubmit"  >
             <van-cell-group inset >
                 <van-field name="radio" label="是否梯次利用"
                class="custom-field-font"
            
               label-align="top"
              >
               <template #input>
              <van-radio-group v-model="checked" direction="horizontal">
              <van-radio name="1" icon-size="18px" >是&nbsp&nbsp&nbsp&nbsp</van-radio>
              <van-radio name="2" icon-size="18px">否</van-radio>
            </van-radio-group>
            </template>
           </van-field>
                <van-field class="custom-field-font"
                        
                         v-model="form.result"
                         is-link
                         readonly
                         label-align="top"
                         name="picker"
                         label="技术类型细分"
                         placeholder="请输入"
                         @click="showPicker = true"
              />
              <van-popup v-model:show="showPicker" position="bottom">
                <van-picker
                     :columns="columns"
                   
                    @confirm="onConfirm"
                    @cancel="showPicker = false"
                />
              </van-popup>
              <van-field class="custom-field-font"
                        
                         v-model="form.result1"
                         is-link
                         readonly
                         label-align="top"
                         name="picker"
                         label="新型储能生产厂家"
                         placeholder="请输入"
                         @click="showPicker = true"
              />
              <van-popup v-model:show="showPicker" position="bottom">
                <van-picker
                     :columns="manufactor"
                   
                    @confirm="onConfirm1"
                    @cancel="showPicker = false"
                />
              </van-popup>
                    <van-field class="custom-field-font"
                         required
                         v-model="form.result1"
                         is-link
                         readonly
                         label-align="top"
                         name="picker"
                         label="额定充电功率(千瓦)"
                         placeholder="请输入"
                         @click="showPicker = true"
              />
              <van-popup v-model:show="showPicker" position="bottom">
                <van-picker
                     :columns="manufactor"
                   
                    @confirm="onConfirm1"
                    @cancel="showPicker = false"
                />
              </van-popup>
                 <van-field class="custom-field-font"
                         v-model="form.name"
                         name="额定放电功率(千瓦)"
                         
                         label="额定放电功率(千瓦)"
                         placeholder="请输入"
                         label-align="top"
                         :rules="[{ required: true, message: '请输入' }]"
              />
              <van-field class="custom-field-font"
                         v-model="form.name"
                         name="额定能量(千瓦)"
                         
                         label="额定能量(千瓦)"
                         placeholder="请输入"
                         label-align="top"
                         :rules="[{ required: true, message: '请输入' }]"
              />
            
                 <van-field class="custom-field-font"
                         v-model="form.name"
                         name="额定充放电率"
                         
                         label="额定充放电率"
                         placeholder="请输入"
                         label-align="top"
                         :rules="[{ required: true, message: '请输入' }]"
              />
                
</van-cell-group>

<van-tabbar v-model="active">
   <van-tabbar-item name="home"
   >
    <div style="margin: 10px;width:120px;padding:10px ">
    <van-button  plain type="primary" native-type="submit" width:80px  block  @click="router.back()">
                上一步
              </van-button>
    </div>
    </van-tabbar-item>
    <van-tabbar-item name="home" 
   >
    <div style="margin: 10px;width:120px;padding:10px ">
    <van-button  type="primary" native-type="submit" width:80px  block>
                下一步
              </van-button>
    </div></van-tabbar-item>
</van-tabbar>
</van-form>
                
                

        
     </div>

     </div>
     </section>
     </div>
     <div></div>
     
</template>
<script setup>

import {areaList} from '@vant/area-data';
import { Area } from 'vant';
import { createApp } from 'vue';
import { NavBar } from 'vant';
import { Progress } from 'vant';
import { Picker } from 'vant';
import { ref } from 'vue';
import { DatePicker } from 'vant';
import router from "@/router"; 
 const active = ref(0);
 const showArea = ref(false);
     const checked = ref('');
     const checked1 = ref('');
     const checked2= ref('1');
     const checked3 = ref('1');
   
   //表单验证基础用法
const fileList = ref([]);
const form = ref({
  result1: '',
  result:'',
  tzf:'',
  name: '',
  company:'',
  company1: '',
  company2: '',
});
 const showPicker = ref(false);
    const columns = ref([
      { text: '传感器采集', value: '传感器采集' },
      { text: '爬虫采集', value: '爬虫采集' },
      { text: '录入采集', value: '录入采集' },
      { text: '导入采集', value: '导入采集' },
      { text: '接口采集', value: '接口采集' },
    ]);
     const manufactor =ref( [
      { text: '1111', value: '传感器采集' },
      { text: '爬虫采集', value: '爬虫采集' },
      { text: '录入采集', value: '录入采集' },
      { text: '导入采集', value: '导入采集' },
      { text: '接口采集', value: '接口采集' },
    ]);
const onConfirm = ({selectedOptions}) => {
 
  form.value.result = selectedOptions[0]?.text;

  showPicker.value = false;
};
const onConfirm1 = ({selectedOptions}) => {
   form.value.result1 = selectedOptions[0]?.text;
  showPicker.value = false;
};


const onSubmit = () => {
  router.push('/Information-1')
};

</script>
<style scoped >
*{
    margin: 0;
    padding: 0;
    /* background-image:url('../assets/header.png') ; */
    background-size:  100% 100px;
    background-repeat: no-repeat;
   
}

a{
    text-decoration: none;
    color: rgb(255, 255, 255);

}
ul{
    list-style: none;
}
.sss{
background-image:url('../assets/header.png') ;
    background-size:  100% 250px;
    background-repeat: no-repeat;
}
header{
  
    color: rgb(255, 255, 255);
    
}
.h-1{
    height: 50%;
    padding-top:20px ;
    padding-bottom:10px ;
     margin-left: 20px;
     font-size: 20px;

}
.h-2{
    
    height: 50%;
    margin-left: 20px;
    margin-right: 20px;
    height: 40px;
     padding-top: 15px;
     padding-bottom: 15px;
    background-image:url('../assets/header.png') ;
    /* margin-bottom: 20px; */
}
section>div
{
    background: rgb(255, 255, 255);
    
    margin-left: 20px;
    margin-right: 20px;
    /* border-radius:10px  10px 0px 0; */
   
}
.s-1{
    
     border-radius:10px  10px 0px 0;
    
     /* height: 600px; */
     /* line-height:180%;  */
}

.s-1-1{
   
    background: rgb(255, 255, 255);
     border-radius:10px  10px 0px 0;
    padding-top: 10px;
    /* padding-bottom: 10px; */
    margin-left: 20px;
    /* margin-top: ; */
    margin-bottom: 10px;
     font-size: 17px;
}
.s-1-2{
    background: rgb(255, 255, 255);
    margin-left: 20px;
     padding-bottom: 40px;
   
}
.custom-field-font{
/* font-size: 10px; */
padding: 10px;
/* margin-left: 15px; */
 
 
}
.vvv{
 font-size: 10px;
}
</style>
