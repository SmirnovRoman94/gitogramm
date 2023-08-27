import spiner from "./spiner.vue";

// eslint-disable-next-line storybook/story-exports
export default {
    title: "Spiner",
    components: { spiner },
}

const template  = (args) => ({
    components: {
        spiner
    },
    data: () => ({
        args
    }),
    template: `
        <spiner/>
      `
    
})

export const Default = template.bind({})