<template>
	<validation-provider v-slot="{ errors }" :rules="rules" class="w-full relative" tag="div">
		<div
			:class="{
				disabled: $attrs.disabled,
			}"
			class="rounded-md overflow-hidden"
		>
			<input
				:id="name"
				ref="input"
				:class="classes"
				:name="name"
				:type="type"
				:value="inputHandler && inputHandler.get()"
				class="px-3 py-2 outline-none w-full"
				v-bind="{ placeholder: ' ', ...$attrs }"
				v-on="{ ...$listeners, input }"
			/>
		</div>

		<helper-input-error v-if="errorBoxIsVisible" :errors="errors" />
	</validation-provider>
</template>

<script>
import { inputHandler } from "@/utils"
import { ValidationProvider } from "vee-validate"

export default {
	components: { ValidationProvider },

	inheritAttrs: false,

	props: {
		value: {},

		classes: {},

		name: {
			type: String,
			required: true,
		},

		rules: {
			type: String,
		},

		errorBoxIsVisible: {
			type: Boolean,
			default: true,
		},

		tools: {
			type: String,
			default: "",
		},
	},

	data() {
		return {
			type: this.$attrs.type || "text",
			inputHandler: null,
		}
	},

	methods: {
		focus() {
			this.$refs.input.focus()
		},

		input({ target }) {
			this.inputHandler.set(target.value)

			this.$emit("input", this.inputHandler.value)

			setTimeout(() => this.focus())
		},
	},

	watch: {
		value: {
			handler(value) {
				this.inputHandler = new inputHandler({ value, type: this.type }, this.tools)

				this.inputHandler.set(value)

				this.type = this.inputHandler.type
			},

			immediate: true,
		},

		"$attrs.type"(type) {
			this.type = type
		},
	},
}
</script>

<style scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
	-webkit-box-shadow: 0 0 0 30px white inset !important;
}
</style>
