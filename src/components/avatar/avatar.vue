<template>
    <div class="avatar-component">
        <img v-bind="$attrs">
        <p class="title">{{ title }}</p>
  </div>
</template>

<script>
export default {
    name: "avatar",
    props: {
        title: {
            type: String
        }
    }
}
</script>

<style scoped src="./avatar.scss" lang="scss">

</style>