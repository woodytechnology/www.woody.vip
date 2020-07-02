<template>
  <div style="width:100%;height: 100%;margin: auto">

    <el-row class="show">
      <el-col :span="12" :xs="24" class="show_item">
        <div class="case-text">
          <h1>数字化工厂改造</h1>
          <p>通过直接对接机床接口,获取机床底层数据,结合 MES 系统, ERP 系统,完成对工厂的排版排产管理,实时追踪生产进度.配合检测线,可计算设备稼动率与OEE
            等生产数据.根据刀具使用,设备负载等数据监控,可预测性维护机床,提高生产安全性.接入电表数据可实现能耗监控,帮助企业节能减排提效增产</p>
        </div>
      </el-col>
      <el-col :span="12" :xs="24" class="show_item" >
        <img width="100%" src="~/assets/function.png" alt="Woody Box">
      </el-col>

    </el-row>
    <el-row class="show">

      <el-col :span="12" :xs="24" class="show_item" >
        <img width="100%" src="~/assets/cnc.jpg" alt="Woody Box">
      </el-col>
      <el-col :span="12" :xs="24" class="show_item">
        <div  class="case-text">
          <h1>设备远程维护</h1>
          <h3>可靠的虚拟专用网络(VPN)</h3>
          <p>解决企业外部项目的维护困难,省去出差驻场的调试维护,通过VPN网络完成大部分程序调试更新,设备维护工作.定制开发的VPN服务端,实现用户隔离,提高设备安全性,防止非授权访问</p>
        </div>
      </el-col>
    </el-row>
    <el-row class="show">
      <el-col :span="12" :xs="24" class="show_item">
        <div  class="case-text">
          <h1>非标设备联网</h1>
          <h3>万物互联,打造智慧生活</h3>
          <p>通过数字化改造或物联网网关中继,将现有基础设施接入互联网,包括各类电表,野外站所,家居电器,冷库空调,农业器械等.通过打通各类基础设施,为智慧城市,智慧农业等平台应用提供稳定可靠的数据与接口</p>
        </div>
      </el-col>
      <el-col :span="12" :xs="24" class="show_item" >
        <img width="100%" src="~/assets/feibiao.png" alt="Woody Box">
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
  .show {
    margin-bottom: 40px;
  }
  .case-text {
    line-height: 50px;
    width: 60%
  }
</style>
