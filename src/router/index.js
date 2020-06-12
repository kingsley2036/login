import Vue from 'vue'
import Router from 'vue-router'


import Monitoring from '@/pages/Monitoring'
import Record from '@/pages/Record'
import Statistics from '@/pages/Statistics'

Vue.use(Router)

export default new Router({

    routes: [
        {
            path: '/',
            name: 'monitoring',
            component: Monitoring,
        },
        {
            path: '/statistics',
            name: 'statistics',
            component: Statistics
        },
        {
            path: '/record',
            name: 'record',
            component: Record 
        }
    ]


})