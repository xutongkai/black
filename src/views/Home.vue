<template>
  <div class="home">
     <mt-swipe :auto="40000">
      <mt-swipe-item v-for="(item,index) in swiper" :key="index">
        <a class="swiper_a" :href="item.url">
          <img class="swiper_img" :src="item.img" alt="">
        </a>
        </mt-swipe-item>
    </mt-swipe>
    <div class="button">
      <div class="button_list">
        <img src="@/assets/menu1.png" alt="" class="button_list_img">
        <div class="button_list_title">新闻资讯</div>
      </div>
      <div class="button_list">
        <img src="@/assets/menu2.png" alt="" class="button_list_img">
        <div class="button_list_title">图片分享</div>
      </div>
      <div class="button_list">
        <img src="@/assets/menu3.png" alt="" class="button_list_img">
        <div class="button_list_title">商品购买</div>
      </div>
      <div class="button_list">
        <img src="@/assets/menu4.png" alt="" class="button_list_img">
        <div class="button_list_title">留言反馈</div>
      </div>
      <div class="button_list">
        <img src="@/assets/menu5.png" alt="" class="button_list_img">
        <div class="button_list_title">视频专区</div>
      </div>
      <div class="button_list">
        <img src="@/assets/menu6.png" alt="" class="button_list_img">
        <div class="button_list_title">联系我们</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data(){
    return{
      swiper:["1"]
    }
  },
  components: {
  
  },
  methods:{
    getlist(){
      this.$axios.get('/api/movieComingList?cityId='+cityId).then((res)=>{
            console.log(res);
            if(res.data.msg=="ok"){
                
            }
        })
    }
  },
  mounted(){
    this.$axios.get('http://www.liulongbin.top:3005/api/getlunbo').then((res)=>{
            console.log(res);
            if(res.data.status==0){
                this.swiper = res.data.message;
                console.log(this.swiper);
            }
        })
        
  }

}
</script>
<style scoped>
  .mint-swipe{
    width:100%;
    height: 150px;
  }
  .swiper_a,
  .swiper_img{
    width:100%;
    height: 100%;
  }
  .button{
    width:100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .button_list{
    width:33.33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding:10px;
    box-sizing: border-box;
  }
  .button_list_img{
    width:60px;
    height: 60px;
  }
  .button_list_title{
    font-size:16px;
    color:#333;
    margin-top:10px;
  }
</style>