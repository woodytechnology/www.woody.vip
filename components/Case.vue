<template>
  <div style="width:80%;height: 100%;margin: auto">

    <el-row class="show" style="width:100%;height: 100%">
      <el-col :span="12" class="show_item">
        <div  style='line-height: 60px;'>
          <h1>数字化工厂监控</h1>
          <h3>工业新基建的重要组成部分</h3>
          <p>兼容90%以上的CNC设备,上百种PLC协议,可远程维护控制,边缘计算</p>
        </div>
      </el-col>
      <el-col :span="12" class="show_item" >
        <img width="100%" src="~/assets/function.png" alt="Woody Box">
      </el-col>

    </el-row>
    <el-row class="show" style="width:100%;height: 100%">

      <el-col :span="12" class="show_item" >
        <img width="100%" src="~/assets/cnc.jpg" alt="Woody Box">
      </el-col>
      <el-col :span="12" class="show_item">
        <div  style='line-height: 60px;'>
          <h1>设备远程维护</h1>
          <h3>工业新基建的重要组成部分</h3>
          <p>兼容90%以上的CNC设备,上百种PLC协议,可远程维护控制,边缘计算</p>
        </div>
      </el-col>
    </el-row>
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
