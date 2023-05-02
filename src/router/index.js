import Vue from 'vue'
import Router from 'vue-router'
import Database from '@/components/Database'
import Table from '@/components/Table'
import Field from '@/components/Field'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Database',
            component: Database
        },
        {
            path: '/table',
            name: 'Table',
            component: Table
        },
        {
            path: '/field',
            name: 'Field',
            component: Field
        }
    ],
    mode: "history",
    base: "/"
})
