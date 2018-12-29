import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Signin from './views/Users/Signin.vue';
import Signup from './views/Users/Signup.vue';
import Profile from './views/Users/Profile.vue';
import AddPlace from './views/WorldPlaces/AddPlace.vue';
import AllPlaces from './views/WorldPlaces/AllPlaces.vue';
import DetailsPlace from './views/WorldPlaces/DetailsPlace.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/places/add',
      name: 'addplace',
      component: AddPlace
    },
    {
      path: '/places/all',
      name: 'allplaces',
      component: AllPlaces
    },
    {
      path: '/places/details/:id',
      name: 'detailsplace',
      props: true,
      component: DetailsPlace
    }
    
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
  mode: 'history'
});
