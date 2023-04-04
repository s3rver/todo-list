<template>
	<div class="flex flex-col bg-[#f1f3f6] h-screen w-screen">
		<lay-header />

		<div class="flex-1">
			<nuxt />
		</div>
	</div>
</template>

<script>
export default {
	name: "default",

	head: {
		bodyAttrs: {
			dir: "rtl",
			class: "overflow-hidden",
		},
	},
}
</script>
