import {createStore} from "vuex";
import axios from "axios";
import { userMutations, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../mutations/user";

const store =  createStore({
    state(){
        return {
            user : JSON.parse(window.sessionStorage.getItem("user")) === null ? null : JSON.parse(window.sessionStorage.getItem("user")).user,
            loginError : null,
            loggingIn : false

        }
    },
    mutations : {
        ...userMutations,
        logoutUser(state){
            state.user = null;
            window.sessionStorage.removeItem("user");
        }
    },
    getters : {
        getUser(){
            return JSON.parse(window.sessionStorage.getItem("user"));
        }
    },
    actions : {
        async loginUser(state, payload){
            this.commit(USER_LOGIN_REQUEST);
            try {
                const {data} = await axios.post("http://localhost:5000/login", payload );
                this.commit(USER_LOGIN_SUCCESS, data);
            } catch (error) {
                this.commit(USER_LOGIN_FAIL, error);
            }

        }
    }
});



export default store;