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
        <!-- <template #content>
          <ul class="stories">
            <li class="stories-item" v-for="item in dataUser" :key="item.id">
              <story-user-item :avatar="item.avatar" :user-name="item.username"/>
            </li>
          </ul>
        </template> -->
      </topline>
      <!-- <div class="posts">
        <div class="post" v-for="item in dataPost" :key="item.id">
          <postUserItem :post="item"/>
        </div>
      </div> -->
     
      <div class="repo">
        <div class="header">
          <h1>Repositories</h1>
          <span class="count_repo">10</span>
        </div>
        <div class="posts">
          <repoUserItem v-for="item in items" :key="item.id" v-bind="getDataItem(item)" class="post"/>
        </div>
      </div>
    </div>
</template>

<script>
import topline from '@/components/topline/topline'
import icon from '@/icons/icon'
// import dataUser from '@/pages/feeds/dataUser'
// import storyUserItem from '@/components/storyUserItem/storyUserItem'
// import postUserItem from '@/components/postUserItem/postUserItem'
import dataPost from '@/pages/feeds/dataPost'
import repoUserItem from '@/components/repoUserItem/repoUserItem'
import * as api from '../../api';
export default {
  name: 'feeds',
  components: {
    topline,
    icon,
    repoUserItem
    // storyUserItem,
    // postUserItem
  },
  data: () => ({
    user: {
      avatar: require('../../assets/Photo.png'),
    },
    // dataUser,
    dataPost,
    items: []
  }),
  methods: {
    getDataItem(item){
      return {
        title: item.name,
        desc: item.description,
        forks: item.forks_count,
        stars: item.stargazers_count
      }
    }
  },
  async created() {
    try{
      const {data} = await api.trandings.getTrandings();
      this.items = data.items;
    }catch(err){
      console.log(err)
    }
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
