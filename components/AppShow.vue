<template>
  <div style="width:100%;height: 100%">

    <el-row class="show" style="width:100%;height: 100%">
      <el-col :span="12" class="show_item">
        <div  class="show_item_text">
          <h1>{{$t('app_show.title')}}</h1>
          <h3>{{ $t('app_show.line1') }}</h3>
          <p>{{ $t('app_show.line2') }}</p>
        </div>
      </el-col>
      <el-col :span="12" class="show_item">
        <img  loading="lazy" class="show-img-app" src="~/assets/weapp.webp" alt="Woody Box">
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

  @media screen and (max-width: 1000px){
    .show_item_text {
      font-size: 14px;
    }
    .show-img-app {
      width: 90%;
    }
  }

</style>
