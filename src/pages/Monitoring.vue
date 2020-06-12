<template>
<div class="mainbox">
    <MenuBar  @sendSiteList="getSiteList"  />
  <div class='container'>
    <div class="left-border"></div>
          <Map  :siteList="siteList"  v-if="showMap" />
    <div class="right-border"></div>
  </div>
</div>
</template>



<script>
import MenuBar from '@/components/MenuBar'
import Map from '@/components/Map'
export default {
  components: {
      MenuBar,
      Map
  },
  data() {
    return {
      showMap: false,
      siteList:''
    }
  },
  methods: {
    getSiteList(data){
      console.log('Monitoring中获取到的SiteList==',data)
      this.siteList = data
      this.showMap = true
    }
  }
}
 </script>

<style lang="scss" scoped>

.mainbox{
  height: 870px;
  overflow: hidden;
  position: relative;
}
.container{
    position: relative;
    display: flex;
    justify-content: space-between;
    height:810px;
    width: 100%;
        .left-border{
            width: 30px;
            height: 560px;
            background: url(../assets/images/left_border.png) no-repeat;
        }
        .right-border{
            width: 30px;
            height: 560px;
            background: url(../assets/images/right_border.png) no-repeat;
        }
}

</style>