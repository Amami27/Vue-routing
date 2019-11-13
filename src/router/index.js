import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import DashboardHome from '../views/Dashboard/Index.vue'
import Blog from '../components/Blog.vue'




Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/our-service',
        name: 'services',
        component: Services
    },
    {
        path: '/admin',
        name: 'dashboard',
        component: DashboardHome
    },
    {
        path: '/contact-us',
        name: 'contact',
        component: () =>
            import ('../views/Contact.vue')
    },
    {
        path: '/blog-post',
        name: 'blog',
        component: Blog
    }
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router