import Vue from 'vue'

import Router from 'vue-router'
import Home from '../components/home/Home'
import EmployeDetail from '../components/employeDetail/EmployeDetail'

Vue.use(Router)

const routes = [
    {
        path: '/', component: Home
    },
    {
        path: '/employeDeatil', component: EmployeDetail
    },
]

let router = new Router({
    routes
})

export default router
