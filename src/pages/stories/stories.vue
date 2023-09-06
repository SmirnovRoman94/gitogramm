<!-- eslint-disable vue/return-in-computed-property -->
<!-- eslint-disable vue/return-in-computed-property -->
<template>
    <div class="back">
        <div class="header">
            <a class="logo" href="#">
                <icon name="logo"/>
            </a>
            <div class="close">
                <icon name="close" @click="$router.push('/')"/>
            </div>
        </div>
        <div class="stories">
            <div class="content-stories" :style="{transform : 'translateX('+ this.turnData +'px)'}">
                <div v-for="(item, index) in dataItemsRepo" :key="index" class="content-item" :class="{'active' : activeIndex == index}">
                    <userSliderItem :data="item" active  :loading="item.loading" @follow="followItem"/>

                    <div class="controls" v-if="activeIndex == index">
                        <div class="controls-item" :class="regularClass">
                            <icon class="icon" @click="prev" v-if="activeIndex > 0" name="arrowLeft"/>
                            <icon class="icon" @click="next(null)" v-if="activeIndex < dataItemsRepo.length -1"  name="arrowRight"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import icon from '@/icons/icon'
import userSliderItem from '@/components/userSliderItem/userSliderItem'
import {mapGetters, mapState, mapActions} from "vuex"
export default {
   name: "stories_page",
    components: {
        icon,
        userSliderItem
    },
    data: () => ({
        dataItemsRepo: [],
        activeIndex: 0,
        turnData: 0,
    }),
    computed: {
        ...mapGetters({
            dataItems: "trandings/getDataTrandings",

        }),
        ...mapState({
            trendingsData: (state) => state.trandings.data
        }),
        // eslint-disable-next-line vue/return-in-computed-property
        regularClass(){
            let classItem = "";
            if(this.activeIndex <= 0){
                classItem = 'end'
            }else{
                classItem = 'start'
            }
            return classItem;
        }
    },
    methods: {
        ...mapActions({
            fetchTrandings: "trandings/fetchTrandings",
            fetchTrandingsItem: "trandings/fetchTrandingsItem",
            addLike: "user/addLike",
            deleteLike: "user/deleteLike"
        }),
        prev(){
            this.activeIndex--;
            this.turnData = this.turnData + 475
        },
        next(itemInd){
            if(itemInd){
                this.dataItemsRepo[this.activeIndex].loading = true;
                this.fetchTrandingsItem(this.dataItemsRepo[this.activeIndex])
                this.turnData = -(itemInd *475)
            }else{
                this.activeIndex++;
                this.dataItemsRepo[this.activeIndex].loading = true;
                this.fetchTrandingsItem(this.dataItemsRepo[this.activeIndex])
                this.turnData = this.turnData - 475
            }
        },
        async followItem(item){
            if(item.follow == false){
                let idItem = item.id;
                let result = await this.addLike({owner: item.login, repo:item.title});
                this.dataItemsRepo.map(el => el.id === idItem ? el.follow = result : el);
            }else{
                let idItem = item.id;
                let result = await this.deleteLike({owner: item.login, repo:item.title});
                this.dataItemsRepo.map(el => el.id === idItem ? el.follow = result : el);
            }
        }
    },
    watch: {
        dataItems: function(){
            console.log(this.dataItems)
            this.dataItems.forEach(el => {
                let item = {
                    id: el.id,
                    login: el.owner.login,
                    name: el.name,
                    avatar: el.owner.avatar_url,
                    loading: false,
                    follow: el.follow
                }
                this.dataItemsRepo.push(item)
            });
            if(this.$route.query.id){
                let indexItem = this.dataItems.findIndex(el => el.id == this.$route.query.id);
                let item = {
                    id: this.dataItems[indexItem].id,
                    login: this.dataItems[indexItem].owner.login,
                    name: this.dataItems[indexItem].name,
                    avatar: this.dataItems[indexItem].owner.avatar_url,
                    loading: false,
                    follow: this.dataItems[indexItem].follow
                }
                if(indexItem !== -1){
                    this.fetchTrandingsItem(item);
                    this.activeIndex = indexItem;
                    if(indexItem !== 0){
                        this.next(indexItem)
                    }
                }
            }else{
                this.fetchTrandingsItem(this.dataItems[0])
            }
        },
        activeIndex: function(){
            console.log(this.activeIndex)
        },
        trendingsData: function(){
            this.dataItemsRepo.splice(this.activeIndex, 1, this.trendingsData)
        }
    },
    async created() {
        console.log(this.$route.query)
        await this.fetchTrandings()
    }
}
</script>

<style lang="scss" src="./stories.scss" scoped>
</style>
