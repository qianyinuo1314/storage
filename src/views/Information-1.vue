<template>
<div class="home">
  <header>
    <div class="header-top">
        <div class="top-left"> <</div>
        <div class="top-right">信息采集</div>
    </div>
    <div class="header-bottom">

    </div>
     <section>
       
        <div class="s-1">
            
                <div class="s-1-left">基本情况</div>
                <div class="s-1-right">基本情况信息必填</div>
            
        </div>
        <div class="s-2">
            <!-- 选择省份 -->
          

<van-field class="custom-field-font"
  v-model="result"
  is-link
  readonly
  name="picker"
  label-align="top"
  required
  
  label="省份" 
  
  
  placeholder="请选择所在省份"
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
        <div class="s-3">
        
            <van-cell-group inset >
   <van-field class="custom-field-font"
    v-model="value"
    
    required
    label="项目名称"
    placeholder="请输入项目名称"
    label-align="top"
  />
</van-cell-group>
        </div>
        <div class="s-4">
                    <van-cell-group inset >
   <van-field class="custom-field-font"
    v-model="value"
    
    required
    label="项目代码"
    placeholder="请输入项目代码"
    label-align="top"
  />
</van-cell-group>
        </div>
        <div class="s-5">
            <van-cell-group inset >
   <van-field class="custom-field-font"
    v-model="value"
    
    required
    label="建设地点"
    placeholder="请选择建设地点"
    label-align="top"
  />
</van-cell-group>

        </div>
        <div class="s-6">
            <van-field class="custom-field-font"
  required         
  v-model="result"
  is-link
  readonly
  name="area"
  label="具体地址"
  placeholder="请输入"
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
        <div class="s-7" >
            <van-field  required name="uploader" label="电站图片" label-align="top" class="custom-field-font">
  <template #input>
    <van-uploader v-model="value" />
  </template>
</van-field>


        </div>
        <div class="s-8">
            
            <van-button type="primary" to="index" class="s-8-1">下一步</van-button>


        </div>
        <div class="s-9"></div>
      
     </section>

  </header>
 
  <footer></footer>
</div>
  
</template>
<script setup>
import {ref} from 'vue';

import { Uploader } from 'vant';
import { areaList } from '@vant/area-data';

const active = ref(0);

//  选择省份
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
    //文件上传
    // const value = ref([
    //   { url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg' },
    // ]);
    //具体地点选择
    const result = ref('');
    const showArea = ref(false);
    const onConfirm = ({ selectedOptions }) => {
      showArea.value = false;
      result.value = selectedOptions.map((item) => item.text).join('/');
    };


    


</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    
   
}

a{
    text-decoration: none;

}
ul{
    list-style: none;
}
header, section, footer {

    width: 750px;
    margin: 0 auto;
    /* background-color: rgb(152, 31, 216); */
    /* background: blue; */
     
}
header{
    width: 750px;
    height: 521px;
    background-repeat: no-repeat;
    background-image:url('../assets/header.png') ;

}
.header-top{
float: left;
width: 750px;
height: 150px;
/* background: rgb(227, 134, 134); */
}
.top-left{
width: 100px;
height: 50px;
/* background: rgb(214, 6, 6); */
color:rgb(255, 255, 255);
float: left;
text-align: center;
margin-top: 50px;
font-size: 50px;

}
.top-right{
/* width: 100%; */
height: 150px;
/* background: rgb(0, 0, 0); */
color:rgb(255, 255, 255);
text-align: center;
 display: flex;
align-items: center;
justify-content: center;
font-size: 40px;
margin-right: 100px;



}

.header-bottom{
width: 750px;
height: 100px;
/* background: green; */
float: left;
}

section{
    width: 690px;
    height: 1000px;
    margin-left: 30px;
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    background: white;
    border-radius:20px  20px 0px 0;
}
section>div{
    margin-left: 20px;
     margin-right: 30px;
}

.s-1{
    flex:1;
    background: rgb(255, 255, 255);
    margin-left:20px ;
    
    

}

.s-1-left{
   color: black; 
   width: 60%;
   height: 50%;
   float: left;
   font-size: 30px;
   text-align: left;
   margin-top: 20px;
   /* background: rgb(71, 57, 21); */
   float: left;
    
   

}
.s-1-right{
    width: 40%;
    height: 50%;
   color: rgb(241, 131, 28); 
   /* background: goldenrod; */
   font-size: 20px;
   text-align: right;
   margin-top: 20px;
   float: left;


}
.s-2{
    flex:1;
    /* background: rebeccapurple;
     */
}
.custom-field-font{
font-size: 20px;
}
.s-3{
    flex:1;
     /* background: rgb(3, 2, 5); */
    
}
.s-4{
    flex:1;
    
}
.s-5{
    flex:1;
    
}
.s-6{
    flex:1;
    
}
.s-7{
    flex:1;
    
}
.s-8{
    flex:1;
   
}
.s-8-1{
    width: 100%;
    height: 80px;
    
}
/* .s-9{
    flex:2
} */

</style>




