<template>
  <div class="container">
    <Part id="nav" class="nav-header">
      <NavBar></NavBar>
    </Part>
    <client-only>
      <div class="vue-particles" :style="{'height': 600 +'px'}"></div>
      <vue-particles color="#dedede"  class="vue-particles" :style="{'height': 600 +'px'}" >
      </vue-particles>
    </client-only>
    <Part id="top" style="margin-top: 60px">
        <Images ></Images>
      </Part>
    <Part id="intro" style="background: white">
      <Intro></Intro>
    </Part>
    <Part id="protocol" style="background: #404a59;padding-top:50px;color: white ">
      <Protocol></Protocol>
    </Part>
    <Part id="app" style="background: white">
      <Case></Case>
    </Part>
    <Part style="background: #404a59;">
      <Map :style="{height:mapHeight+'px'}"></Map>
    </Part>

    <Part id="custom" style="background: white;height: 200px">
      <Custom></Custom>
    </Part>

    <Part id="footer" style="background: #04091c; padding-top:50px;color: white ">
      <Footer></Footer>
    </Part>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Images from "@/components/Images";
import Intro from "@/components/Intro";
import Custom from "@/components/Custom";
import Map from "@/components/Map";
import Case from "@/components/Case";
import Part from "@/components/part";
import Footer from "@/components/footer";
import Protocol from "@/components/Protocol";

export default {
  components:{
    NavBar,
    Images,
    Intro,
    Custom,
    Map,
    Case,
    Part,
    Footer,
    Protocol
  },
  data() {
    return {
      mapHeight:800
    }
  },
  mounted(){
    if(document.body.clientWidth<800){
      this.mapHeight = document.body.clientWidth;
    }
  },
  head () {
    var url='https://www.woody.vip'
    if(this.$i18n.locale!==this.$i18n.defaultLocale){
      url=url+'/'+this.$i18n.locale
    }
    return{
      title: this.$t('title'),
      meta: [
        { charset: 'utf-8' },
        {hid: 'company', name: 'company', content: this.$t('woody_full')},
        {hid: 'name', name: 'name', content: this.$t('woody_full')},
        {hid: 'description', name: 'description', content: this.$t('description')},
        {hid: 'image', name: 'image', content: 'https://www.woody.vip/woody.png'},
        {hid: 'url', name: 'url', content: url },
        {hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1.0'},
        {hid: 'og:company', name: 'og:company', content: this.$t('woody_full')},
        {hid: 'og:site_name', name: 'og:site_name', content: this.$t('woody_full')},
        {hid: 'og:title', name: 'og:title', content: this.$t('title')},
        {hid: 'og:description', name: 'og:description', content: this.$t('description')},
        {hid: 'og:image', name: 'og:image', content: 'https://www.woody.vip/woody.png'},
        {hid: 'og:url', name: 'og:url', content: url},
      ],
    }
  }
}
</script>

<style>
  .vue-particles {
    background: #04091c;
    width:100%;
    position:absolute;
    top:60px;
  }
  .nav-header{
    background: #04091c;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 99999;
  }

  .show-img {
    box-reflect:below 5px linear-gradient(transparent 60%,rgba(0,0,0,.3));
    -webkit-box-reflect:below 5px -webkit-linear-gradient(transparent 60%,rgba(0,0,0,.3));
  }
  /*.show {*/
  /*  display: flex;*/
  /*  justify-content: center; !* 水平居中 *!*/
  /*  align-self: center;*/
  /*  align-items: center;*/
  /*}*/
  .show_item {
    display: flex;
    justify-content: center; /* 水平居中 */
    align-self: center;
    align-items: center;
    height: 100%;
  }
</style>
