<template>
	<div class="p-5">
		<h2 class="text-2xl font-semibold mb-4">Gallery</h2>
		<p class="mb-4">
			This is the TBCAF Photo Application built with Vue.js and Vite.
		</p>
		<p class="mb-4">Features coming soon:</p>

		<ul class="text-left max-w-sm mx-auto space-y-2">
			<li class="flex items-center">
				<span class="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
				Photo gallery
			</li>
			<li class="flex items-center">
				<span class="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
				Upload functionality
			</li>
			<li class="flex items-center">
				<span class="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
				Photo management
			</li>
		</ul>
		<PhotoGallery />
	</div>
</template>

<script>
import PhotoGallery from './components/PhotoGallery.vue';

export default {
	name: 'GalleryView',
};
</script>
