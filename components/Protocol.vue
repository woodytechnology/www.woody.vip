<template>
  <div style="width:100%;">
    <h1 style="text-align: center;" >支持的协议</h1>
    <div v-for="(p_list,group,index) in protocols" v-key="index" style="margin: 0 20px 0 20px">
      <el-divider content-position="left" >{{group}}</el-divider>
      <el-row>
        <el-col :lg="3" :md="4" :sm="6" :xs="8" v-for="(protocol,index2) in p_list" v-key="index2">
          <div style="height: 100px;width: 150px; display: flex;align-items: center;justify-content: center;">
            <img style="max-width: 80%; max-height: 60%;" :src="protocol.img" :alt="protocol.name">
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
          img: require("~/assets/protocols/fanuc.svg")
        },
        {
          name:'Siemens',
          img: require("~/assets/protocols/siemens.svg")
        },
        {
          name:'Mitsubishi',
          img: require("~/assets/protocols/mitsubishi.svg")
        },
        {
          name:'Hass',
          img: require("~/assets/protocols/hass.svg")
        },
        {
          name:'Citizen',
          img: require("~/assets/protocols/citizen.svg")
        },
        {
          name:'Brother',
          img: require("~/assets/protocols/brother.svg")
        },
        {
          name:'Heidenhain',
          img: require("~/assets/protocols/heidenhain.svg")
        },
        {
          name:'Mazak',
          img: require("~/assets/protocols/mazak.svg")
        },
        {
          name:'DMG',
          img: require("~/assets/protocols/dmg.svg")
        },
        {
          name:'Mori',
          img: require("~/assets/protocols/mori.svg")
        },
        {
          name:'Fagor',
          img: require("~/assets/protocols/fagor.svg")
        },
        {
          name:'KND',
          img: require("~/assets/protocols/knd.png")
        },
        {
          name:'GSK',
          img: require("~/assets/protocols/gsk.png")
        },
        {
          name:'Syntec',
          img: require("~/assets/protocols/syntec.png")
        }
      ],
      PLC:[
        {
          name:'Modbus',
          img: require("~/assets/protocols/modbus.png")
        },
        {
          name:'Siemens',
          img: require("~/assets/protocols/siemens.svg")
        },
        {
          name:'Mitsubishi',
          img: require("~/assets/protocols/mitsubishi.svg")
        },
        {
          name:'Omron',
          img: require("~/assets/protocols/omron.svg")
        },
        {
          name: 'Schneider',
          img: require("~/assets/protocols/schneider.svg")
        },
        {
          name:'台达',
          img: require("~/assets/protocols/delta.png")
        },

      ],
      Robot:[
        {
          name:'Kuka',
          img: require("~/assets/protocols/kuka.svg")
        },
        {
          name:'Fanuc',
          img: require("~/assets/protocols/fanuc.svg")
        },
        {
          name:'ABB',
          img: require("~/assets/protocols/abb.svg")
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
