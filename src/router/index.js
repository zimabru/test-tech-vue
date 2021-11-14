import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import TablePage from "@/pages/TablePage";
import PiecePage from "@/pages/PiecePage";

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/table',
      name: 'table',
      component: TablePage
    },
    {
      path: '/piece',
      name: 'Piece',
      component: PiecePage
    }
  ]
})
