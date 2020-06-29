<template>
 <div class="images" style="color: white">
   <el-carousel
     height="600px"
     arrow="never"
   >
     <el-carousel-item>
       <BoxShow></BoxShow>
     </el-carousel-item>
     <el-carousel-item>
       <CloudShow></CloudShow>
     </el-carousel-item>
     <el-carousel-item>
       <AppShow></AppShow>
     </el-carousel-item>
   </el-carousel>
 </div>

</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator'
  //@ts-ignore
  import BoxShow from "@/components/WoodyBoxShow.vue";
  //@ts-ignore
  import CloudShow from "@/components/WoodyCloudShow.vue";
  //@ts-ignore
  import AppShow from "@/components/AppShow.vue";

  @Component({
    name: 'Images',
    components: {
      BoxShow,
      AppShow,
      CloudShow
    }
  })
  export default class extends Vue {

  }
</script>

<style>

</style>
