<template>
    <div class="footer">
         <div class="bottom-left-border"></div>
        <div class="bottom-right-border"></div>
    </div>
</template>

<style lang="scss" scoped>

    .footer{
        position: absolute;
        bottom: 0;
        left:0;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 45px;
        .bottom-left-border{
            height: 45px;
            width: 100%;
            background: url(../assets/images/bottom_left_border.png) no-repeat left;
        }
        .bottom-right-border{
            height: 45px;
            width: 100%;
            background: url(../assets/images/bottom_right_border.png) no-repeat right;
        }
    }
</style>