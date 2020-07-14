import { types } from "node-sass";

const initState = {
  data: {}
}
// export default {
//   nameSpace: 'login',
//   state: initState,
//   effect: dispatch => ({
//     // async fetchLogin(payload) {
//     //   console.log(payload)
//     //   // dispatch({
        
//     //   // })
//     // }
//   })
// }

function login(state = initState,action) {
  // switch(action.type) {
  //   case types.fetchLogin: 
  //    return { data: {a:1}}

  //   default: return state
  // }
  return state;
}

export default login