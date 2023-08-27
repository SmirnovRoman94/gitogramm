import {createStore} from "vuex";
import {trandings} from "./modules/trandings"

export default createStore({
    modules: {
        trandings
    }
})