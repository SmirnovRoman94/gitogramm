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
            <issues :issues="comments" :loading="load" @loadContent="loadComments"/>
            <div class="date">{{ dateComputed }}</div>
        </div>
    </div>
</template>

<script>
import icon from '@/icons/icon'
import {mapActions} from "vuex"
import issues from '../issues/issues.vue'
export default {
  name: 'PostUserItem',
  components: {
    icon,
    issues
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    showingToggle: false,
    comments: [],
    load: false
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
    ...mapActions({
      dataComments: "user/dataComments"
    }),
    // togleItem () {
    //   this.showingToggle = !this.showingToggle
    // },
    async loadComments(){
      this.load = true;
      const items = await this.dataComments({owner: this.post.user.login, repo: this.post.title});
        if(items.length > 0){
          this.load = false;
        }
        items.forEach(el => {
        const item = {
          id: el.id,
          user_login: el.user.login,
          comment_text: el.title
        }
        this.comments.push(item)
      });
    }
  },
  // async created() {
  //   const items = await this.dataComments({owner: this.post.user.login, repo: this.post.title});
  //   items.forEach(el => {
  //     const item = {
  //       id: el.id,
  //       user_login: el.user.login,
  //       comment_text: el.title
  //     }
  //     this.comments.push(item)
  //   });
  // }

}
</script>

<style lang="scss" src="./postUserItem.scss" scoped>

</style>
