import { createRouter, createWebHistory } from "vue-router";

//制定路由规则

const routes = [
    {
        path: "/",
        name: "main",
        component: () => import("@/views/Main.vue"),
        
        //刷新网页重定向到Home页面
        redirect:"/home",
        children:[
            {
                path:"home",
                name:"home",
                component:()=>import("@/views/Home.vue"),
            },
        ],
    },
];

const router = createRouter({
    //设置路由模式
    history: createWebHistory(),
    routes,
});

export default router;