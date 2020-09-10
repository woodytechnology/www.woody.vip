<template>
  <div style="width:100%;">
    <h1 style="text-align: center;" >{{$t('protocol.title')}}</h1>
    <div v-for="(p_list,group,index) in protocols" :key="group" style="margin: 0 20px 0 20px">
      <el-divider content-position="left" >{{group}}</el-divider>
      <el-row>
        <el-col :lg="3" :md="4" :sm="6" :xs="12" v-for="(protocol,index2) in p_list" :key="index2">
          <div style="height: 100px;width: 150px; display: flex;align-items: center;justify-content: center;">
            <img style="max-width: 80%; max-height: 60%;" :src="protocol.img" :alt="protocol.name" :title="protocol.name">
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>

export default {
  components:{
  },
  data(){
    return {
      protocols :{
        CNC:[
          {
            name:this.$i18n.t('protocol.fanuc'),
            img: require("~/assets/protocols/fanuc.svg"),
          },
          {
            name:this.$i18n.t('protocol.siemens'),
            img: require("~/assets/protocols/siemens.svg"),
          },
          {
            name:this.$i18n.t('protocol.mitsubishi'),
            img: require("~/assets/protocols/mitsubishi.svg"),
          },
          {
            name:this.$i18n.t('protocol.haas'),
            img: require("~/assets/protocols/haas.svg"),
          },
          {
            name:this.$i18n.t('protocol.citizen'),
            img: require("~/assets/protocols/citizen.svg"),
          },
          {
            name:this.$i18n.t('protocol.brother'),
            img: require("~/assets/protocols/brother.svg"),
          },
          {
            name:this.$i18n.t('protocol.heidenhain'),
            img: require("~/assets/protocols/heidenhain.svg"),
          },
          {
            name:this.$i18n.t('protocol.mazak'),
            img: require("~/assets/protocols/mazak.svg"),
          },
          {
            name:this.$i18n.t('protocol.dmg'),
            img: require("~/assets/protocols/dmg.svg"),
          },
          {
            name:this.$i18n.t('protocol.mori'),
            img: require("~/assets/protocols/mori.svg"),
          },
          {
            name:this.$i18n.t('protocol.fagor'),
            img: require("~/assets/protocols/fagor.svg"),
          },
          {
            name:this.$i18n.t('protocol.knd'),
            img: require("~/assets/protocols/knd.webp"),
          },
          {
            name:this.$i18n.t('protocol.gsk'),
            img: require("~/assets/protocols/gsk.webp"),
          },
          {
            name:this.$i18n.t('protocol.syntec'),
            img: require("~/assets/protocols/syntec.webp"),
          }
        ],
        PLC:[
          {
            name:this.$i18n.t('protocol.modbus'),
            img: require("~/assets/protocols/modbus.webp"),
          },
          {
            name:this.$i18n.t('protocol.opcua'),
            img: require("~/assets/protocols/opcua.svg"),
          },
          {
            name:this.$i18n.t('protocol.siemens'),
            img: require("~/assets/protocols/siemens.svg"),
          },
          {
            name:this.$i18n.t('protocol.mitsubishi'),
            img: require("~/assets/protocols/mitsubishi.svg"),
          },
          {
            name:this.$i18n.t('protocol.omron'),
            img: require("~/assets/protocols/omron.svg"),
          },
          {
            name:this.$i18n.t('protocol.schneider'),
            img: require("~/assets/protocols/schneider.svg"),
          },
          {
            name:this.$i18n.t('protocol.delta'),
            img: require("~/assets/protocols/delta.webp"),
          },
          {
            name:this.$i18n.t('protocol.ab'),
            img: require("~/assets/protocols/allen_bradley.svg"),
          },
        ],
        Robot:[
          {
            name:this.$i18n.t('protocol.kuka'),
            img: require("~/assets/protocols/kuka.svg"),
          },
          {
            name:this.$i18n.t('protocol.fanuc'),
            img: require("~/assets/protocols/fanuc.svg"),
          },
          {
            name:this.$i18n.t('protocol.abb'),
            img: require("~/assets/protocols/abb.svg"),
          },
        ],
      }
    }
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
