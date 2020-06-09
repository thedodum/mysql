import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/MovieIndexPage'
import Show from '@/components/MovieShowPage'
import UserInfo from '@/components/UserInfo'

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/index',
            name: 'index',
            component: Index
        },
        {
            path: '/show:id',
            name: 'show',
            component: Show
        },
        {
            path: '/',
            name: 'UserInfo',
            component: UserInfo
        }
    ]
});