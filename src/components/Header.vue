<template>
    <div class="header">
         <div class="titlebox">
             <div class="titleleft"></div>
              <h1>油烟监控平台</h1>
             <div class="titleright">
                 <p>更新时间: <span>2019-10-31 14:32:23</span> </p>
             </div>
         </div>
     </div>
</template>




<style lang="scss" scoped>
    .header{
        width: 100%;
        margin: 20px auto 0px;
        .titlebox{
            display: flex;
            justify-content: space-between;
            .titleleft{
                background: url(../assets/images/header_left.png) no-repeat left;
                height: 50px;
                width: 100%;
            }
            h1{
                color:#36e5ff;
                font-size: 26px;
                width: 430px;
                margin-top: -10px;
            }
            .titleright{
                background: url(../assets/images/header_right.png) no-repeat right;
                height: 50px;
                width: 100%;
                p{
                    color: #fff;
                    font-size: 12px;
                    line-height: 10px;
                }
            }
        }
    }
</style>