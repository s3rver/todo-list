<template>
	<div class="flex items-center bg-gray-100 rounded-xl overflow-hidden">
		<app-input
			v-model="form.title"
			:error-box-is-visible="false"
			classes="bg-gray-100"
			name="task"
			placeholder="متن خود را تایپ نمایید..."
			@keyup.enter="addTask"
		/>

		<button v-if="form.title" class="text-xl px-4" @click="addTask">+</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			form: {
				title: "",
			},
		}
	},

	methods: {
		addTask() {
			if (this.form.title === "") {
				return
			}

			this.$store.commit("task/add", this.form.title)

			this.form.title = ""
		},
	},
}
</script>
