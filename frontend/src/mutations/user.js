export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";




export const userMutations = {
    [USER_LOGIN_REQUEST](state){
        state.loggingIn  = true;
        state.loginError = null;
    },
    [USER_LOGIN_SUCCESS](state,user){
        state.loggingIn = false;
        state.user = user;
        window.sessionStorage.setItem("user", JSON.stringify({user : user}));
        location.reload();

    },
    [USER_LOGIN_FAIL](state,error){
        state.loggingIn = false;
        state.loginError = error.response.data.error || error;
    }
}