<template>
	<validation-observer ref="validation" v-slot="{ handleSubmit, valid }" tag="div">
		<form :class="classes" :style="styles" @submit.prevent="submitted($event, handleSubmit, valid)">
			<slot></slot>
		</form>
	</validation-observer>
</template>

<script>
import { ValidationObserver } from "vee-validate"

export default {
	components: {
		ValidationObserver,
	},

	props: {
		onSubmit: {
			type: Function,
			required: true,
		},

		classes: [String],

		styles: [String, Object],
	},

	methods: {
		submitted(e, handleSubmit, valid) {
			handleSubmit(this.onSubmit)

			if (!valid) {
				const el = document.querySelector(".input-message-error.has-error:first-of-type")

				if (el) {
					el.scrollIntoView({
						behavior: "smooth",
					})
				}
			}
		},

		addError(obj) {
			this.$refs.validation.setErrors(obj)
		},

		submit() {
			return this.$refs.validation.validate()
		},

		reset() {
			this.$refs.validation.reset()
		},
	},
}
</script>
