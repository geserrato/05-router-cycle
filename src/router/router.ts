import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import(/*webpackChunkName:"PokemonListPage"*/'@/modules/pokemon/pages/PokemonListPage.vue')
    },
    {
        path: '/about',
        component: () => import(/*webpackChunkName: "PokemonAboutPage"*/'@/modules/pokemon/pages/PokemonAboutPage.vue')
    },
    {
        path: '/id',
        component: () => import(/*webpackChunkName: "PokemonPage"*/'@/modules/pokemon/pages/PokemonPage.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import(/*webpackChunkName: "NoPageFound"*/'@/modules/shared/pages/NoPageFound.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
