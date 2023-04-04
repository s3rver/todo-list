<template>
	<div class="flex justify-between items-center text-xs text-gray-400 mt-2 pb-3 border-b">
		<div @click="$store.commit('task/doneAllTask')">تکمیل همه تسک ها</div>
		<div @click="$store.commit('task/deleteDones')">حذف تکمیل شده ها</div>
	</div>
</template>

<script>
export default {}
</script>
