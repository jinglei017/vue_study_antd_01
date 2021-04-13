import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let store = new Vuex.Store({
    state: { //存储数据
        loginUser: ''
    },
    getters: { // 获取数据状态
        loginUser(state) {
            return state.loginUser || sessionStorage.getItem('loginuser')
        }
    },
    mutations: { // 更改数据状态
        setLoginUser(state, data) {
            sessionStorage.setItem("loginuser", data)
            state.loginUser = data
        },
        removeLoginUser(state) {
            sessionStorage.removeItem("loginuser")
            state.loginUser = ''
        }
    },
    actions: {

    }
})

export default store