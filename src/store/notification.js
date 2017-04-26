const state = {
	
	isVisible: false,
	content: ''

}

const mutations = {
	
	notify(state, payload) {

		state.isVisible = true
		state.content = payload.content

		if (payload.timeout)
			setTimeout(function () { state.isVisible = false}, 3000)

	}

}

export default {

	namespaced: true,
	state,
	mutations

}
