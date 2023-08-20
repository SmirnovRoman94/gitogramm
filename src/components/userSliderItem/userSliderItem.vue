<template>
    <div class="wrapper">
        <progressLine/>

        <avatar :src="'https://i.pinimg.com/originals/17/00/d0/1700d0de585e62c3b7aee44d1fa80f93.jpg'" :alt="'Peter'" :title="'React.reposit'" class="avatar-item"/>
            <div class="content">
                <slot></slot>
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
export default {
    name: "userSliderItem",
    components: {
        progressLine,
        avatar,
        itembutton
    },

}
</script>

<style scoped src="./userSliderItem.scss" lang="scss"></style>