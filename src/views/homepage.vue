<template>
  <header>
    <div class="top-one">首页</div>
    <!-- <router-link to="/about">Home</router-link> -->
    <div class="top-two">
      <!-- 轮播图 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="../assets/1.jpg" class="l-1">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/l-3.jpg" class="l-1">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/l-1.jpeg" class="l-1">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/l-2.jpeg" class="l-1">
        </van-swipe-item>
      </van-swipe>
      <!-- <img src="../assets/1.jpg" alt="" class="top-img"> -->
    </div>
    <div class="top-three">  <!--  两个模块-->
      <div class="top-three-left">
        <router-link to="/Information-1" >
        <div class="top-left-1">
          统计分析

        </div>
        <div class="top-left-2">

          查看详情
        </div>
         </router-link>


      </div>
      <div class="top-three-right">
      <router-link to="/Information-1"  >
      
        
        <div class="top-left-1">
          信息采集

        </div>
        <div class="top-left-2">

          填写信息
        </div>
     
      </router-link>
      </div>
      
    </div>
  </header>
  <section>
    <!-- 中间 -->
    <div class="section-top">
      <div class="s-top-1">新闻资讯</div>
      <div class="s-top-2">更多>></div>


    </div>
    <div class="section-bottom">
      <div class="section-bottom-1">
        <div class="b1-left">
          <img src="../assets/2.jpg" alt="" class="section-img">
        </div>
        <div class="b1-right">

          <div class="r-1">我国分布式能源发展及展望</div>
          <div class="r-2">潇湘时报</div>
        </div>
      </div>
      <div class="section-bottom-2">
        <div class="b2-left">
          <img src="../assets/3.jpg" alt="" class="section-img">
        </div>

        <div class="b2-right">

          <div class="r-1">分布式储能四种商业模式</div>
          <div class="r-2">潇湘时报</div>
        </div>
      </div>
      <div class="section-bottom-3">
        <div class="b3-left">
          <img src="../assets/4.jpg" alt="" class="section-img">
        </div>

        <div class="b3-right">
          <div class="r-1"> 分布式储能技术剖析</div>
          <div class="r-2">潇湘时报</div>

        </div>
      </div>

      <div class="section-bottom-4">
        <div class="b4-left">
          <img src="../assets/5.jpg" alt="" class="section-img">
        </div>

        <div class="b4-right">
          <div class="r-1"> 关于分布式储能和集中式储能的区别是什么</div>
          <div class="r-2">潇湘时报</div>

        </div>
      </div>
    </div>
  </section>
 
<!-- 底部标签 -->

<footer>
  <router-view />

  <van-tabbar v-model="active" route>
  <van-tabbar-item  replace to="/homepage" icon="home-o" >首页</van-tabbar-item>

  <van-tabbar-item replace to="/Mypage" icon="friends-o">我的</van-tabbar-item>

</van-tabbar>
</footer>





</template>
<script setup>
import {ref} from 'vue';
// export default {
//   setup() {
//     const active = ref(0);
//     return { active };
//   },
// };

const active = ref(0)

</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  
 
}


a {
  text-decoration: none;
  
    color: rgb(0, 0, 0);
    text-decoration: none; 

  

}

ul {
  list-style: none;
}

header, section, footer {

    width: 750px;
    margin: 0 auto;
    /* background-color: rgb(152, 31, 216); */
}

header {
  height: 80px;
}

header {

  height: 600px;
  /* background-color: rgb(0, 0, 0); */

  background-image: url('../assets/header.png');
  background-repeat: no-repeat;
}

header > div {


  margin-bottom: 10px;
  /* background-color: aquamarine; */
  /* width: 690px; */

}

.top-one {
  /* margin-right: 10px; */
  color: rgb(255, 255, 255);
  font-size: 50px;
  text-align: center;
  
  height: 80px;

}

.top-two {
  /* margin-right: 10px; */

  height: 278px;


}

/* 轮播图 */
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  /* line-height: 150px; */
  text-align: center;
  /* background-color: #39a9ed; */
}

.l-1 {
  width: 672px;
  height: 278px;
}

.top-img {
  height: 278px;
  width: 670px;
  /* margin: 20px; */
  margin-left: 40px;
  margin-right: 40px;


}

.top-three {
  /* margin-right: 10px; */

  height: 200px;
  width: 730px;
  /* margin: 20px; */
  /* background: rgb(0, 0, 0); */
  display: flex;
  flex-direction: row;
     justify-content: center;
            /* 水平摆放 ,水平居中还是居左*/
            align-items: center;

}

.top-three > div {
  float: left;
  /* 页面背景不重复 */
  background-repeat: no-repeat;


}

.top-three-left {
  width: 328px;
  /* width: 48%; */
  height: 156px;
  float: left;
  margin-left: 20px;
  
  

  background-image: url('../assets/header-left.png');


}

.top-left-1 {
  height: 40%;
  /* background: rgb(223, 169, 169); */
  /* margin-top: 35px; */
  margin-left: 30px;
  margin-top: 30px;
  font-size: 30px;


}

.top-left-2 {
  height: 40%;
  /* background: rgb(255, 5, 5); */
  margin-left: 30px;
  opacity: 0.5;
  font-size: 20px;

}

.top-three-right {
  margin-left: 20px;
  width: 328px;
  /* width: 48%; */
  height: 156px;
   
  

  background-image: url('../assets/header-right.png');
}



section {
  /* height: 900px;
  width: 100%; */

}

.section-top {
  width: 700px;
  height: 80px;
  font-size: 30px;
  /* text-align: left; */
  /* background-color: rgb(223, 170, 170); */
  margin-left: 40px;
  float: left;
}

.s-top-1 {
  width: 80%;
  height: 100px;
  /* background: rgb(16, 193, 178); */
  float: left;

}

.s-top-2 {
  width: 20%;
  height: 100px;
  /* background: rgb(0, 0, 0); */
  float: left;
  opacity: 0.5;
}

.section-bottom {
  width: 750px;
  height: 840px;
  /* background-color: rgb(109, 30, 30); */
  float: left;
   


  /* 居中 */


}

.section-bottom > div {
  float: left;
  height: 100px;
  /* background-color: azure; */
  margin-bottom: 20px;
  

}

.section-bottom > div {
  margin-bottom: 20px;
  width: 750px;
  height: 180px;
  margin-bottom: 20px;


}

.section-bottom-1 > div {
  float: left;
  /* width: 250px;
  height: 100px; */
  /* background-color: rgb(216, 171, 171); */
  margin-right: 20px;
 
}

.section-img {
  height: 180px;
  width: 204px;


}

.b1-left {
  width: 250px;
  height: 180px;
  text-align: center;


}

.b1-right {
  width: 460px;
  height: 180px;
  /* background-color: rgb(99, 25, 25); */
  color: rgb(0, 0, 0);
  font-size: 30px;
 

}

.r-1 {

  height: 50%;
  /* background: rgba(255, 255, 255, 0.717); */
}

.r-2 {
  /* 透明度 */
  opacity: 0.5;
  /* height: 50%; */
  margin-top:50px;
   vertical-align: bottom;
   
  /* background: rgb(0, 255, 34); */
}

.section-bottom-2 > div {
  float: left;
  /* background-color: rgb(255, 255, 255); */
  margin-right: 20px;
  


}

.b2-left {
  width: 250px;
  height: 180px;
  text-align: center;


}

.b2-right {
  width: 460px;
  height: 180px;
  /* background-color: rgb(99, 25, 25); */
  color: rgb(0, 0, 0);
  font-size: 30px;
 
  /* background: rgb(51, 24, 24); */
  /* text-align: left; */

}

.section-bottom-3 > div {
  float: left;
  /* background-color: rgb(255, 255, 255); */
  margin-right: 20px;
  

}

.b3-left {
  width: 250px;
  height: 180px;
  text-align: center;


}

.b3-right {
  width: 460px;
  height: 180px;
  /* background-color: rgb(99, 25, 25); */
  color: rgb(0, 0, 0);
  font-size: 30px;
  /* text-align: left; */

}

.section-bottom-4 > div {
  float: left;

  margin-right: 20px;


}

.b4-left {
  width: 250px;
  height: 180px;
  text-align: center;


}

.b4-right {
  width: 460px;
  height: 180px;
  /* background-color: rgb(99, 25, 25); */
  color: rgb(0, 0, 0);
  font-size: 30px;
  margin-bottom: 20px;
  /* text-align: left; */

}

footer {
  /* float: left;
  background: blueviolet;
  height: 100px;
  width: 750px; */

}

.footer-img {
  width: 50%;
  height: 100px;
  background: bisque;

}

</style>
