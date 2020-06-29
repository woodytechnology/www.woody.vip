<template>
  <div style="width:100%; height: 100%">
    <el-row>
      <el-col :md="12" :sm="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h2>拥有专业的技术团队</h2>
          </div>
          <el-row>
            <el-col :span="12">
              <img width="200px" src="~/assets/ciyun.png" alt="Woody Box">
            </el-col>
            <el-col :span="12">
              <div class="text item">
                网络安全
              </div>
              <div class="text item">
                服务器运维
              </div>
              <div class="text item">
                工业控制
              </div>
              <div class="text item">
                嵌入式研发
              </div>
            </el-col>

          </el-row>
        </el-card>
      </el-col>
      <el-col :md="12" :sm="24">
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
          <el-col :span="12">
            <div class="text item">
              网络安全
            </div>
            <div class="text item">
              服务器运维
            </div>
            <div class="text item">
              工业控制
            </div>
            <div class="text item">
              嵌入式研发
            </div>
          </el-col>

        </el-row>
        </el-card>
      </el-col>
      <el-col :md="12" :sm="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h2>定制软硬件开发</h2>
          </div>
          <el-row>
            <el-col :span="12" class="intro-image">
              <img height="200px" src="~/assets/dianluban.png" alt="Woody Box">
            </el-col>
            <el-col :span="12">
              <div class="text item">
                网络安全
              </div>
              <div class="text item">
                服务器运维
              </div>
              <div class="text item">
                工业控制
              </div>
              <div class="text item">
                嵌入式研发
              </div>
            </el-col>

          </el-row>
        </el-card>
      </el-col>
      <el-col :md="12" :sm="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h2>专业的机床改造</h2>
          </div>
          <el-row>
            <el-col :span="12" class="intro-image">
              <img height="200px" src="~/assets/dianluban.png" alt="Woody Box">
            </el-col>
            <el-col :span="12">
              <div class="text item">
                网络安全
              </div>
              <div class="text item">
                服务器运维
              </div>
              <div class="text item">
                工业控制
              </div>
              <div class="text item">
                嵌入式研发
              </div>
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

<style>
  .box-card {
    margin: 20px;
    height: 300px;
  }
  .intro-image{
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
</style>
