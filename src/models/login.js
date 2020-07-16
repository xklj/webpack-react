

const initState = {
  success: false
}
export default {
  namespace: 'login',
  state: initState,

  reducers: {
    status(state, payload) {
      return {
        ...state,
        success: payload
      }
    }
  },

  effects: dispatch => ({
    async fetchLogin(payload) {
      if(payload.username ==='test' && payload.password === 'admin') {
        dispatch({
          type: 'login/status',
          payload: true
        })
      }
    }
  }),
}

