export default [
  {
    path: '/',
    component: () => import('@/views/home/index'),
    hidden: true
  },
  {
    path: '/home', // 首页
    component: () => import('@/views/home/index'),
    hidden: true
  }
];
