import { defineConfig } from 'umi';


// 用于设置路由
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/demo', component: '@/pages/demo' },
  ],
  fastRefresh: {},
});
