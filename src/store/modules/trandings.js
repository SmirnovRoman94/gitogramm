import * as api from '../../api';

export const trandings = {
    namespaced: true,

    state: {
        dataItems: null, // получяаем топ 10 репозиторий
        errors: null,
        data: {} // запрашиваем данные реадми каждого репозитория в отдельности
    },
    mutations: {
        set_trandings_data(state, payload){
            state.dataItems = payload;
        },
        set_errors(state, payload){
            state.errors = payload;
        },
        set_trandings_item(state, payload){
            console.log(payload)
            state.data = payload;
        }
    },
    actions: {
        async fetchTrandings({commit}) {
            try {
                const { data } = await api.trandings.getTrandings();
                commit('set_trandings_data', data.items);
            } catch (error) {
                commit('set_errors', 'Не удалось получить данные');
            }
        },
        async fetchTrandingsItem(context, filter){
            try{
                const { data } = await api.itemTrandings.getTrandings(filter.login, filter.name);
                this.commit('trandings/set_trandings_item', {avatar: filter.avatar, login: filter.login, title:filter.name,  data: data, loading: false});
            }catch(error){
                this.commit('trandings/set_errors', 'Не удалось получить данные');
            }
        }
    },
    getters: {
        getDataTrandings(store){
            return store.dataItems
        }
    }
}