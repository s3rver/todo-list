export const state = () => ({
	tasks: JSON.parse(localStorage.getItem("tasks")) || [],
})

export const getters = {
	notDoneTaskCount(state) {
		return state.tasks.filter(task => !task.is_done).length
	},
}

export const mutations = {
	add(state, title) {
		state.tasks.push({
			id: Math.floor(Math.random() * 9999999),
			title,
			is_done: false,
		})
	},

	changeStatus(state, id) {
		state.tasks = state.tasks.map(item => {
			if (item.id === id) {
				item.is_done = !item.is_done
			}

			return item
		})
	},

	deleteDones(state) {
		state.tasks = state.tasks.filter(task => !task.is_done)
	},

	delete(state, id) {
		state.tasks = state.tasks.filter(task => task.id !== id)
	},

	doneAllTask(state) {
		state.tasks = state.tasks.map(task => {
			task.is_done = true

			return task
		})
	},
}

export const actions = {}
