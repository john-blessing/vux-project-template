import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Hello',
    meta: {
      requiredAuth: false
    },
    component(resolve) {
      require.ensure([], _ => resolve(require('../views/HelloFromVux.vue')), "home")
    }
  },{
    path: '*',
    redirect: '/'
  }],
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return {
      x: 0,
      y: 0
    }
  }
})
