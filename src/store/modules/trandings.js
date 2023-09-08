import * as api from '../../api';

export const trandings = {
    namespaced: true,

    state: {
        dataItems: null, // получяаем топ 10 репозиторий
        errors: null,
        data: {}, // запрашиваем данные реадми каждого репозитория в отдельности
        followData: null
    },
    mutations: {
        set_trandings_data(state, {data, filter}){
            let arr = [];
            data.items.forEach(el => {
                let findItem = filter.findIndex(elem => elem == el.id);
                if(findItem !== -1){
                    el.follow = true 
                }else{
                    el.follow = false
                }
                arr.push(el)
            });
            state.dataItems = arr;
        },
        set_errors(state, payload){
            state.errors = payload;
        },
        set_trandings_item(state, payload){
            console.log(payload)
            state.data = payload;
        },
        set_follow_trandings_data(state, payload){
            state.followData = payload;
        }
    },
    actions: {
        async fetchTrandings(context, filter) {
            try {
                const { data } = await api.trandings.getTrandings();
                
                this.commit('trandings/set_trandings_data', {data, filter});
            } catch (error) {
                this.commit('trandings/set_errors', 'Не удалось получить данные');
            }
        },
        async fetchTrandingsItem(context, filter){
            try{
                const { data } = await api.itemTrandings.getTrandings(filter.login, filter.name);
                console.log(data)
                this.commit('trandings/set_trandings_item', {avatar: filter.avatar, login: filter.login, title:filter.name,  data: data, loading: false, id: filter.id, follow: filter.follow});
            }catch(error){
                this.commit('trandings/set_errors', 'Не удалось получить данные');
            }
        },

        async fetchFollowTrand(){
            try{
                const { data } = await api.followTrend.getTrandings();
                this.commit('trandings/set_follow_trandings_data', data.items);
            }catch(error){
                this.commit('trandings/set_errors', 'Не удалось получить данные');
            }
        }
    },
    getters: {
        getDataTrandings(store){
            return store.dataItems
        },
        getDataFollowTrandings(store){
            return store.followData
        }
    }
}