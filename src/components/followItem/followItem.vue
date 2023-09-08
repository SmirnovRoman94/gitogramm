<template>
    <div class="item">
        <div class="cont">
            <img :src="itemFollow.owner.avatar_url" :alt="itemFollow.owner.login" class="ava">
            <div class="data">
                <p class="login">{{ itemFollow.owner.login }}</p>
                <p class="type">{{ itemFollow.owner.type }}</p>
            </div>
        </div>
        <itembutton :nameBtn="'Follow'" :changeTitle="'Unfollow'" :change="itemFollow.follow" :loading="false" @click="$emit('follow',itemFollow )"></itembutton>
    </div>
</template>

<script>
import itembutton from '../button/button.vue'
export default {
    name: "follow_item",
    components: {
        itembutton   
    },
    props: {
        itemFollow: {
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
.item{
    display: flex;
    align-items: center;
    justify-content: space-between;

    .cont{
        display: flex;
        align-items: center;

        .ava{
            height: 73px;
            width: 73px;
            border-radius: 50%;
        }

        .data{
            margin-left: 18px;
            .login{
                font-size: 18px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
            }
            .type{
                padding-top: 6px;
                color: #9E9E9E;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: 16px;
            }
        }
    }
}
</style>