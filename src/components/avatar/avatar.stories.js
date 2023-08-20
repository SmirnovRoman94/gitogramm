import avatar from "./avatar.vue";
import avatarPhoto from '../../assets/Photo.png' 

export default {
    title: "avatar",
    components: { avatar , avatarPhoto}
}



export const defaultView  = () => ({
    components: {
        avatar
    },
    props: {
        src: {
            default: () => avatarPhoto
        },
        alt: {
            default: () => 'Peter'
        }
    },
    template: `
        <avatar  title="React.reposit"
        :src="src"
        :alt="alt"/>
      `
    
})


defaultView.story = {
    name: "Стандартный вид"
}

