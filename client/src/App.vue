<template>
	<div id="app" class="text-center p-5 relative">
		<div
			className="absolute inset-0 -z-10 min-h-screen blur-xl bg-gradient-to-b from-orange-200 to-orange-950 animate-[pulse_10s_ease-in-out_infinite]"
		></div>

		<h1 class="text-3xl font-bold mb-4">Hello App!</h1>
		<p class="mb-5">
			<strong>Current route path:</strong> {{ $route.fullPath }}
		</p>
		<nav class="my-5 space-x-2">
			<RouterLink
				to="/"
				class="inline-block px-5 py-2 bg-emerald-500 text-white no-underline rounded-md transition-colors hover:bg-emerald-600 active:bg-slate-700"
				active-class="!bg-slate-700"
			>
				Go to Home
			</RouterLink>
			<RouterLink
				to="/about"
				class="inline-block px-5 py-2 bg-emerald-500 text-white no-underline rounded-md transition-colors hover:bg-emerald-600 active:bg-slate-700"
				active-class="!bg-slate-700"
			>
				Go to About
			</RouterLink>
		</nav>
		<main>
			<RouterView />
		</main>
	</div>
</template>
