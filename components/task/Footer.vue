<template>
	<div class="flex justify-between items-center text-xs text-gray-400 pt-2 border-t">
		<div>
			<span class="text-black">{{ not_done_task_count }}</span>
			<span>تسک مانده</span>
		</div>

		<div class="flex gap-x-3">
			<span :class="{ 'text-black': filter === 'all' }" @click="filter = 'all'">همه</span>
			<span :class="{ 'text-black': filter === 'not_dones' }" @click="filter = 'not_dones'"> تکمیل نشده ها </span>
			<span :class="{ 'text-black': filter === 'dones' }" @click="filter = 'dones'">تکمیل شده ها</span>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
	data() {
		return {
			filter: this.$route.query.filter || "all",
		}
	},

	computed: {
		...mapGetters({
			not_done_task_count: "task/notDoneTaskCount",
		}),
	},

	watch: {
		filter(v) {
			this.$router.replace({
				query: {
					filter: v,
				},
			})
		},
	},
}
</script>
