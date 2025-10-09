import { createWebHistory, createRouter } from 'vue-router';

import HomeView from './HomeView.vue';
import AboutView from './AboutView.vue';

const routes = [
	{ path: '/', component: HomeView },
	{ path: '/about', component: AboutView },
	{ path: '/gallery', component: () => import('./GalleryView.vue') },
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
