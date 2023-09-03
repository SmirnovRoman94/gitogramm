<template>
    <div class="spinner" :style="{height: height + 'px', width: width +'px'}"></div>
</template>

<script>
export default {
    name: "spiner",
    props: {
        height: {
            type: Number,
            default: () => {return 50}
        },
        width: {
            type: Number,
            default: () => {return 50}
        },
    },
}
</script>

<style scoped lang="scss" src="./spiner.scss"></style>