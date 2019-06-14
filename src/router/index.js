import Vue from 'vue'

import Router from 'vue-router'
import Home from '../components/home/Home'
import EmployeDetail from '../components/employeDetail/EmployeDetail'
import Employees from '../components/employees/Employees'

Vue.use(Router)

const routes = [
    {
        path: '/home', name: 'home',component: Home
    },
    {
        path: '/employeDetail/:id',name: 'employeDetail', component: EmployeDetail
    },
    {
        path: '/employees',name: 'employees', component: Employees
    },
    {
        path: '/',name: 'home', redirect: '/home'
    },
]

let router = new Router({
    routes
})

export default router
