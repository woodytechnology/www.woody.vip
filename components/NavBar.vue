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
      <el-menu-item class="hidden-md-and-down" index="intro">{{$t('navbar.intro')}}</el-menu-item >
      <el-menu-item class="hidden-md-and-down" index="protocol">{{$t('navbar.protocol')}}</el-menu-item>
      <el-menu-item class="hidden-md-and-down" index="app">{{$t('navbar.case')}}</el-menu-item>
      <el-menu-item class="hidden-md-and-down" index="map">{{$t('navbar.custom_map')}}</el-menu-item>
      <el-menu-item class="hidden-md-and-down" index="footer">{{$t('navbar.contact_us')}}</el-menu-item>
      <a class="el-menu-item hidden-md-and-down" style="color:white; background-color:#04091c" rel="noopener" href="https://www.woody.vip/posts" target="_blank"><i class="el-icon-link"></i>{{$t('navbar.posts')}}</a>
      <el-submenu index="more" style="float: right">
        <template slot="title">
          <span class="hidden-lg-and-up">{{$t('navbar.nav')}}</span>
          <span class="hidden-md-and-down">{{$t('navbar.more')}}</span>
        </template>
        <el-menu-item class="hidden-lg-and-up" index="intro">{{$t('navbar.intro')}}</el-menu-item>
        <el-menu-item class="hidden-lg-and-up" index="protocol">{{$t('navbar.protocol')}}</el-menu-item>
        <el-menu-item class="hidden-lg-and-up" index="app">{{$t('navbar.case')}}</el-menu-item>
        <el-menu-item class="hidden-lg-and-up" index="map">{{$t('navbar.custom_map')}}</el-menu-item>
        <el-menu-item class="hidden-lg-and-up" index="footer">{{$t('navbar.contact_us')}}</el-menu-item>
        <el-menu-item class="hidden-lg-and-up" index="doc" ><a rel="noopener" href="https://www.woody.vip/posts" target="_blank"><i class="el-icon-link"></i>{{$t('navbar.posts')}}</a></el-menu-item>
        <el-menu-item index="doc" ><a rel="noopener" href="https://www.woody.vip/boxdoc" target="_blank"><i class="el-icon-link"></i>{{$t('navbar.boxdoc')}}</a></el-menu-item>
        <el-menu-item index="custom" ><a rel="noopener" href="https://www.woody.vip/custom" target="_blank"><i class="el-icon-link"></i>{{$t('navbar.custom_manager')}}</a></el-menu-item>
      </el-submenu>
      <el-menu-item class="hidden-md-and-down" style="float: right"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path></svg>
      </el-menu-item>

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
