<template>
    <div>
            <table v-if="type=='office'">
                                <tr>
                                    <th></th>
                                    <th>办事处名称</th>
                                    <th>站点评级优</th>
                                    <th>站点评级良</th>
                                    <th>站点评级中</th>
                                    <th>站点评级差</th>
                                </tr>
                                <tr v-for="(item, index) in tables" :key="index">
                                    <td>{{ index+1 }}</td>
                                    <td>{{ item.streetName}}</td>
                                    <td>{{ item.excellentNum }}</td>
                                    <td>{{ item.goodNum }}</td>
                                    <td>{{ item.passNum }}</td>
                                    <td>{{ item.failNum }}</td>
                                </tr>    
             </table>

             <table v-if="type=='site'">
                                <tr>
                                    <th></th>
                                    <th>站点名称</th>
                                    <th>超标次数</th>
                                    <th>超标总值</th>
                                    <th>得分</th>
                                    <th>最终评级</th>
                                </tr>
                                <tr v-for="(item, index) in tables" :key="index">
                                    <td>{{ index+1 }}</td>
                                    <td>{{ item.siteName}}</td>
                                    <td>{{ item.exceedStandardNum }}</td>
                                    <td>{{ item.exceedTotal }}</td>
                                    <td>{{ item.score }}</td>
                                    <td>{{ item.level }}</td>
                                </tr>
             </table>

             <table v-if="type=='top'">
                    <tr v-if="type=='top'">
                        <th>站点名称</th>
                        <th>超标总值</th>
                        <th>站点评级中</th>
                    </tr>
                           <tr v-for="(item, index) in tables" :key="index">
                                    <td>{{ item.siteName }}</td>
                                    <td>{{ item.exceedTotal}}</td>
                                    <td>{{ item.levelCode }}</td>
                            </tr>   
             </table>
    </div>

</template>

<script>
export default {
    props:['tables','type'],
    data(){
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
     table{
                    font-size: 14px;
                    color: #fff;
                    width: 100%;
                    margin-top: 40px;
                    table-layout: cellpadding;
                    border-collapse:collapse;

                    tr{
                        margin-bottom: 10px;
                        color: #abcbff;

                        &:nth-child(-n+4):nth-child(n+2){
                            color: #fff;
                            font-weight: bold;
                            background: url(../assets/images/table_y.png) no-repeat left #24a5e8;
                        }
                    }
    
                
                    th{
                        color: #abcbff;
                        border-bottom: 1px solid #083d6b;
                        height: 50px;
                        line-height: 50px;
                    }
                    td{
                        border-top:1px solid #083d6b;
                        height: 30px;
                    }
                }
</style>