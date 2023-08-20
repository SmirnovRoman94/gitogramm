<template>
   <div class="item-repo">
        <h1>{{ title }}</h1>
        <p class="content">
            <strong>{{ firstTwoWords }}</strong> {{ remainingWords }}
        </p>
        <div class="social">
            <div class="social-item">
                <button>
                    <icon name="star" class="icon"></icon>
                    <span>Star</span>
                </button>
                <p class="social-item-count">{{ stars }}</p>
            </div>
            <div class="social-item">
                <button>
                    <icon name="fork" class="icon"></icon>
                    <span>Fork</span>
                </button>
                 <p class="social-item-count">{{ forks }}</p>
            </div>
        </div>
   </div>
</template>

<script>
import icon from '@/icons/icon'
export default {
    name: "repository user",
    components: {
        icon
    },
    props: {
        title: {
            type: String,
        },
        desc: {
            type: String,
            default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vel quos delectus odio amet culpa ullam tenetur suscipit. Non omnis assumenda, illo ipsam porro odit eligendi quaerat enim eum corrupti.'
        },
        forks: {
            type: Number
        },
        stars: {
            type: Number
        }
    },
    computed: {
        firstTwoWords() {
            let item = ''
            if(this.desc){
                item =  this.desc.trim().split(" ").slice(0, 2).join(" ");
            }
            return item
        },
        remainingWords() {
            let item = ''
            if(this.desc){
                item =  this.desc.trim().split(" ").slice(2).join(" ");
            }
            return item
        }
    }
}
</script>

<style scoped src="./repoUserItem.scss" lang="scss"></style>