/* eslint-disable storybook/story-exports */
import placeholder from "./placeholder.vue";

export default {
  title: "placeholder",
  components: {placeholder},

}

const template  = (args) => ({
    components: {
        placeholder
    },
    data: () => ({
        args
    }),
    template: `
        <placeholder/>
      `
    
})

export const Default = template.bind({})