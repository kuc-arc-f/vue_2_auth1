import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/Home'
import about from '../components/About'
//import top_page from '../components/Blogs/top'
//import show from '../components/Blogs/show'


import usersLogout from '../components/Users/Logout'
import usersCheck from '../components/Users/check'
import usersTest from '../components/Users/test_auth'

import usersLogin from '../components/Users/Login'
import usersNew from '../components/Users/new'

Vue.use(Router)
//
export default new Router({
    /* mode: 'history', */
    routes: [
        { path: '/', component: home },
//        { path: '/show/:id', component: show },
        //
        { path: '/home', component: home },
        { path: '/about', component: about },
        /* users */
        { path: '/users/logout', component: usersLogout },
        { path: '/users/check', component: usersCheck },
        { path: '/users/login', component: usersLogin },
        { path: '/users/new', component: usersNew },
        { path: '/users/test', component: usersTest },        
        //     
    ]
})
