<template>
  <div style="width:100%; height: 100%">
    <el-row>
      <el-col :span="12" :xs="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h2>拥有全栈的技术团队</h2>
          </div>
          <el-row>
            <el-col :span="12" class="intro-image">
              <img width="200px" src="~/assets/ciyun.webp" alt="Woody Box">
            </el-col>
            <el-col :span="12" class="intro-text">
              <p>专业级的网络安全</p>
              <p>二十年经验的机加工</p>
              <p>完整的前后端团队</p>
              <p>嵌入式极客</p>
            </el-col>

          </el-row>
        </el-card>
      </el-col>
      <el-col :span="12" :xs="24">
      <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h2>快速迭代开发实时服务响应</h2>
          </div>
        <el-row>
          <el-col :span="12" class="intro-image">
            <client-only>
              <vue-clock :number="number" :dial="dial" :border="border" :needle="needle" style="width: 160px"/>
              </client-only>
          </el-col>
          <el-col :span="12" class="intro-text">
            <p>2小时内快速响应</p>
            <p>365天客户服务</p>
            <p>24小时内解决BUG</p>
            <p>极速的功能迭代</p>
          </el-col>

        </el-row>
        </el-card>
      </el-col>
      <el-col :span="12" :xs="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h2>定制软硬件开发</h2>
          </div>
          <el-row>
            <el-col :span="12" class="intro-image">
              <img height="180px" src="~/assets/dianluban.webp" alt="Woody Box">
            </el-col>
            <el-col :span="12" class="intro-text">
              <p>老旧机床物联网改造</p>
              <p>专用传感器设计</p>
              <p>特殊业务的平台开发</p>
              <p>对接私有云平台</p>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="12" :xs="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h2>专业的数据采集</h2>
          </div>
          <el-row>
            <el-col :span="12" class="intro-image">
              <img height="180px" src="~/assets/iot.webp" alt="Woody Box">
            </el-col>
            <el-col :span="12" class="intro-text">
              <p>上百种设备适配</p>
              <p>十几种云平台对接</p>
              <p>完备的边缘计算功能</p>
              <p>低功耗,低成本,接口丰富,操作简单</p>
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
