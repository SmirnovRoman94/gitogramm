export default [
   {
    path: "/gitogramm/",
    component: () => import('@/pages/feeds/feeds.vue'),
    name: "Home",
   },
   {
    path: "/gitogramm/repositories",
    component: () => import('@/pages/repositories/repositories.vue'),
    name: "Repositories",
   },
   {
    path: "/gitogramm/stories",
    component: () => import('@/pages/stories/stories.vue'),
    name: "Stories",
   },
]