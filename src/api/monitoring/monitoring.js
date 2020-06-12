import axios from '@/api/base'
const BASE = '/oilSmoke/api/monitor/'


export default {

//实时监控查询列表初始化
listAreaStreet:data => {
    return axios.get(BASE + 'listAreaStreet',  { params: data })
},

// 根据当前区 联动街道办事处
getStreetsByArea: data => {
    return axios.get(BASE + 'getStreetsByArea', { params: data })
},

// 根据当前街道 联动站点
getSitesByStreet: data => {
    return axios.get(BASE + 'getSitesByStreet', { params: data })
},


//根据条件查询站点列表及统计数据
listSiteByParam: data => {
    return axios.get(BASE + 'listSiteByParam', { params: data })
},


// 查询前七天排放量统计
dailyTotalStatisticBySite: data => {
    return axios.get(BASE + 'dailyTotalStatisticBySite', { params: data })
},

// 站点实时数据统计
realDataBySite: data => {
    return axios.get( BASE + 'realDataBySite', { params: data } )
}



}
