import progressLine from "./progressLine.vue";

export default {
    title: "progressLine",
    components: { progressLine },
    argTypes: {
        onFinish: {
            action: "onFinish",
            description: "Запускается когда полностью заполняется прогресс"
        }
    }
}



const template  = (args) => ({
    components: {
        progressLine
    },
    data: () => ({
        args
    }),
    template: `
        <progressLine @onFinish="args.onFinish"/>
      `
    
})




export const Default = template.bind({})

