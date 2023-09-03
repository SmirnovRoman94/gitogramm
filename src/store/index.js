import {createStore} from "vuex";
import {trandings} from "./modules/trandings"
import {user} from "./modules/user"

export default createStore({
    modules: {
        trandings,
        user
    }
})