import Login from '../pages/login/index.js';
import Demo1 from '../pages/function/demo1/index.jsx';


const routerConfig = [
  {
    path: '/login',
    name: '登录',
    exact: true,
    component: Login
  },
  {
    path: '/demo1',
    name: 'demo1',
    exact: true,
    component: Demo1
  },
  { path: "/", exact: true, redirect: "/login" },
]

export default routerConfig;