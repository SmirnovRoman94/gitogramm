<template>
    <button @click="$emit('togleBtn')" class="btn">
        <span class="text">{{ isShow ? 'Hide' : 'View' }} issued</span>
        <icon name="modifer" class="toggle-icon" :class="{'isActive' : isShow}"></icon>
    </button>
</template>

<script>
import icon from '../../icons/icon.vue'
export default {
  name: 'toggler',
  components: {
    icon
  },
  props: {
    isShow: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" src="./toggler.scss" scoped></style>
