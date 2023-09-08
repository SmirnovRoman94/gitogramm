<template>
    <div class="repo">
      <topline>
        <template #headline>
          <a href="#" class="logo">
            <icon name="logo" @click="$router.push('/')"/>
          </a>
          <div class="icons">
            <a href="#" class="icon">
              <icon name="home" @click="$router.push('/')"/>
            </a>
            <router-link to="/repositories" class="icon">
              <img :src="userInfo.avatar" class="avatar"/>
            </router-link>
            <a href="#" class="icon" @click="logout">
              <icon name="signOut"/>
            </a>
          </div>
        </template>
      </topline>
      <div class="content-page">
        <div class="left">
          <profileVue :itemUser="userInfo" @inFollowItems="followingComp"/>
        </div>
        <div class="right"  v-if="!hideRepo">
          <div class="header">
            <h1>Repositories</h1>
            <span class="count_repo">10</span>
          </div>
          <div class="posts">
            <div>
              <repoUserItem v-for="item in items" :key="item.id" v-bind="getDataItem(item)" class="post"/>
            </div>
          </div>
        </div>
        <div class="right" v-else>
          <div class="header">
            <h1>Following</h1>
            <span class="count_repo">30</span>
          </div>
          <div class="posts">
            <div v-for="item in followREsuouce" :key="item.id" class="post">
              <followItem :itemFollow="item" @follow="following"/>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import * as api from '../../api';
import repoUserItem from '@/components/repoUserItem/repoUserItem'
import profileVue from '@/components/profile/profile.vue';
import topline from '@/components/topline/topline';
import icon from '@/icons/icon.vue';
import followItem from '@/components/followItem/followItem'
import { mapGetters, mapActions } from "vuex"
export default {
    name: "repositories",
    components: {
        repoUserItem,
        profileVue,
        topline,
        icon,
        followItem
    },
    data: ()=>({
        items: [],
        userInfo: {},
        hideRepo: false,
        followREsuouce: []
    }),
    computed: {
      ...mapGetters({
        getUserInfo: "user/getUserInfo",
        getDataFollowTrandings: "trandings/getDataFollowTrandings",
      })
    },
    methods: {
      ...mapActions({
        fetchFollowTrand: "trandings/fetchFollowTrand",
        followItem: "user/followItem",
        unfollowItem: "user/unfollowItem",
        checkFollow: "user/checkFollow"
      }),
      getDataItem(item){
        return {
          title: item.name,
          desc: item.description,
          forks: item.forks_count,
          stars: item.stargazers_count
        }
      },
      logout(){
        localStorage.removeItem("token")
      },
      followingComp(item){
        this.hideRepo = item
      },
      async following(item){
        console.log(item.owner.login)
        if(item.follow == false){
          let res = await this.followItem(item.owner.login);
          this.getDataFollowTrandings = this.getDataFollowTrandings.map(el => el.id === item.id ? item.follow = res : el);
        }else{
          let res = await this.unfollowItem(item.owner.login);
          this.getDataFollowTrandings = this.getDataFollowTrandings.map(el => el.id === item.id ? item.follow = res : el);
        }

      },
      async checkout(elem){
        let resilt = await this.checkFollow(elem.owner.login);
        return resilt
      }
    },
    watch :{
      getDataFollowTrandings: function(){
        let vm = this;
        if(this.getDataFollowTrandings !== null){
          this.getDataFollowTrandings.forEach(el => {
            this.checkout(el)
            .then(res => {
              el.follow = res
              vm.followREsuouce.push(el)
            }) 
          });
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
    },
    async mounted() {
      await this.fetchFollowTrand()
      console.log(this.getUserInfo)
      if(this.getUserInfo){
        this.userInfo = {
          id: this.getUserInfo.id,
          login: this.getUserInfo.login,
          repos: this.getUserInfo.public_repos,
          following: this.getUserInfo.following,
          name: this.getUserInfo.name,
          avatar: this.getUserInfo.avatar_url
        }
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

.content-page{
  background: #fff;
  display: flex;
  max-width: 1240px;
  margin: 0 auto;

  .left{
    width: 40%;
    border-right: 1px solid #D3D3D3;
    padding-top: 40px;
    margin-right: 20px;
  }
  .right {
    width: 60%;
    padding-top: 40px;
    margin-left: 74px;

    .header{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 36px;

    }
    .count_repo{
      color: #9E9E9E;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 28px; 
    }

    .post{
      margin-bottom: 18px;
    }
  }
}
</style>