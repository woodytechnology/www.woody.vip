<template>
  <div style="width:100%;">
    <h1 style="text-align: center;" >支持的协议</h1>
    <div v-for="(p_list,group,index) in protocols" :key="group" style="margin: 0 20px 0 20px">
      <el-divider content-position="left" >{{group}}</el-divider>
      <el-row>
        <el-col :lg="3" :md="4" :sm="6" :xs="12" v-for="(protocol,index2) in p_list" :key="index2">
          <div style="height: 100px;width: 150px; display: flex;align-items: center;justify-content: center;">
            <img style="max-width: 80%; max-height: 60%;" :src="protocol.img" :alt="protocol.name" :title="protocol.name_zh">
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator'
  @Component({
    name: 'Protocol',
    components: {
    }
  })
  export default class extends Vue {
    private protocols ={
      CNC:[
        {
          name:'Fanuc',
          img: require("~/assets/protocols/fanuc.svg"),
          name_zh:'发那科'
        },
        {
          name:'Siemens',
          img: require("~/assets/protocols/siemens.svg"),
          name_zh:'西门子'
        },
        {
          name:'Mitsubishi',
          img: require("~/assets/protocols/mitsubishi.svg"),
          name_zh:'三菱'
        },
        {
          name:'Haas',
          img: require("~/assets/protocols/haas.svg"),
          name_zh:'哈斯'
        },
        {
          name:'Citizen',
          img: require("~/assets/protocols/citizen.svg"),
          name_zh:'西铁城'
        },
        {
          name:'Brother',
          img: require("~/assets/protocols/brother.svg"),
          name_zh:'兄弟'
        },
        {
          name:'Heidenhain',
          img: require("~/assets/protocols/heidenhain.svg"),
          name_zh:'海德汉'
        },
        {
          name:'Mazak',
          img: require("~/assets/protocols/mazak.svg"),
          name_zh:'马扎克'
        },
        {
          name:'DMG',
          img: require("~/assets/protocols/dmg.svg"),
          name_zh:'德马吉'
        },
        {
          name:'Mori',
          img: require("~/assets/protocols/mori.svg"),
          name_zh:'森精机'
        },
        {
          name:'Fagor',
          img: require("~/assets/protocols/fagor.svg"),
          name_zh:'法格'
        },
        {
          name:'KND',
          img: require("~/assets/protocols/knd.webp"),
          name_zh:'凯恩帝'
        },
        {
          name:'GSK',
          img: require("~/assets/protocols/gsk.webp"),
          name_zh:'广数'
        },
        {
          name:'Syntec',
          img: require("~/assets/protocols/syntec.webp"),
          name_zh:'新代'
        }
      ],
      PLC:[
        {
          name:'Modbus',
          img: require("~/assets/protocols/modbus.webp"),
          name_zh:'Modbus'
        },
        {
          name:'Siemens',
          img: require("~/assets/protocols/siemens.svg"),
          name_zh:'西门子'
        },
        {
          name:'Mitsubishi',
          img: require("~/assets/protocols/mitsubishi.svg"),
          name_zh:'三菱'
        },
        {
          name:'Omron',
          img: require("~/assets/protocols/omron.svg"),
          name_zh:'欧姆龙'
        },
        {
          name: 'Schneider',
          img: require("~/assets/protocols/schneider.svg"),
          name_zh:'施耐德'
        },
        {
          name:'Delta',
          img: require("~/assets/protocols/delta.webp"),
          name_zh:'台达'
        },
        {
          name:'Allen Bradley',
          img: require("~/assets/protocols/allen_bradley.svg"),
          name_zh:'罗克韦尔'
        },
      ],
      Robot:[
        {
          name:'Kuka',
          img: require("~/assets/protocols/kuka.svg"),
          name_zh:'库卡'
        },
        {
          name:'Fanuc',
          img: require("~/assets/protocols/fanuc.svg"),
          name_zh:'发那科'
        },
        {
          name:'ABB',
          img: require("~/assets/protocols/abb.svg"),
          name_zh:'ABB'
        },
      ],
    }
  }
</script>

<style>
  .el-divider__text{
    background: #404a59;
    font-size: 28px;
    color: white;
    font-style: oblique;
    font-weight: bold;
  }
</style>
