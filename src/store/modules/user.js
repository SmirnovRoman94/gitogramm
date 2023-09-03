export const user = {
    namespaced: true,

    state: {
        user: null, // информация пользователя
        errors: null,
        likes: null,
    },
    mutations: {
        set_user_info(state, payload){
            state.user = payload;
        },
        set_errors(state, payload){
            state.errors = payload;
        },
        set_user_likes(state, payload){
            state.likes = [...payload];
        },
    },
    actions: {
        async UserInfo(){
            try{
                const response = await fetch("https://api.github.com/user", {
                    headers: {
                    Authorization: `token ${localStorage.getItem("token")}`,
                    "Content-type": "application/json"
                    }
                });
                let data = await response.json();
                this.commit('user/set_user_info', data);
            }catch(error){
                this.commit('user/set_errors', 'Не удалось получить данные');
            }
        },
        async userLikes(){
            try{
                const response = await fetch("https://api.github.com/user/starred", {
                    headers: {
                    Authorization: `token ${localStorage.getItem("token")}`,
                    "Content-type": "application/json"
                    }
                });
                let data = await response.json();
                let arr = [];
                data.forEach(el => {
                    const date = el.updated_at.split("T")[0];
                    const day = date.split('-')[2];
                    const month = date.split('-')[1];
                    arr.push({
                        id: el.id,
                        user: {
                            login: el.owner.login,
                            avatar: el.owner.avatar_url
                        },
                        title: el.name,
                        text: el.description,
                        star: el.stargazers_count,
                        fork: el.forks_count,
                        comments: [],
                        date: `${day}.${month}`
                    })
                });
                this.commit('user/set_user_likes', arr);
            }catch(error){
                this.commit('user/set_errors', 'Не удалось получить данные');
            }
        },
        async dataComments(context, filter){
            try{
                const response =  await fetch(`https://api.github.com/repos/${filter.owner}/${filter.repo}/issues`, {
                    headers: {
                    Authorization: `token ${localStorage.getItem("token")}`,
                    "Content-type": "application/json"
                    }
                });
                let data = await response.json();
                return data;
            }catch(error){
                this.commit('user/set_errors', 'Не удалось получить данные');
            }
        },
        async addLike(context, filter){
            console.log(filter)

            try{
                const responce =  await fetch(`https://api.github.com/user/starred/SmirnovRoman94/notes3`, {
                    method: "PUT",
                    headers: {
                    Authorization: `token ${localStorage.getItem("token")}`,
                    "Content-type": "application/json",
                    "Content-Length": 0,
                    'X-GitHub-Api-Version': '2022-11-28'
                    }
                });
                let data = await responce.json();
                console.log(data);
            }catch(error){
                this.commit('user/set_errors', 'Не удалось получить данные');
            }
        }   
    },
    getters: {
        getUserInfo(store){
            return store.user
        },
        getUserLikes(store){
            return store.likes
        }
    }
}