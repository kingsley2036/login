<template>
    <div class="mapbox">
      <el-amap
        :amapManager="amapManager"
        :vid="'amap-vue'"
        :zoom="zoom"
        :center="center"
        :events="events"
      >   

            <el-amap-marker 
              v-for="(item, index) in mapList" 
              :key="index" 
              :position="[item.lng, item.lat]"
              :events="markerEvents"
              :vid="index"
              :extData="item"
              :icon="icons[item.status]"
              >
            </el-amap-marker>

      </el-amap>



            <div class="chaobiao-message-box">
                <ChaobiaoMessage :message="mapList" />
            </div>



            <div class="tabbox" v-show="isShowDetail">
                <div class="hd">
                    <h5>{{ detail.siteName }}<span>({{ detail.officeStreetName }})</span><i class="tips">{{detail.level}}</i></h5>
                    <address>地址：{{ detail.adress}}</address>
                    <div class="list">
                        <div class="devicebox">
                            <dl>
                                <dt>{{detail.deviceNum}}</dt>
                                <dd>设备数量</dd>
                            </dl>
                        </div>
                        <div class="lampbox">
                            <dl>
                                <dt>{{detail.oilSmokeStandardValue}}mg/m3</dt>
                                <dd>油烟标准值</dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div class="tabbar">
                    <button @click="tabbarCurr=0" :class="{active:tabbarCurr == 0}">统计分析</button>
                    <button @click="tabbarCurr=1" :class="{active:tabbarCurr == 1}">实时数据</button>
                    <button><router-link  class="btn"  :to="{name:'record'}">报警记录</router-link></button>
                </div>


                <div class="toggle-box" v-show="tabbarCurr == 0">
                    <DoubleLine :deviceId="detail.id"  />
                </div>

                <div class="realtime-box" v-show="tabbarCurr == 1">
                        <Realtime :deviceId="detail.id" />
                </div>
            </div>

            <div class="counttipsbox">
                <dl>
                    <dt><img src="../assets/images/point_chaobiao.png" alt=""></dt>
                    <dd>超标</dd>
                      <dt><img src="../assets/images/point_guzhang.png" alt=""></dt>
                    <dd>故障</dd>
                      <dt><img src="../assets/images/point_lixian.png" alt=""></dt>
                    <dd>离线</dd>
                      <dt><img src="../assets/images/point_changgui.png" alt=""></dt>
                    <dd>在线</dd>
                </dl>
            </div>
        </div>
</template>



<script>
import { AMapManager } from 'vue-amap'
import DoubleLine from '@/components/DoubleLine'
import Realtime from '@/components/Realtime'
import ChaobiaoMessage from '@/components/ChaobiaoMessage'
import icon_point_changgui from '@/assets/images/point_changgui.png'
import icon_point_chaobiao from '@/assets/images/point_chaobiao.png'
import icon_point_guzhang from '@/assets/images/point_guzhang.png'
import icon_point_lixian from '@/assets/images/point_lixian.png'

let amapManager = new AMapManager();


export default {
  props:{
      siteList:''
  },
  components: {
      DoubleLine,
      Realtime,
      ChaobiaoMessage
  },
  data() {
    return {
        mapList: '',
        tabbarCurr: 0,
            amapManager,
            center: [117.156015,34.239337],
            zoom: 12,
            map: null,
            isShowDetail: false,
            detail: {},
            icons:{
                0: icon_point_chaobiao,
                1: icon_point_guzhang,
                2: icon_point_lixian,
                3: icon_point_changgui
            },
            markerEvents:{
                click: (e) => {
                    this.detail = e.target.getExtData()
                    if(this.isShowDetail == false) {this.isShowDetail = true}
                }
            },
            events: {
                init (map) {
                  map.setMapStyle('amap://styles/darkblue')
                }
            }
    }
  },
  methods: {
  },
  watch:{
      siteList(data) {
          console.log('Map 组件监听 siteList =====',data)
          this.mapList = data
          this.isShowDetail = false
      }
  },
  created(){
      this.mapList = this.siteList
  }
}
 </script>

<style lang="scss" scoped>

        .mapbox{
            width: 100%;
            margin: 5px 5px 0px;
            position: relative;
            .chaobiao-message-box{
                position: absolute;
                overflow: hidden;
                padding: 10px;
                bottom: 0;
                left:0;
                width:280px;
                max-height: 520px;
               
            }

            .tabbox{
                width: 350px;
                height: 100%;
                background: #f6f6f6;
                position: absolute;
                top: 0;
                right: 0;
                z-index: 2;
                overflow: hidden;
                .hd{
                    background: #0493d6;
                    height: 140px;
                    text-align: left;
                    h5{
                        font-size: 18px;
                        font-weight: bold;
                        margin: 0;
                        padding: 10px 0 0 25px;
                        color: #fff;
                        span{
                            font-size: 14px;
                        }
                        i{
                            display: inline-block;
                            margin-left: 3px;
                            width: 15px;
                            height: 15px;
                            line-height: 15px;
                            border-radius: 3px;
                            font-size: 10px;
                            text-align: center;
                            padding: 0;
                            background: #ff9800;
                            color: #fff;
                            font-style: normal;
                        }
                    }
                    address{
                        padding:0 0 0 25px;
                        font-size: 12px;
                        color: #fff;
                        font-style: normal;
                        margin-top: 10px;
                    }
                }
                .list{
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;
                    font-weight: bold;
                    color: #fff;
                    margin-top: 20px;
                    .devicebox{
                        width: 100%;
                        text-align: center;
                        border-right: 1px solid #87c9e7;
                    }
                    .lampbox{
                        width: 100%;
                        text-align: center;
                    }
                        dl{
                            margin: 0;
                            padding: 0 10px;
                            dt{
                                margin: 0;
                                font-size: 20px;
                            }
                            dd{
                                margin: 0;
                                font-weight: normal;
                                font-size: 12px;
                            }
                        }
                }

                .tabbar{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 50px;
                    background: #fff;
                    button{
                        background: none;
                        border-style: none;
                        width: 100%;
                        height: 35px;
                        color: #808080;
                        font-weight: bold;
                        &:nth-child(2){
                            border-left: 1px solid #e5e5e5;
                            border-right: 1px solid #e5e5e5;
                        }
                        &.active{
                            color: #0493d6;
                            border-bottom: 3px solid #0493d6;
                        }
                    }
                    .btn{
                        color: #808080;
                        text-decoration: none;
                    }
                }


                .toggle-box{
                    margin-top: 10px;
                    height: 180px;
                    background: #fff;
                }

                .realtime-box{
                    height: 615px;
                    // height: 75%;
                    overflow-y: scroll;
                }





            }

            .counttipsbox{
                height: 50px;
                width: 300px;
                position: absolute;
                bottom: 0;
                right:0;
                dl{
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0;
                        dt{
                            margin: 0;
                            float: left;
                            margin-left: 10px;
                        img{
                            display: block;
                            width: 20px;
                            height: 30px;
                            margin: 0;
                        }
                }
                    dd{
                        margin:5px;
                        float: left;
                        font-size: 12px;
                        color: #9fceff;
                        font-weight: bold;
                    }
                }
                     
            }
}


</style>