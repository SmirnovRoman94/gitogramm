<template>
    <component :is="name"/>
</template>

<script>
import * as icons from './variants'
export default {
  name: 'Icon',
  components: {
    ...icons
  },
  props: {
    name: {
      type: String,
      validator (value) {
        return Object.keys(icons).includes(value)
      }
    }
  }
}
</script>
