<template>
    <div class="auth">
        <div class="item">
            <div class="left">
                <div class="icon"><icon name="logo"/></div>
                <div class="content">
                    <p>More than just one repository.
                        This is our digital world.</p>
                </div>
                <div>
                    <x-button :nameBtn="'Authorize with github'" :gitItem="true" :changeTitle="'Authorize with github'" @click="getAuth"></x-button>
                </div>
            </div>
            <div class="rigth">
                <img :src="require('@/assets/Mac.jpg')" alt="app">
            </div>
        </div>
    </div>
</template>

<script>
import icon from '@/icons/icon'
import xButton from '@/components/button/button'
import {clientId, clientSecret} from "../../../codes/configGitHub"
export default {
    name: "auth",
    components: {
        icon,
        xButton
    },
    methods: {
        async getAuth(){
            const apiUrl = "https://github.com/login/oauth/authorize";
            const params = new URLSearchParams();
            params.append('client_id', clientId);
            params.append('scope', 'repo read:user user:follow');

            window.location.href = `${apiUrl}?${params}`;
      }
    },
    async created(){
        const code = new URLSearchParams(window.location.search).get("code");

        if(code){
            try{
                const responce = await fetch('https://webdev-api.loftschool.com/github', {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                        clientId, clientSecret, code
                    }),
                })

                const { token } = await responce.json();
                localStorage.setItem('token', token);
                this.$router.replace({name: "Home"})
            }catch(error){
                console.log(error)
            }
        }
    }
}
</script>

<style scoped lang="scss" src="./auth.scss">
</style>