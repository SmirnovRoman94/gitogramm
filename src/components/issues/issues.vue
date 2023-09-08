<template>
   <div>
        <div class="toggler">
            <toggler @togleBtn="togleItem" :isShow="showingToggle"/>
        </div>
        <div>
            <placeholder :count="3" v-if="loading"/>
        </div>
        <div v-if="showingToggle" class="comments-comntainer">
            <ul class="comments">
                <li class="comment-item" v-for="item in issues" :key="item.id">
                    <comment :comment="item"/>
                </li>
            </ul>
        </div>
   </div> 

</template>

<script>
import toggler from '../toggler/toggler.vue';
import placeholder from '../placeholder/placeholder.vue';
import comment from '../comment/comment.vue';
import { ref } from 'vue';
export default {
    name: "issues_comp",
    components: {
        toggler,
        placeholder,
        comment
    },
    props: {
        issues: {
            type: Array,
            default: () => []
        },
        loading: {
            type: Boolean
        }
    },
    setup(props, {emit}){
        const showingToggle = ref(false);

        const togleItem = () => {
            showingToggle.value = !showingToggle.value;

            if(showingToggle.value && props.issues.length === 0){
                emit('loadContent')
            }
        }
        return {
            showingToggle,
            togleItem
        }
    },
    // data: () => ({
    //     showingToggle: false,
    // }),
    // methods: {
    //     togleItem () {
    //         this.showingToggle = !this.showingToggle;

    //         if(this.showingToggle && this.issues.length === 0){
    //             this.$emit('loadContent')
    //         }
    //     }
    // }

}
</script>

<style lang="scss" scoped src="./issues.scss">
</style>