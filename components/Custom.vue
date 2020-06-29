<template>
  <div>
    <infinite-slide-bar duration="50s" delay="2s" :barStyle="{ padding: '5px 0' }">
      <img v-for="(item, index) in [1,3,4,5,6,7,8]" height="80%" src="~/assets/iotbox.png" alt="Woody Box">
    </infinite-slide-bar>
  </div>

</template>

<script>
  import InfiniteSlideBar from 'vue-infinite-slide-bar'

  export default {
    components:{
      InfiniteSlideBar
    }
  }
</script>


<style>
  .box-card {
    margin: 20px;
  }
</style>
