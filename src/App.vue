<template>
  <div id="app" v-if="isDone">
    <Header />
      <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue'
import Footer from './components/Footer'
import Header from './components/Header'
export default {
  name: 'app',
  components: {
    Header,
    Footer
  },
  data(){
    return {
      isDone:false
    }
  },
  methods:{
    getUserInfo(){
      this.$api.getUserInfo({
            }).then(res => {
                console.log('获取当前用户信息====', res)
                Vue.prototype.$userinfo = {
                    loginName: res.data.loginName,
                    role: res.data.office.grade, //1=市 2= 区 3= 办事处
                    avatarUrl: res.data.photo
                }
                this.isDone =true
            })
    }
  },
  created(){
      this.getUserInfo()
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>
