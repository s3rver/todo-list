<template>
	<button
		v-wave="{
			color: colorWave || '#737e80',
			easing: 'ease-out',
			initialOpacity: !disabled && !is_loading ? 0.2 : 0,
			finalOpacity: !disabled && !is_loading ? 0.1 : 0,
		}"
		:class="[color, color && 'default', { disabled: disabled || is_loading }]"
		:type="type"
		v-bind="$attrs"
		@click="click"
	>
		<helper-spinner
			:class="{
				invisible: !is_loading,
			}"
			:color="loadingColor"
			class="!absolute inset-0 m-auto w-full"
		/>

		<span
			:class="{
				invisible: is_loading,
			}"
			class="justify-center items-center flex-1 inline-flex"
		>
			<slot></slot>
		</span>
	</button>
</template>

<script>
export default {
	props: {
		is_loading: {
			type: Boolean,
			default: false,
		},

		type: {
			default: "button",
		},

		color: {
			validator(value) {
				return ["blue"].includes(value)
			},
		},

		loadingColor: {
			default: "white",
		},

		colorWave: {
			default: false,
		},

		disabled: {
			type: Boolean,
		},
	},

	methods: {
		click($event) {
			if (!this.disabled && !this.is_loading) {
				this.$emit("click", $event)
			} else {
				$event.preventDefault()
			}
		},
	},
}
</script>

<style scoped>
.disabled {
	opacity: 0.8;
	cursor: not-allowed;
}

.default {
	@apply relative flex items-center justify-center px-8 py-2 text-white rounded-md;
}

.blue {
	@apply bg-blue-700;
}
</style>
