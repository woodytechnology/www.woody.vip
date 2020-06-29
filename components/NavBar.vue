<template>
  <div>
    <el-menu
      class="navbar"
      mode="horizontal"
      @select="handleSelect"
      text-color="#fff"
      active-text-color="#ffd04b"
      style="border-bottom: unset;"
    >
      <el-menu-item disabled style="width: 100%"><Logo/></el-menu-item>
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-menu-item index="2">处理中心</el-menu-item>
      <el-menu-item index="3">消息中心</el-menu-item>
      <el-menu-item index="4">订单管理</el-menu-item>
      <el-menu-item disabled style="width: 100%"></el-menu-item>

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
  .el-menu{
    background: #04091c;
  }
  .el-menu-item:hover {
    background-color: #04091c !important;
  }
  .el-menu-item.is-active {
    background-color: #04091c !important;
  }

</style>
