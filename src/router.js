import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home.vue';
import About from './views/about.vue';
import Projects from './views/projects.vue';
import Contact from './views/contact.vue';
import Experience from './views/experience.vue';
import Presentation from './views/presentation.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
          path: '/experience',
          name: 'experience',
          component: Experience
        },
        {
          path: '/presentation',
          name: 'presentation',
          component: Presentation
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/grub',
            beforeEnter() {
              window.open('https://www.grubyxe.ca/')
            },
        },
        {
            path: '/gitgrub',
            beforeEnter() {
              window.open('https://github.com/scw528/grub');
            },
        },
        {
            path: '/gitPBB',
            beforeEnter() {
              window.open('https://github.com/scw528/PBB');
            },
        },
        {
            path: '/PBB',
            beforeEnter() {
              window.open('https://pbbyoga-2872f.web.app/');
            },
        },
        {
            path: '/gitRUNNR',
            beforeEnter() {
              window.open('https://github.com/scw528/ParcelDelivery');
            },
        },
        {
            path: '/RUNNR',
            beforeEnter() {
              window.open('https://vueexample-85e2b.firebaseapp.com/');
            },
        },
    ],
    mode: 'history',
})