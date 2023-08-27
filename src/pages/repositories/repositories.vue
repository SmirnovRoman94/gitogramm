<template>
    <div class="repo">
        <div class="header">
          <h1>Repositories</h1>
          <span class="count_repo">10</span>
        </div>
        <div class="posts">
          <repoUserItem v-for="item in items" :key="item.id" v-bind="getDataItem(item)" class="post"/>
        </div>
      </div>
</template>

<script>
import * as api from '../../api';
import repoUserItem from '@/components/repoUserItem/repoUserItem'
export default {
    name: "repositories",
    components: {
        repoUserItem
    },
    data: ()=>({
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

<style>
.header{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.count_repo{
  color: #9E9E9E;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; 
}
</style>