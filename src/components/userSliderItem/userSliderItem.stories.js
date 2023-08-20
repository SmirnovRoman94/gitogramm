import userSliderItem from "./userSliderItem.vue"

export default {
    title: "userSliderItem",
    components: {userSliderItem}
}

const template  = () => ({
    components: {
        userSliderItem
    },
    template: `
       <userSliderItem>
       <div>
        <p><strong>Lorem ipsum,</strong> dolor sit amet consectetur adipisicing elit. Necessitatibus recusandae nobis, deleniti, eveniet quis minima quasi blanditiis vel totam suscipit fugiat quia tempora optio tenetur. Dolore totam distinctio facilis, nihil odio eligendi? Aliquam numquam doloribus quaerat ullam quae aliquid a eaque? Officiis, aperiam vero atque explicabo, voluptates animi molestiae minus sequi mollitia nulla veniam numquam neque velit repudiandae, illo rem earum? Aliquam molestiae nemo, similique alias ad, aperiam officiis consequuntur porro libero soluta magnam tenetur dolorem quod neque ex corporis sunt maxime animi aspernatur facilis facere a voluptate! Beatae provident pariatur, consectetur velit quae culpa ad excepturi nobis possimus similique.</p>
       </div>
       </userSliderItem>
      `
    
})

export const Default = template.bind({});