<template>
  <div style="width:100%; height: 100%">
    <el-row>
      <el-col :span="12" :xs="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h2>{{$t('intro.team.title')}}</h2>
          </div>
          <el-row>
            <el-col :span="12" class="intro-image">
              <img width="200px" src="~/assets/ciyun.webp" alt="Woody Box">
            </el-col>
            <el-col :span="12" class="intro-text">
              <p>{{$t('intro.team.line1')}}</p>
              <p>{{$t('intro.team.line2')}}</p>
              <p>{{$t('intro.team.line3')}}</p>
              <p>{{$t('intro.team.line4')}}</p>
            </el-col>

          </el-row>
        </el-card>
      </el-col>
      <el-col :span="12" :xs="24">
      <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h2>{{$t('intro.service.title')}}</h2>
          </div>
        <el-row>
          <el-col :span="12" class="intro-image">
            <client-only>
              <vue-clock :number="number" :dial="dial" :border="border" :needle="needle" style="width: 160px"/>
              </client-only>
          </el-col>
          <el-col :span="12" class="intro-text">
            <p>{{$t('intro.service.line1')}}</p>
            <p>{{$t('intro.service.line2')}}</p>
            <p>{{$t('intro.service.line3')}}</p>
            <p>{{$t('intro.service.line4')}}</p>
          </el-col>

        </el-row>
        </el-card>
      </el-col>
      <el-col :span="12" :xs="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h2>{{$t('intro.development.title')}}</h2>
          </div>
          <el-row>
            <el-col :span="12" class="intro-image">
              <img height="180px" src="~/assets/dianluban.webp" alt="Woody Box">
            </el-col>
            <el-col :span="12" class="intro-text">
              <p>{{$t('intro.development.line1')}}</p>
              <p>{{$t('intro.development.line2')}}</p>
              <p>{{$t('intro.development.line3')}}</p>
              <p>{{$t('intro.development.line4')}}</p>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="12" :xs="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h2>{{$t('intro.collection.title')}}</h2>
          </div>
          <el-row>
            <el-col :span="12" class="intro-image">
              <img height="180px" src="~/assets/iot.webp" alt="Woody Box">
            </el-col>
            <el-col :span="12" class="intro-text">
              <p>{{$t('intro.collection.line1')}}</p>
              <p>{{$t('intro.collection.line2')}}</p>
              <p>{{$t('intro.collection.line3')}}</p>
              <p>{{$t('intro.collection.line4')}}</p>
            </el-col>

          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <div>
    </div>
  </div>
</template>

<script>

  export default {
    components:{
    },
    data(){
      return {
        number: {
        isNumber: false, //是否要数字
      },
        dial: {
          isDial: true, //是否要刻度
          distance: 0, //刻度与边界的距离
          maxLength: 40,
          minLength: 0,
          maxWidth: 5,
          minWidth: 2,
          color: '#000000'
        },
        border: {
          type: 'circle', //边界类型（圆、四边形）;circle(圆形) 、 rectangle(四边形)
          width: 300,
          height: 300,
          lineWidth: 10,
          color: '#000000'
        },
        needle: {
          second: {
            length: 80,
            color: '#000000',
            lineWidth: 3,
            longOut: 5,
          },
          minute: {
            length: 90,
            color: '#000000',
            lineWidth: 4,
            longOut: 5,
          },
          hour: {
            length: 60,
            color: '#000000',
            lineWidth: 4,
            longOut: 5,
          }
        }
      }
    }
  }
</script>

<style  scoped>
  .box-card{
    margin: 10px;
  }
  .intro-image{
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
  .intro-text{
    line-height: 40px
  }
  .intro-text p {
    margin: unset;
  }
</style>
