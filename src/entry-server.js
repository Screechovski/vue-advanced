import getApp from './app.js';
import About from './views/About';
import Home from './views/Home';
import App404 from './views/404';

async function getServerApp({url}){
	let { app, router } = getApp();

	if (url === '/') {
		await router.push({
			path: '/',
			component: Home
		})
	} else if (url === '/about') {
		await router.push({
			path: '/about',
			component: About
		})
	}

	return app;
}

export default getServerApp;