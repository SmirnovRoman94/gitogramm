<template>
    <div class="wrapper">
        <progressLine :activeItem="active"/>

        <avatar :src="data.avatar" :alt="data.login" :title="data.name" class="avatar-item"/>
            <div class="content">
                <div class="spiner" v-if="loading == true">
                    <spiner/>
                </div>
                <div v-if="data.data">
                    <div class="content-item" v-html="data.data"></div>
                </div>
                <div v-else class="placeholder">
                    <placeholder :count="3"/>
                </div>
            </div>
        <div class="footer">
            <itembutton :nameBtn="'Follow'" :changeTitle="'Unfollow'"></itembutton>
        </div>
    </div>
</template>

<script>
import progressLine from '../progressLine/progressLine.vue'
import avatar from "../avatar/avatar.vue"
import itembutton from '../button/button.vue'
import spiner from '../spiner/spiner.vue'
import placeholder from '../placeholder/placeholder.vue'
export default {
    name: "userSliderItem",
    components: {
        progressLine,
        avatar,
        itembutton,
        spiner,
        placeholder
    },
    props: {
        active: Boolean,
        loading: {
            type: Boolean,
            default: () => (false)
        },
        data: {
            type: Object,
            required: true,
            default: () => ({})
        }
    },
}
</script>

<style scoped src="./userSliderItem.scss" lang="scss"></style>