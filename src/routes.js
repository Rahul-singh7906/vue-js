import { createWebHistory,createRouter } from "vue-router";
import MyHome from './components/MyHome.vue'
import MyLogin from './components/MyLogin.vue'
import MyProfile from './components/MyProfile.vue'


const routes=[
    {
        name:'Home',
        path:'/',
        component:MyHome
    },
    {
        name:'Login',
        path:'/login',
        component:MyLogin
    },
    {
        name:'Profile',
        path:'/profile',
        component:MyProfile
    }
];

const router= createRouter({
    history:createWebHistory(),
    routes:routes
});
export default router;
