<template>
  <div style="width:100%;height: 100%">

    <el-row class="show" style="width:100%;height: 100%">
      <el-col :span="12" class="show_item">
        <div  class="show_item_text">
          <h1>巫迪工业云平台</h1>
          <h3>实现工厂数字化</h3>
          <p>预测性维护设备,提高设备利用率</p>
        </div>

      </el-col>
      <el-col :span="12" class="show_item">
        <img class="show-img" style=" max-width: 80%" src="~/assets/cloud.webp" alt="Woody Box">
      </el-col>
    </el-row>

  </div>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator'
  @Component({
    name: 'Intro',
    components: {
    }
  })
  export default class extends Vue {

  }
</script>

<style>
  @media screen and (max-width: 750px){
    .show_item_text {
      font-size: 14px;
    }
  }
</style>
