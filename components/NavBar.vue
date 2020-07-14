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
        <img height="80%" src="~/assets/woody.webp" alt="logo">
      </el-menu-item>
      <el-menu-item class="hidden-md-and-down" index="intro">公司简介</el-menu-item >
      <el-menu-item class="hidden-md-and-down" index="protocol">支持协议</el-menu-item>
      <el-menu-item class="hidden-md-and-down" index="app">应用场景</el-menu-item>
      <el-menu-item class="hidden-md-and-down" index="map">客户分布</el-menu-item>
      <el-menu-item class="hidden-md-and-down" index="footer">联系我们</el-menu-item>
      <a class="el-menu-item hidden-md-and-down" style="color:white; background-color:#04091c" rel="noopener" href="https://www.woody.vip/posts" target="_blank"><i class="el-icon-link"></i>文档手册</a>
      <el-submenu index="more" style="float: right">
        <template slot="title">
          <span class="hidden-lg-and-up">导航</span>
          <span class="hidden-md-and-down">更多</span>
        </template>
        <el-menu-item class="hidden-lg-and-up" index="intro">公司简介</el-menu-item>
        <el-menu-item class="hidden-lg-and-up" index="protocol">支持协议</el-menu-item>
        <el-menu-item class="hidden-lg-and-up" index="app">应用场景</el-menu-item>
        <el-menu-item class="hidden-lg-and-up" index="map">客户分布</el-menu-item>
        <el-menu-item class="hidden-lg-and-up" index="footer">联系我们</el-menu-item>
        <el-menu-item class="hidden-lg-and-up" index="doc" ><a rel="noopener" href="https://www.woody.vip/posts" target="_blank"><i class="el-icon-link"></i>文档手册</a></el-menu-item>
        <el-menu-item index="doc" ><a rel="noopener" href="https://www.woody.vip/boxdoc" target="_blank"><i class="el-icon-link"></i>巫迪网关文档</a></el-menu-item>
        <el-menu-item index="custom" ><a rel="noopener" href="https://www.woody.vip/custom" target="_blank"><i class="el-icon-link"></i>巫迪网关管理平台</a></el-menu-item>
      </el-submenu>
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
  .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
    background-color: #04091c;
  }
  .el-menu--horizontal {
    background-color: #04091c;
  }
  .el-submenu__title{
    font-size:18px;
  }
  .el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title {
    background-color: #04091c;
  }
  .el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
    border-bottom:unset;
  }
  a{text-decoration: none;color:white;}
  a:visited{text-decoration: none;color:white}
  a:hover {text-decoration: none;color:white}
  a:active{text-decoration:none;color:white}
</style>
