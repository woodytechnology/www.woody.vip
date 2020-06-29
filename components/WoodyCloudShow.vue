<template>
  <div style="width:100%;height: 100%">

    <el-row class="show" style="width:100%;height: 100%">
      <el-col :span="12" class="show_item">
        <div  style='line-height: 60px;'>
          <h1>巫迪工业云平台</h1>
          <h3>实现工厂数字化</h3>
          <p>兼容90%以上的CNC设备,上百种PLC协议,可远程维护控制,边缘计算</p>
        </div>

      </el-col>
      <el-col :span="12" class="show_item" >
        <img style=" max-width: 90%" src="~/assets/cloud.png" alt="Woody Box">
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
