import { createWebHashHistory, createRouter, type RouteRecordRaw } from "vue-router";
import { defineAsyncComponent } from "vue";
import Loading from "@/components/Loading.vue";
import MainLayout from "@/components/MainLayout.vue";
import NotFound from "@/components/NotFound.vue";
// 异步组件加载配置
const asyncComponent = (path: string): any =>
       defineAsyncComponent({
              loader: () => import(`../components/pages/${path}.vue`),
              loadingComponent: Loading,
              delay: 200
       });
const Login = asyncComponent("Login");
const Dashboard = asyncComponent("Dashboard");
const CaseConfiguration = asyncComponent("CaseConfiguration");
const KeyValueManagement = asyncComponent("KeyValueManagement");
const routes: Array<RouteRecordRaw> = [
       {
              path: "/",
              component: MainLayout,
              meta: {
                     displayName: "布局",
                     requiresAuth: true
              },
              children: [
                     {
                            path: "Dashboard",
                            component: Dashboard,
                            meta: { transition: "fade" }
                     },
                     {
                            path: "CaseConfiguration",
                            component: CaseConfiguration
                     },
                     {
                            path: "KeyValueManagement",
                            component: KeyValueManagement
                     }
              ]
       },
       {
              path: "/login",
              component: Login,
              meta: { requiresGuest: true }
       },
       {
              path: "/:pathMatch(.*)*", // 参数化捕获所有路径
              component: NotFound,
              meta: {
                     title: "页面不存在"
              }
       }
];

const router = createRouter({
       history: createWebHashHistory(),
       routes
});
router.beforeEach((to, from, next) => {
       next();
});
export default router;
