import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
  state : {
    userInfo : ""
  },
  mutations : {
    changeUserInfo(state,userInfo){
      state.userInfo = userInfo
    }
  } 
})