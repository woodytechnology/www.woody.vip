<template>
  <div style="width:100%;">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator'
  @Component({
    name: 'Custom',
    components: {
    }
  })
  export default class extends Vue {

  }
</script>

<style>
  .box-card {
    margin: 20px;
  }
</style>
