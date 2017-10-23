/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let myheader =  require('./components/Myheader.vue');
let Myfooter =  require('./components/Myfooter.vue');

let home =  require('./components/home.vue');
let about =  require('./components/about.vue');


const routes = [
  { path: '/home', component: home },
  { path: '/about', component: about }
]

const router = new VueRouter({
	mode:'history',
  routes // short for `routes: routes`
})



const app = new Vue({

    el: '#app',
    router,
    components:{	
    	myheader,
    	Myfooter,
    }
});
