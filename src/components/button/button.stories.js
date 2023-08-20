import button from "./button.vue";

export default {
    title: "button",
    components: { button }
}

const template  = () => ({
    components: {
         xButton : button
    },
    props: {
        changeTitle: {
            type: String,
            default: 'Unfollow'
        }
    },
    template: `
        <x-button nameBtn="Following" v-bind="$props"></x-button>
      `
    
})




export const Default = template.bind({});