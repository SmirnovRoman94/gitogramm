export default [
   {
    path: "/home",
    component: () => import('@/pages/feeds/feeds.vue'),
    name: "Home",
   },
   {
    path: "/repositories",
    component: () => import('@/pages/repositories/repositories.vue'),
    name: "Repositories",
   },
   {
    path: "/stories",
    component: () => import('@/pages/stories/stories.vue'),
    name: "Stories",
   },
]