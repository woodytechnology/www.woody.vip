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
      <el-menu-item index="top">
        <img height="80%" src="~/assets/woody.png" alt="logo">
      </el-menu-item>
      <el-menu-item index="intro">公司简介</el-menu-item>
      <el-menu-item index="protocol">支持协议</el-menu-item>
      <el-menu-item index="app">应用场景</el-menu-item>
      <el-menu-item index="map">客户分布</el-menu-item>
      <el-menu-item index="footer">联系我们</el-menu-item>
      <el-menu-item index="doc" style="float: right"><a href="https://doc.iotbox.woody.vip" target="_blank"><i class="el-icon-link"></i>网关文档</a></el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator'
  //@ts-ignore
  @Component({
    name: 'NavBar',
    components: {
    }
  })
  export default class extends Vue {
    handleSelect(e:any){
      var nav=document.getElementById('nav')
      var offset=0
      if(nav!==null){
        offset=nav.clientHeight
      }

      var element=document.getElementById(e)
      if(element!==null){
        window.scroll({
          top:element.offsetTop-offset,
          behavior: 'smooth'
        })
      }
    }

  }
</script>

<style>


  .navbar {
    align-items: center;
  }
  .el-menu{
    background: inherit;
  }
  .el-menu-item{
    font-size:18px;
    transition:unset;
    border-bottom: unset;
  }
  .el-menu-item:hover {
    background-color: inherit !important;
  }
  .el-menu-item.is-active {
    background-color: inherit !important;
  }
  .el-menu--horizontal>.el-menu-item.is-active{
    border-bottom:unset;
  }
  .el-menu--horizontal>.el-menu-item{
    border-bottom:unset;
  }
  a{text-decoration: none;}
  a:visited{text-decoration: none;}
  a:hover {text-decoration: none;}
  a:active{text-decoration:none;}
</style>
