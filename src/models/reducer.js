import { init } from '@rematch/core'
import login from '@/models/login';



const rootReducer = init({
  models: {
    login
  }
})

export default rootReducer;


