import Vue from 'vue';
import VueRouter from 'vue-router';
import 'src/assets/docs.css';
import 'node_modules/highlight.js/styles/github-gist.css';
import App from './App';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: routes.map((route) => {
    route.path = `/postcss-salad${route.path}`;
    return route;
  }),
  linkActiveClass: 'active',
});

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
