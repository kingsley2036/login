// 统计分析

import axios from '@/api/base'
const BASE = '/oilSmoke/api/statistic/'

export default {
// 数据统计 查询列表初始化
s_listAreaStreet: data => {
    return axios.get(BASE + 'listAreaStreet', { params: data } )
},

// 根据当前区 联动街道办事处
s_getStreetsByArea: data => {
    return axios.get(BASE + 'getStreetsByArea', { params: data } )
},

// 查询站点状态数量统计
getSiteStatusStatistic: data => {
    return axios.get(BASE + 'getSiteStatusStatistic', { params: data })
},

// 各办事处安装设备数量统计	
getDeviceStatisticByStreet: data => {
    return axios.get(BASE + 'getDeviceStatisticByStreet', { params: data })
},

// 各办事处评级
getStreetLevelList: data => {
    return axios.get(BASE + 'streetLevelList', {params: data} )
},

// 当前区各办事处超标数量统计
getExceedStandardNumStatistic: data => {
    return axios.get(BASE + 'getExceedStandardNumStatistic', { params: data } )
},

// 超标占比统计(初始化和查询接口,环形图)	
getExceedStandardPercent: data => {
    return axios.get(BASE + 'getExceedStandardPercent', { params: data} );
},




//  =============================   办事处级别   ==================================

// 超标站点top10
getExceedStandardSites: data => {
    return axios.get(BASE + 'exceedStandardSites', { params: data })
},

// 站点评级列表
getsitesLevelList: data => {
    return axios.get(BASE + 'sitesLevelList', { params: data })
}






    
}