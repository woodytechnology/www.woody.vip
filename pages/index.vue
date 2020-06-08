<template>
  <div class="container">
    <NavBar class="header"></NavBar>
    <Images class="images"></Images>
    <Intro></Intro>
    <Custom></Custom>
    <Map style="height: 300px"></Map>

    <div>
    </div>

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

export default Vue.extend({
  components: {
    NavBar,
    Images,
    Intro,
    Custom,
    Map
  }
})
</script>

<style>
.header {
  height: 60px;
}
</style>
