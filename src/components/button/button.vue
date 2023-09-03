<template>
    <button class="btn" :class="itemFollow" @click="following">
        <div v-if="loading == false">{{ this.itemFollow === 'default' ? nameBtn : changeTitle}}</div>
        <div v-else class="spiner-item"><spiner :height="20" :width="20"/></div>
        <div v-if="gitItem == true" class="git">
            <icon name="gitHub"/>
        </div>
    </button>
</template>


<script>
import spiner from '@/components/spiner/spiner'
import icon from '@/icons/icon'
export default {
    name: "button",
    components: {
        spiner,
        icon
    },
    data: () => ({
        itemFollow: 'default'
    }),
    props: {
        nameBtn:{
            type: String
        },
        changeTitle: {
            type: String
        },
        loading: {
            type: Boolean,
            default: () => {return false}
        },
        gitItem: {
            type: Boolean,
            default: () => {return false}
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