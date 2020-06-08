<template>
  <div>
    <div class="images">
      <el-carousel
        height="450px"
        arrow="never"
      >
        <el-carousel-item v-for="item in 4" :key="item">

        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator'
  @Component({
    name: 'Images',
    components: {
    }
  })
  export default class extends Vue {

  }
</script>

<style>

  .images {

  }

  .el-carousel__item {
    background-color: #d3dce6;
  }

</style>
