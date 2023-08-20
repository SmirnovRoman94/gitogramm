<template>
   <div class="c-progress" :class="{active}">
    <div ref="indicator" class="indicator"></div>
   </div>
</template>

<script>
export default {
    name: "progressLine",
    data: () => ({
        active: false
    }),
    emits: ['onFinish'],
    methods: {
        emitOnFinish() {
            this.$emit('onFinish')
        }
    },
    mounted() {
        // this.$nextTick(() => {
        //     this.active = true
        // })
        setTimeout(() => {
            this.active = true
        }, 500)

        this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
    },
    beforeUnmount() {
        this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
    }
}
</script>

<style scoped src="./progressLine.scss" lang="scss"></style>