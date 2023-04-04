<template>
	<div class="flex flex-col gap-1">
		<div v-for="task in tasks" :key="task.id">
			<label class="group flex justify-between p-2 items-center hover:bg-gray-100 rounded-md">
				<div
					:class="{
						'line-through': task.is_done,
					}"
					class="flex gap-x-4"
				>
					<input
						:checked="task.is_done"
						class="w-5 h-5 text-red-600 bg-gray-100 border-gray-300 rounded"
						readonly
						type="checkbox"
						@change="$store.commit('task/changeStatus', task.id)"
					/>

					{{ task.title }}
				</div>

				<button
					class="invisible group-hover:visible text-xl text-red-600 px-3"
					@click="$store.commit('task/delete', task.id)"
				>
					-
				</button>
			</label>
		</div>

		<div v-if="tasks.length === 0"
		class="text-center py-10 text-gray-500">یادداشتی وجود ندارد</div>
	</div>
</template>

<script>
export default {
	computed: {
		tasks() {
			const { filter } = this.$route.query

			if (filter === "dones") {
				return this.$store.state.task.tasks.filter(task => task.is_done)
			}

			if (filter === "not_dones") {
				return this.$store.state.task.tasks.filter(task => !task.is_done)
			}

			return this.$store.state.task.tasks
		},
	},
}
</script>
