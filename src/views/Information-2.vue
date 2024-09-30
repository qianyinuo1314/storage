<template>
<div class="sss">


     <header>
     <div class="h-1"> 
        <van-row gutter="50">
  <van-col span="8">
    <a href="javascript:history.back()"><van-icon name="arrow-left" /></a>
    </van-col>
 
  <van-col span="16">信息采集</van-col>
</van-row>

</div> 

  
     </header>   
     <section>
        <div class="h-2">

    <!-- <van-progress :percentage="50" /> -->

  
   <van-progress :percentage="25" 
stroke-width="8" 
color="#fff" 
 :show-pivot="false"
  track-color="#855E4230 " />
</div>
     <div class="s-1">
        <div class="s-1-1"> 当前状况</div>
       
        <div class="s-1-2">
             <van-form @submit="onSubmit"  >
             <van-cell-group inset >
                <van-field class="vvv"
  v-model="result"
  is-link
  readonly
  label-align="top"
  required
  name="picker"
  label="投运情况"
  placeholder="请选择投运情况"
  @click="showPicker = true"
/>
<van-popup v-model:show="showPicker" position="bottom">
  <van-picker
    :columns="columns"
    @confirm="onConfirm"
    @cancel="showPicker = false"
  />
</van-popup>
<!-- 时间 -->
<!-- <van-field
  v-model="time"
  is-link
  readonly
  name="datePicker"
  label="时间选择"
  placeholder="点击选择时间"
  @click="showPicker = true"
/>
<van-popup v-model:show="showPicker" position="bottom">
  <van-date-picker @confirm="onConfirm" @cancel="showPicker = false" />
</van-popup> -->


                

</van-cell-group>
 <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit" 
   >
      下一步
    </van-button>
  </div>
</van-form>
                
                

        
     </div>

     </div>
     
    
     
     </section>
     </div>
     <div></div>
     
</template>
<script setup>
import { createApp } from 'vue';
import { NavBar } from 'vant';
import { Progress } from 'vant';
import { Picker } from 'vant';
import { ref } from 'vue';
import { DatePicker } from 'vant';
      const result = ref('');
    const showPicker = ref(false);
    const columns = [
      { text: '已投运', value: '已投运' },
      { text: '未投运', value: '未投运' },
      
    ];

    const onConfirm = ({ selectedOptions }) => {
      result.value = selectedOptions[0]?.text;
      showPicker.value = false;
    };
    // const time = ref('');
    // const showPicker = ref(false);
    // const onConfirm = ({ selectedValues }) => {
    //   result.value = selectedValues.join('/');
    //   showPicker.value = false;
    // };
    //表单验证基础用法
    const name = ref('');
    const daima = ref('');
    const location = ref('');
    const address = ref('');
    const photo = ref('');
    const password = ref('');
    const onSubmit = (values) => {
      console.log('submit', values);
      
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
     height: 400px;
}

.s-1-1{
   
    background: rgb(255, 255, 255);
     border-radius:10px  10px 0px 0;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-left: 20px;
    margin-bottom: 10px;
     font-size: 13px;
}
.s-1-2{
    background: rgb(255, 255, 255);
    margin-left: 20px;
   
}
.vvv{
 font-size: 10px;
}
</style>
