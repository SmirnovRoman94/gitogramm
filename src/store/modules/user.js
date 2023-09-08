export const user = {
    namespaced: true,

    state: {
        user: null, // информация пользователя
        errors: null,
        likes: null,
        likesIds: null,
    },
    mutations: {
        set_user_info(state, payload){
            state.user = payload;
        },
        set_errors(state, payload){
            state.errors = payload;
        },
        set_user_likes(state, {arr, arrIds}){
            console.log(arr, arrIds)
            state.likes = [...arr];
            state.likesIds = [...arrIds]
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
                let arrIds = [];
                data.forEach(el => {
                    const date = el.updated_at.split("T")[0];
                    const day = date.split('-')[2];
                    const month = date.split('-')[1];
                    arrIds.push(el.id);
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
                    });
                   
                });
                this.commit('user/set_user_likes', {arr, arrIds});
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
                const responce =  await fetch(`https://api.github.com/user/starred/${filter.owner}/${filter.repo}`, {
                    method: "PUT",
                    headers: {
                        Authorization: `token ${localStorage.getItem("token")}`,
                        "X-GitHub-Api-Version": '2022-11-28',
                        Accept: "application/vnd.github+json"
                    }
                });
                if(responce.status === 204){
                    this.dispatch("user/userLikes");
                    return true


                }
            }catch(error){
                this.commit('user/set_errors', 'Не удалось получить данные');
            }
        },
        async deleteLike(context, filter){
            console.log(filter) 

            try{
                const responce =  await fetch(`https://api.github.com/user/starred/${filter.owner}/${filter.repo}`, {
                    method: "DELETE",
                    headers: {
                    Authorization: `token ${localStorage.getItem("token")}`,
                    'X-GitHub-Api-Version': '2022-11-28'
                    }
                });
                if(responce.status === 204){
                    this.dispatch("user/userLikes");
                    return false
                }
            }catch(error){
                this.commit('user/set_errors', 'Не удалось получить данные');
            }
        },
        
        async followItem(context, filter){
            console.log(filter)
            try{
                const responce =  await fetch(`https://api.github.com/user/following/${filter}`, {
                    method: "PUT",
                    headers: {
                    Authorization: `token ${localStorage.getItem("token")}`,
                    'X-GitHub-Api-Version': '2022-11-28'
                    }
                });
                if(responce.status === 204){
                    return true
                }
            }catch(error){
                this.commit('user/set_errors', 'Не удалось получить данные');
            }
        },

        async unfollowItem(context, filter){
            try{
                const responce =  await fetch(`https://api.github.com/user/following/${filter}`, {
                    method: "DELETE",
                    headers: {
                    Authorization: `token ${localStorage.getItem("token")}`,
                    'X-GitHub-Api-Version': '2022-11-28'
                    }
                });
                if(responce.status === 204){
                    return false
                }
            }catch(error){
                this.commit('user/set_errors', 'Не удалось получить данные');
            }
        },

        async checkFollow(context, filter){
            console.log(filter)
            try{ 
                const res = await fetch(`https://api.github.com/user/following/${filter}`, {
                    method: "GET",
                    headers: {
                        Authorization: `token ${localStorage.getItem("token")}`,
                        'X-GitHub-Api-Version': '2022-11-28'
                    } 
                });
                if(res.status === 204){
                    return true
                }
                if(res.status === 404){
                    return false
                }
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
        },
        getUserLikesIds(store){
            return store.likesIds
        }
    }
}