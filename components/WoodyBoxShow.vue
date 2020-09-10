<template>
  <div style="width:100%;height: 100%">

    <el-row style="width:100%;height: 100%">
      <el-col :span="12" class="show_item">
        <div  class="show_item_text">
          <h1>{{$t('box_show.title')}}</h1>
          <h3>{{ $t('box_show.line1') }}</h3>
          <div style="line-height:20px">
            <p>{{ $t('box_show.line2') }}</p>
            <p>{{ $t('box_show.line3') }}</p>
          </div>
        </div>
      </el-col>
      <el-col :span="12" class="show_item">
        <img class="show-img" height="60%" src="~/assets/iotbox.webp" alt="Woody Box">
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
  @media screen and (max-width: 750px){
    .show_item_text {
      font-size: 14px;
    }
  }
</style>
