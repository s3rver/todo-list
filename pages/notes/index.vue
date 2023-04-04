<template>
	<div class="h-full w-full flex items-center justify-center">
		<div class="bg-white shadow-lg rounded-xl p-3 w-[500px]">
			<task-header />
			<task-toolbar />
			<task-content />
			<task-footer />
		</div>
	</div>
</template>

<script>
export default {
	auth: "guest",

	watch: {
		"$store.state.task.tasks"(tasks) {
			localStorage.setItem("tasks", JSON.stringify(tasks))
		},
	},
}
</script>
