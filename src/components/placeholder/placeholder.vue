<template>
     <div class="cards">
        <div class="card is-loading">
            <div class="content">
                <h1></h1>
                <div class="items" ref="items">
                    <div class="item" v-for="index in arr" :key="index">
                        <p class="first"></p>
                        <p class="second"></p>
                        <p class="third"></p>
                        <p class="firth"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: "placeholder_item",
    data: () => ({
        arr: []
    }),
    props: {
        count: {
            type: Number,
            default: () => (1)
        }
    },
    methods: {
        counItem() {
            for(let i = 0; i <= this.count-1; i++){
                this.arr.push(i)
            }
        }
    },
    mounted(){
        this.counItem()
    }
}
</script>

<style scoped lang="scss" src="./placeholder.scss"></style>