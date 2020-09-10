<template>
  <div style="width:100%;height: 100%;margin: auto">

    <el-row class="show">
      <el-col :span="12" :xs="24" class="show_item">
        <div class="case-text">
          <h1>{{$t('case.digital_factory.title')}}</h1>
          <h3>{{$t('case.digital_factory.subtitle')}}</h3>
          <p>{{$t('case.digital_factory.content')}}</p>
        </div>
      </el-col>
      <el-col :span="12" :xs="24" class="show_item" >
        <img width="100%" src="~/assets/function.webp" alt="Woody Box">
      </el-col>

    </el-row>
    <el-row class="show">
      <el-col :span="12" :xs="24" class="show_item hidden-sm-and-up">
        <div  class="case-text">
          <h1>{{$t('case.digital_factory.title')}}</h1>
          <h3>{{$t('case.digital_factory.subtitle')}}</h3>
          <p>{{$t('case.digital_factory.content')}}</p>
        </div>
      </el-col>
      <el-col :span="12" :xs="24" class="show_item" >
        <img width="100%" src="~/assets/cnc.webp" alt="Woody Box">
      </el-col>
      <el-col :span="12" :xs="24" class="show_item hidden-xs-only">
        <div  class="case-text">
          <h1>{{$t('case.vpn.title')}}</h1>
          <h3>{{$t('case.vpn.subtitle')}}</h3>
          <p>{{$t('case.vpn.content')}}</p>
        </div>
      </el-col>
    </el-row>
    <el-row class="show">
      <el-col :span="12" :xs="24" class="show_item">
        <div  class="case-text">
          <h1>{{$t('case.iot.title')}}</h1>
          <h3>{{$t('case.iot.subtitle')}}</h3>
          <p>{{$t('case.iot.content')}}</p>
        </div>
      </el-col>
      <el-col :span="12" :xs="24" class="show_item" >
        <img width="100%" src="~/assets/feibiao.webp" alt="Woody Box">
      </el-col>

    </el-row>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator'
  @Component({
    name: 'Custom',
    components: {
    }
  })
  export default class extends Vue {

  }
</script>

<style>
  .show {
    margin-bottom: 40px;
  }


  @media screen and (max-width: 750px){
    .case-text {
      line-height: 50px;
      width: 90%
    }
  }

  @media screen and (min-width: 750px){
    .case-text {
      line-height: 50px;
      width: 60%
    }
  }

</style>
