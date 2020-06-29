<template>
  <div class="container">
      <NavBar class="header"></NavBar>
    <client-only>
      <vue-particles color="#dedede"  style="background: #04091c;height: 600px" >
      </vue-particles>
    </client-only>
    <Part id="top" style="margin-top: -600px">
        <Images ></Images>
      </Part>
    <Part id="intro" style="background: white">
      <Intro></Intro>
    </Part>
    <Part id="app" style="background: white">
      <Case></Case>
    </Part>
    <Part style="background: #404a59">
      <Map style="height: 800px;"></Map>
    </Part>
    <Part id="custom" style="background: white">
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
export default {
  components:{
    NavBar,
    Images,
    Intro,
    Custom,
    Map,
    Case,
    Part,
    Footer
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
  .header {
    height: 60px;
  }
</style>
