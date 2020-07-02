<template>
  <div class="container">
    <Part id="nav" class="nav-header">
      <NavBar></NavBar>
    </Part>
    <client-only>
      <vue-particles color="#dedede"  style="background: #04091c;width:100%;height: 600px;position:absolute;top:60px;" >
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
    <Part style="background: #404a59">
      <Map style="height: 800px;"></Map>
    </Part>
    <Part id="custom" style="background: white;height: 200px">
      <Custom></Custom>
    </Part>

    <Part id="footer" style="background: #04091c; height: 400px;padding-top:50px;color: white ">
      <Footer></Footer>
    </Part>

  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Images from '@/components/Images.vue';
import Intro from '@/components/Intro.vue';
import Custom from '@/components/Custom.vue';
import Map from '@/components/Map.vue';
import Case from '@/components/Case.vue';
import Part from '@/components/part.vue';
import Footer from '@/components/footer.vue';
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
      geoCoordMap: [],
      custom: []
    }
  },
  head(){
    return {
      title: '巫迪科技',
      meta: [
        { hid: 'company', name: 'company', content: '宁夏巫迪科技有限公司' },
        { hid: 'description', name: 'description', content: 'CNC/PLC数据采集,专注于工业物联网,致力于开拓工业新基建' }
      ]
    }
  }
}
</script>

<style>
  .nav-header{
    background: #04091c;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 99999;
  }
</style>
