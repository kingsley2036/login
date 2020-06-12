<template>
  <div class='container'>
        <div class="left-border"></div>
          
        <div class="record-box">

            <div class="seachbox">
            </div>

            <div class="content">
                <div class="image-top"></div>
                <div class="image-bottom"></div>
            </div>
        </div>
        
        <div class="right-border"></div>
  </div>
</template>

<style lang="scss" scoped>
.container{
    position: relative;
    display: flex;
    justify-content: space-between;
    height:100%;
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

        .record-box{
            width: 100%;
            height: 550px;
            margin: 5px 5px 0px;
            position: relative;
            
            .seachbox{
                box-shadow: inset 0px 0px 30px 0px rgba(0, 128, 202, 0.8);
                margin: 0px auto 20px;
                width: 90%;
                padding: 20px 50px;
                height: 120px;
                p{
                    margin: 0;
                    padding: 0;
                }
            }

            .content{
                box-shadow: inset 0px 0px 30px 0px rgba(0, 128, 202, 0.8);
                margin: 10px auto;
                width: 90%;
                padding: 10px;
                height: 400px;
                position: relative;
                .image-top::before{
                    content: '';
                    border-top:3px solid #00fcf9;
                    border-left: 3px solid #00fcf9;
                    position: absolute;
                    width: 15px;
                    height: 25px;
                    top: -3px;
                    left: -3px;
                    z-index: 2;
                }
                .image-top::after{
                    content: '';
                    border-top:3px solid #00fcf9;
                    border-right: 3px solid #00fcf9;
                    position: absolute;
                    width: 15px;
                    height: 25px;
                    top: -3px;
                    right:-3px;
                    z-index: 2;
                }
                .image-bottom::before{
                    content: '';
                    border-bottom:3px solid #00fcf9;
                    border-left: 3px solid #00fcf9;
                    position: absolute;
                    width: 15px;
                    height: 25px;
                    bottom: -3px;
                    left:-3px;
                    z-index: 2;
                }
                .image-bottom::after{
                    content: '';
                    border-bottom:3px solid #00fcf9;
                    border-right: 3px solid #00fcf9;
                    position: absolute;
                    width: 15px;
                    height: 25px;
                    bottom: -3px;
                    right:-3px;
                    z-index: 2;
                }
        }
    }
}

</style>