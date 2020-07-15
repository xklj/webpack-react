

const initState = {
  data: {}
}
export default {
  namespace: 'login',
  state: initState,

  reducers: {
    init(state) {
      return {
        state: initState
      }
    }
  },

  effects: dispatch => ({
    async fetchLogin(payload) {
      console.log(payload)
      this.init(1)
    }
  }),
}

