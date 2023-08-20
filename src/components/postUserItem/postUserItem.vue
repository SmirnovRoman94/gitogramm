<template>
    <div class="post-item">
        <div class="post-header">
            <img :src="post.user.avatar" :alt="post.user.login" class="img">
            <p class="login">{{ post.user.login }}</p>
        </div>
        <div class="post-content">
            <h1 class="post-title">{{ post.title }}</h1>
            <div class="post-content-item" v-html="post.text"></div>
            <div class="social">
                <div class="social-item">
                    <button>
                        <icon name="star" class="icon"></icon>
                        <span>Star</span>
                    </button>
                    <p class="social-item-count">{{ countStar }}</p>
                </div>
                <div class="social-item">
                    <button>
                        <icon name="fork" class="icon"></icon>
                        <span>Fork</span>
                    </button>
                    <p class="social-item-count">{{ post.fork }}</p>
                </div>
            </div>
        </div>
        <div class="post-footer">
            <toggler @togleBtn="togleItem" :isShow="showingToggle"/>
            <ul class="comments" v-if="showingToggle">
                <li class="comment-item" v-for="comment in post.comments" :key="comment.id">
                    <span class="comment-item-user">{{ comment.user_login }}</span>
                    <span>{{ comment.comment_text }}</span>
                </li>
            </ul>
            <div class="date">{{ dateComputed }}</div>
        </div>
    </div>
</template>

<script>
import icon from '@/icons/icon'
import { toggler } from '../toggler'
export default {
  name: 'PostUserItem',
  components: {
    icon,
    toggler
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    showingToggle: true
  }),
  computed: {
    countStar () {
      return Math.round(this.post.star / 1000) + 'k'
    },
    dateComputed () {
      const month = ['December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November']
      const postMonth = Number(this.post.date.split('.')[1])
      return `${this.post.date.split('.')[0]} ${month[postMonth]}`
    }
  },
  methods: {
    togleItem () {
      this.showingToggle = !this.showingToggle
    }
  }
}
</script>

<style lang="scss" src="./postUserItem.scss" scoped>

</style>
