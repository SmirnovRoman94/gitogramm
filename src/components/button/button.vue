<template>
    <button class="btn" :class="itemFollow" @click="following">{{  this.itemFollow === 'default' ? nameBtn : changeTitle}}</button>
</template>


<script>
export default {
    name: "button",
    data: () => ({
        itemFollow: 'default'
    }),
    props: {
        nameBtn:{
            type: String
        },
        changeTitle: {
            type: String
        }
    },
    emits: ['clicked'],
    methods: {
        following(){
            this.itemFollow = (this.itemFollow === 'default') ? 'active' : 'default';
            this.$emit('clicked')
        }
    }
}
</script>

<style scoped src="./button.scss" lang="scss"></style>