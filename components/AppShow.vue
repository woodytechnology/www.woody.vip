<template>
  <div style="width:100%;height: 100%">

    <el-row class="show" style="width:100%;height: 100%">
      <el-col :span="12" :xs="24" class="show_item">
        <div  style='line-height: 60px;'>
          <h1>巫迪工业APP</h1>
          <h3>将您的工厂搬到手机上</h3>
          <p>支持Android,iOS等主流手机平台</p>
        </div>

      </el-col>
      <el-col :span="12" :xs="24" class="show_item" >
        <img  loading="lazy" class="show-img"  height="60%" src="~/assets/weapp.webp" alt="Woody Box">
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
