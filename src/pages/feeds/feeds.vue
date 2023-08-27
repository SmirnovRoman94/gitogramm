<template>
    <div class="topline">
      <topline>
        <template #headline>
          <a href="#" class="logo">
            <icon name="logo"/>
          </a>
          <div class="icons">
            <a href="#" class="icon">
              <icon name="home"/>
            </a>
            <a href="#" class="icon">
              <img :src="user.avatar" class="avatar"/>
            </a>
            <a href="#" class="icon">
              <icon name="signOut"/>
            </a>
          </div>
        </template>
        <template #content>
          <ul class="stories">
            <li class="stories-item" v-for="(item, index) in dataItems" :key="index">
              <story-user-item :avatar="item.owner.avatar_url" :user-name="item.owner.login" @click="getItem(item)"/>
            </li>
          </ul>
        </template>
      </topline>
      <div class="posts">
        <div class="post" v-for="item in dataPost" :key="item.id">
          <postUserItem :post="item"/>
        </div>
      </div>
     
    </div>
</template>

<script>
import topline from '@/components/topline/topline'
import icon from '@/icons/icon'
import {mapGetters, mapActions} from "vuex"
import storyUserItem from '@/components/storyUserItem/storyUserItem'
import postUserItem from '@/components/postUserItem/postUserItem'
import dataPost from '@/pages/feeds/dataPost'
export default {
  name: 'feeds',
  components: {
    topline,
    icon,
    storyUserItem,
    postUserItem
  },
  data: () => ({
    user: {
      avatar: require('../../assets/Photo.png'),
    },
    dataPost,
    items: []
  }),
  computed: {
    ...mapGetters({
      dataItems: "trandings/getDataTrandings",
    }),
  },
  methods: {
    ...mapActions({
      fetchTrandings: "trandings/fetchTrandings",
    }),
    getItem(item){
      console.log(item)
      this.$router.push({
        name: "Stories",
        query: {
          id: item.id
        }
      })
    }
  },
  async created() {
    await this.fetchTrandings()
  }
}
</script>

<style lang="scss" scoped>
.logo {
  color: #292929;
  width: 174px;
  height: 40px;
}
.icons {
  display: flex;
}
.icon {
  color: #292929;
  width: 32px;
  height: 32px;
  &:not(:first-child){
    margin-left: 24px;
  }
  &:not(:nth-child(2n)){
    cursor: pointer;
  }
}
.avatar{
  border-radius: 37px;
  background-size: cover;
  background-repeat: no-repeat;
}

.stories{
  display: flex;
  overflow-x: auto;
  gap: 31px;
}

.stories-item{
  flex: 0 0 auto;
}
.stories::-webkit-scrollbar {
  display: none;
}

@media screen and (max-width: 400px) {
  .logo{
    width: 100px;
    height: 23px;
  }
  .icon{
    width: 18px;
    height: 20px;
    &:not(:first-child){
      margin-left: 14px;
    }
  }
  .stories{
    gap: 10px;
  }
}
.repo{
  margin: 40px auto;
  padding-bottom: 24px;
  max-width: 979px;
}
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  .count_repo{
    color: #9E9E9E;
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
  }
}
.posts {
  margin: 32px auto;
  max-width: 979px;
}
.post{
  margin-bottom: 24px;
}
@media screen and (max-width:979px) {
  .posts{
    margin-left: 20px;
    margin-right: 20px;
  }
  .post{
    margin-bottom: 20px;
  }
}
@media screen and (max-width:400px) {
  .posts{
    margin-left: 10px;
    margin-right: 10px;
  }
  .post{
    margin-bottom: 18px;
  }
}
</style>
