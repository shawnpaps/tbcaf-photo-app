<template>
	<div class="photo-gallery">
		<script src="https://embedding.pic-time.com/pictures/scripts/compiled/artgalleryembed.js"></script>
		<iframe
			frameborder="0"
			id="pictimeIntegration"
			src="https://photos.sudocreate.studio/client?headless=true"
			style="width: 100%; height: 100%"
		></iframe>
	</div>
</template>

<script>
export default {
	name: 'PhotoGallery',
};
</script>
