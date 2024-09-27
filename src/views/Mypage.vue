<template>
  <header>
    <div class="header-top">个人中心</div>
    <div class="header-bottom">
       
        <div class="header-bottom-1">
            <div class="h-img"></div>
        </div>
        <div class="header-bottom-2">
            <div class="h-text1">爱喊巧克力的猫</div>
            <div class="h-text2">手机号：1887460877</div>
        </div>
       
    </div>
        
  </header>
  <section>
    <div class="s-1">
        <div class="s-1-1">
            <img src="../assets/形状 739.png" alt="" class="section-img">
        </div>
         <div class="s-1-2">我的提交</div>

    </div>
    <div class="s-2">
         <div class="s-2-1">
            <img src="../assets/形状 163.png" alt="" class="section-img">
        </div>
         <div class="s-2-2">账号管理</div>
        
    </div>
    <div class="s-3">
     <div class="s-3-1">
            <img src="../assets/形状 738.png" alt="" class="section-img">
        </div>
         <div class="s-3-2">关于我们</div>
    </div>
    <div class="s-4"></div>
 
  </section>
  <router-view />

  <van-tabbar v-model="active" route>
  <van-tabbar-item  replace to="/homepage" icon="home-o" >首页</van-tabbar-item>

  <van-tabbar-item replace to="/Mypage" icon="friends-o">我的</van-tabbar-item>

</van-tabbar>
  <p></p>

</template>
<script setup>
import {ref} from 'vue';


const active = ref(0)

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
/* header,section,footer{
    width: 750px;
    margin: 0 auto;
    background-color: rgb(152, 31, 216);
} */
header{
     width: 750px;
     height: 300px;
    margin: 0 auto;
    /* background-image: url('../assets/header.png'); */
    background: rgba(17, 25, 232, 0.758);
    /* background-color: rgb(152, 31, 216); */
     display: flex;
     /* 上下摆放 */
     flex-direction: column;

     
      

}
.header-top{
    flex:2;
    width: 750px;
    height: 100px;
    /* background: rgb(228, 228, 11); */
    font-size: 40px;
    text-align: center;
    color: rgb(255, 255, 255);
    margin-bottom: 20px;

}
.header-bottom{
    flex:8;
     width: 750px;
    height: 100px;
    /* background: blue; */
    float: left;
    


}

.header-bottom-1{
   /* background: rgb(13, 254, 0); */
   width: 30%;
   height: 100%;
   float: left;
   display: flex;
    flex-direction: row;
     justify-content: center;
            /* 水平摆放 ,水平居中还是居左*/
            align-items: center;
}
.h-img{
    height: 112px;
    width: 112px;
    /* background: black; */
    background-image: url('../assets/h-img.png');
   

}
.header-bottom-2{
    /* background: rgb(14, 88, 10); */
    width: 70%;
    height: 100%;
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
     justify-content: center;
    /* 水平摆放 ,水平居中还是居左*/
    /* align-items: left; */
    
     
  
    
}
.h-text1{
    
   height: 70px;
   width: 300px;
   font-size:40px
    /* background: rgb(229, 175, 175); */
   
   
}
.h-text2{
    width: 350px;
   height: 70px;
   font-size:30px;
   opacity: 0.5;
    
    /* background: rgb(231, 215, 215); */
    
   
}
section{
    width: 750px;
    height: 1100px;
    /* border-radius:80px; */
    background: rgba(17, 25, 232, 0.758);
    margin: 0 auto;
   display: flex;
     /* 上下摆放 */
     flex-direction: column;
     font-size: 40px;
    
}
.s-1{
    flex:1;
     border-radius:80px  80px 0px 0;
    background: rgb(255, 255, 255);
   

}
.s-1-1{
    width: 20%;
    height: 100%;
    /* background: bisque; */
    float: left;

}
.section-img{
    height: 60px;
    width: 60px;
    margin: 50px;
}
.s-1-2{
    width:80%;
    height: 100%;
    /* background: rgb(178, 110, 26); */
    float: left;
    margin-top:40px;
}

.s-2{
    flex:1;
    background: rgb(255, 255, 255);
   

}
.s-2-1{
    width: 20%;
    height: 100%;
    /* background: bisque; */
    float: left;

}
.s-2-2{
    width:80%;
    height: 100%;
    /* background: rgb(178, 110, 26); */
    float: left;
    margin-top:40px;
}
.s-3{
    flex:1;
    background: rgb(255, 255, 255);


}
.s-3-1{
    width: 20%;
    height: 100%;
    
    float: left;

}
.s-3-2{
    width:80%;
    height: 100%;
    /* background: rgb(178, 110, 26); */
    float: left;
    margin-top:40px;
}
.s-4{
    flex:7;
    background: rgb(255, 255, 255);

}

</style>