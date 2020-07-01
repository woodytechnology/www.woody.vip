<template>
  <div style="width:100%;height: 100%">

    <el-row class="show" style="width:100%;height: 100%">
      <el-col :span="12" class="show_item">
        <div  style='line-height: 60px;'>
          <h1>巫迪工业APP</h1>
          <h3>将您的工厂搬到手机上</h3>
          <p>支持Android,iOS等主流手机平台</p>
        </div>

      </el-col>
      <el-col :span="12" class="show_item" >
        <img class="show-img"  height="60%" src="~/assets/weapp.png" alt="Woody Box">
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
    box-reflect:below 5px linear-gradient(transparent 60%,rgba(0,0,0,.3));
    -webkit-box-reflect:below 5px -webkit-linear-gradient(transparent 60%,rgba(0,0,0,.3));
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
