<template>
    <div>
        <span class="comment-item-user">{{ comment.user_login }}</span>
        <span>{{ comment.comment_text }}</span>
    </div>
</template>

<script>
export default {
    name: "comment_comp",
    props: {
        comment: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style lang="scss" scoped src="./comment.scss"></style>