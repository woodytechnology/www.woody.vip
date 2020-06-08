<template>
  <div>
    <el-menu
      class="navbar"
      default-active="1"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      style="border-bottom: unset;"
    >
      <el-menu-item><Logo/></el-menu-item>
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-menu-item index="2">处理中心</el-menu-item>
      <el-menu-item index="3">消息中心</el-menu-item>
      <el-menu-item index="4">订单管理</el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator'
  //@ts-ignore
  import Logo from '@/components/Logo'
  @Component({
    name: 'NavBar',
    components: {
      Logo
    }
  })
  export default class extends Vue {
    handleSelect(e:any){
      console.log(e)
    }
  }
</script>

<style>


  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 99999;
  }

</style>
