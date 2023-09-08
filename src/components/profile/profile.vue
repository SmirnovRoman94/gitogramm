<template>
    <div>
       <h2>My profile</h2>
       <div class="content">
            <img :src="itemUser.avatar" :alt="itemUser.name" class="avatar">
            <div>
                <h3>{{ itemUser.login }}</h3>
                <div class="counter">
                    <div>
                        <p><span><strong>{{ itemUser.repos }}</strong></span> reposts</p>
                    </div>
                    <div class="foll">
                        <p>
                            <span>
                                <strong>{{ itemUser.following }}  </strong>
                            </span>
                            <span @click="$emit('inFollowItems', true)" class="link">watchers</span>
                        </p>
                    </div>
                </div>
                <p class="name">{{ itemUser.name }}</p>
            </div>
       </div>
    </div>
</template>

<script>
export default {
    name: "profile_component",
    props: {
        itemUser: {
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped src="./profile.scss">

</style>