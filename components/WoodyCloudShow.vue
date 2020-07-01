<template>
  <div style="width:100%;height: 100%">

    <el-row class="show" style="width:100%;height: 100%">
      <el-col :span="12" class="show_item">
        <div  style='line-height: 60px;'>
          <h1>巫迪工业云平台</h1>
          <h3>实现工厂数字化</h3>
          <p>预测性维护设备,提高设备利用率</p>
        </div>

      </el-col>
      <el-col :span="12" class="show_item" >
        <img class="show-img" style=" max-width: 80%" src="~/assets/cloud.png" alt="Woody Box">
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
  .show-img {
    box-reflect:below 10px linear-gradient(transparent 60%,rgba(0,0,0,.3));
    -webkit-box-reflect:below 10px -webkit-linear-gradient(transparent 60%,rgba(0,0,0,.3));
  }
  .show {
    display: flex;
    justify-content: center; /* 水平居中 */
    align-self: center;
    align-items: center;
  }
  .show_item {
    display: flex;
    justify-content: center; /* 水平居中 */
    align-self: center;
    align-items: center;
    height: 100%;
  }
</style>
