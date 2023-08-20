<template>
    <button class="c-story-user-item">
        <div class="avatar">
            <img :src="avatar" class="img" :alt="userName"/>
        </div>
        <div class="username">{{ userName }}</div>
    </button>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss"  src="./storyUserItem.scss" scoped>

</style>
