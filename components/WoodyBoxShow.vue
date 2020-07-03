<template>
  <div style="width:100%;height: 100%">

    <el-row style="width:100%;height: 100%">
      <el-col :span="12" :xs="24" class="show_item">
        <div  style='line-height: 60px;'>
          <h1>巫迪工业网关</h1>
          <h3>工业新基建的重要组成部分</h3>
          <div style="line-height:20px">
            <p>兼容90%以上的CNC设备,上百种PLC协议</p>
            <p>可远程维护控制,边缘计算</p>
          </div>
        </div>

      </el-col>
      <el-col :span="12" :xs="24" class="show_item">
        <img class="show-img" height="60%" src="~/assets/iotbox.webp" alt="Woody Box">
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
</style>
