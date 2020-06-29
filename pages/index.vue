<template>
  <div class="container">
      <NavBar class="header"></NavBar>
    <Part class="image">
        <Images ></Images>
      </Part>

    <Part style="background: white">
      <Intro></Intro>
    </Part>
    <Part style="background: white">
      <Case></Case>
    </Part>
    <Part style="background: #404a59">
      <Map style="height: 800px;"></Map>
    </Part>
    <Part style="background: white">
      <Custom></Custom>
    </Part>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
//@ts-ignore
import NavBar from '@/components/NavBar.vue';
//@ts-ignore
import Images from '@/components/Images.vue';
//@ts-ignore
import Intro from '@/components/Intro.vue';
//@ts-ignore
import Custom from '@/components/Custom.vue';
//@ts-ignore
import Map from '@/components/Map.vue';

//@ts-ignore
import Case from '@/components/Case.vue';

//@ts-ignore
import Part from '@/components/part.vue';
export default Vue.extend({
  components: {
    NavBar,
    Images,
    Intro,
    Custom,
    Map,
    Case,
    Part
  }
})
</script>

<style>
  .header {
    height: 60px;
  }
  .image{
    background:url('~assets/backgroud.jpeg');
    background-position:center;
    background-size: 100%;

  }
</style>
