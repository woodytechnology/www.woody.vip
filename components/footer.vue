<template>
  <div style="width:100%;">
    <el-row>
      <el-col :span="12">
        <div style="line-height: 40px;">
          <h3>联系我们</h3>
          <p>联系地址: 宁夏回族自治区银川市金凤区 宁安南街iBi育成中心一期1号楼1409</p>
          <p>电子邮箱: contact_us@woody.vip</p>
          <p>电话号码: +86 951 660 4924</p>
        </div>
      </el-col>
      <el-col :span="12" style="display: flex;justify-content: center">
        <img height="200px" src="~/assets/qrcode.jpg" alt="Woody Box"  style="margin: auto">
      </el-col>
    </el-row>
    <div style="display: flex;justify-content: center;width: 100%;flex-direction:column;align-items:center;margin-top: 20px; ">
      <div>© Copyright 2020 宁夏巫迪科技有限公司.</div>
      <div><a href="http://www.miitbeian.gov.cn/">宁ICP备17001886号-1</a></div>
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
