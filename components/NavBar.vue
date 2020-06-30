<template>
  <div>
    <el-menu
      class="navbar"
      mode="horizontal"
      @select="handleSelect"
      text-color="#fff"
      active-text-color="#fff"
      style="border-bottom: unset;"
    >
      <el-menu-item disabled style="width: 100%"></el-menu-item>
      <el-menu-item  index="top" style="opacity:unset;">
        <img height="80%" src="~/assets/woody.png" style="float:right ">
      </el-menu-item>
      <el-menu-item index="intro">公司简介</el-menu-item>
      <el-menu-item index="protocol">支持协议</el-menu-item>
      <el-menu-item index="app">应用场景</el-menu-item>
      <el-menu-item index="map">客户分布</el-menu-item>
      <el-menu-item index="footer">联系我们</el-menu-item>
      <el-menu-item index="doc"><a href="https://doc.iotbox.woody.vip" target="_blank"><i class="el-icon-link"></i>网关文档</a></el-menu-item>

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
      var element=document.querySelector("#"+e)
      if(element!==null){
        element.scrollIntoView(true);
        window.scrollBy({
          top: -60,
        });
      }
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
  .el-menu-item{
    font-size:18px;
  }
  .el-menu-item:hover {
    background-color: #04091c !important;
  }
  .el-menu-item.is-active {
    background-color: #04091c !important;
    border-bottom:unset;
  }
  .el-menu--horizontal>.el-menu-item.is-active{
    border-bottom:unset;
  }
  a{text-decoration: none;}
  a:visited{text-decoration: none;}
  a:hover {text-decoration: none;}
  a:active{text-decoration:none;}
</style>
