<template>
    <div>
        {{ items }}
    </div>
</template>

<script>
import * as api from '../../api';
export default {
    name: "repositories",
    data: ()=>({
        items: []
    }),
    async created() {
        try{
        const {data} = await api.trandings.getTrandings();
        this.items = data.items;
        }catch(err){
        console.log(err)
        }
    }
}
</script>