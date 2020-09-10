<template>
  <div style="width:100%;">
    <el-row>
      <el-col :span="12" :xs="24">
        <div style="line-height: 40px;padding: 15px;">
          <h3>{{$t('footer.contact.title')}}</h3>
          <p>{{$t('footer.contact.address')}}: {{$t('footer.contact.woody_address')}}</p>
          <p>{{$t('footer.contact.email')}}: <a target="_blank" href="mailto:contact_us@woody.vip" style="color: inherit">contact_us@woody.vip</a></p>
          <p>{{$t('footer.contact.phone')}}: <a href="tel:+86 951 660 4924" style="color: inherit">+86 (0)951 660 4924</a></p>
        </div>
      </el-col>
      <el-col :span="12" :xs="24" style="display: flex;justify-content: center">
        <img height="200px" src="~/assets/qrcode.webp" alt="Woody Box"  style="margin: auto">
      </el-col>
    </el-row>
    <div style="display: flex;justify-content: center;width: 100%;flex-direction:column;align-items:center;margin-top: 20px; ">
      <div>© Copyright 2020 {{$t('woody_full')}}.</div>
      <div><a rel="noopener"  href="https://beian.miit.gov.cn"  target="_blank" style="color: inherit">宁ICP备17001886号-1</a></div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator'
  @Component({
    name: 'Footer',
    components: {
    }
  })
  export default class extends Vue {

  }
</script>

<style>
</style>
