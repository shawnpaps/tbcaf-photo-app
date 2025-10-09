<template>
	<div class="p-5">
		<h2 class="text-2xl font-semibold mb-4">Home Page</h2>
		<p class="mb-6 text-lg">Welcome to the TBCAF Photo App!</p>
		<HelloWorld msg="Vue + Vite + Vue Router + Tailwind CSS v4" />
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
	name: 'HomeView',
	components: {
		HelloWorld,
	},
};
</script>
