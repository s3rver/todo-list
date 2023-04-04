export default ({ app, store, route }, inject) => {
	store.registerModule("hasKey", myStore)

	const HasKey = {
		timeoutAutoRemove: null,

		has(key) {
			return store.state["hasKey"].array.includes(key)
		},

		push(key) {
			if (!this.has(key) && key) {
				store.commit("hasKey/add", key)
			}
		},

		remove(key) {
			if (this.has(key)) {
				clearTimeout(this.timeoutAutoRemove)

				setTimeout(() => store.commit("hasKey/remove", key), 100)
			}
		},

		clear() {
			store.commit("hasKey/clear")
		},
	}

	const $hasKey = key => HasKey.has(key)

	$hasKey.push = key => HasKey.push(key)

	$hasKey.remove = key => HasKey.remove(key)

	$hasKey.clear = () => HasKey.clear()

	app.$hasKey = $hasKey
	inject("hasKey", $hasKey)
}

const myStore = {
	namespaced: true,

	state: () => ({
		array: [],
	}),

	mutations: {
		add(state, key) {
			state.array.push(key)
		},

		remove(state, key) {
			const index = state.array.indexOf(key)

			if (index > -1) {
				state.array.splice(index, 1)
			}
		},

		clear(state) {
			state.array = []
		},
	},
}
