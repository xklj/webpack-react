import Login from '../pages/login/index.js';
import Demo1 from '../pages/function/demo1/index.jsx';
import Layout from '@/components/Layout/index.jsx';
import Home from '@/pages/home/index.jsx';
// const routerConfig = [
//   {
//     path: '/login',
//     name: '登录',
//     exact: true,
//     component: Login
//   },
//   {
//     path: '/demo1',
//     name: 'demo1',
//     exact: true,
//     component: Demo1
//   },
//   { path: "/", exact: true, redirect: "/login" },
// ]
const routerConfig = [
  {
    path: '/login',
    name: '登录',
    exact: true,
    component: Login
  },
  {
    path: '/function',
    component: Layout,
    childRoutes: [
      {
        path: '/function/demo1',
        name: 'demo1',
        exact: true,
        component: Demo1
      },
      {
        path: '/function/home',
        name: 'home',
        exact: true,
        component: Home
      }
    ]
  },
  { path: "/", exact: true, redirect: "/login" },
]

export default routerConfig;