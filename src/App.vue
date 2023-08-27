<template>
  <ul class="nav">
    <li v-for="(item, index) in routerLInks" :key="index">
      <router-link :to="item.link">{{ item.name }}</router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>

<script>
export default {
 name: 'App',
data: () => ({
  routerLInks: [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "Repositories",
      link: "/repositories"
    },
    {
      name: "Stories",
      link: "/stories"
    }
  ]
})
}
</script>

<style lang="scss" src="./global.scss">
</style>
