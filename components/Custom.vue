<template>
  <client-only>
    <vue-seamless-scroll :data="customs" :class-option="classOption5" class="warp2">
      <ul class="ul-item clearfix">
        <li class="li-item" v-for="(item, index) in customs" :key="index">
          <a :href="item.url" target="_blank" style="display:flex "><img style="max-width: 250px;max-height: 150px" :src="item.img" :alt="item.title"></a>
        </li>
      </ul>
    </vue-seamless-scroll>
  </client-only>

</template>


<script>
  export default {
    components:{
    },
    data () {
      return {
        classOption5:{
          hoverStop: true,
          limitMoveNum: 0,
            direction: 2
        },
        customs: [
          {
            'title': '徐工汉云',
            'img': require('~/assets/customs/hanyun.png'),
            'url': 'http://www.hanyunplat.com'
          },
          {
            'title': '航天云网',
            'img': require('~/assets/customs/casi.png'),
            'url':'https://www.casicloud.com/'
          },
          {
            'title': '零点自动化',
            'img': require('~/assets/customs/odot.png'),
            'url':'https://www.odot.cn/'
          },
          {
            'title': '浙大台州研究院',
            'img': require('~/assets/customs/zjdxtzyjy.jpeg'),
            'url':'https://rizt.zju.edu.cn/'
          },
          {
            'title': '旋几工业',
            'img': require('~/assets/customs/xuanji.png'),
            'url':'http://www.xuanji-auto.com/'
          },
          {
            'title': '双鸿智能',
            'img': require('~/assets/customs/shuanghong.png'),
            'url':'http://www.shhsmart.com/'
          }
        ]
      }
    },
  }
</script>


<style lang="scss" scoped>
  .warp2 {
    width: 100%;
    height: 150px;
    overflow: hidden;
  }
  .ul-item {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    &.random {
      display: flex;
      width: auto;
    }
    &.decimal {
      width: 670.4px;
    }
    &.ul-item2 {
      width: 0;
    }
    .li-item {
      display: flex;
      float: left;
      width: 300px;
      height: 160px;
      margin: 5px 0 5px 5px;
      line-height: 160px;
      background-color: white;
      font-family: "Amaranth", sans-serif;
      font-size: 82px;
      text-align: center;
      border-radius:5px;
      align-items: center;
      justify-content: center;
    }
  }


</style>
