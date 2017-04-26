const state = {
	
	uuid: '',
	label: ''

}

const mutations = {
	
	refresh(state) {

		state.uuid = localStorage.getItem("sabichona.location.uuid")
		state.label = localStorage.getItem("sabichona.location.label")

	},

	change(state, payload) {

		localStorage.setItem("sabichona.location.uuid", payload.place_id)
		localStorage.setItem("sabichona.location.label", payload.formatted_address)

		state.uuid = localStorage.getItem("sabichona.location.uuid")
		state.label = localStorage.getItem("sabichona.location.label")
		
	}

}

const getters = {

	hasLocation(state) {

		return state.uuid ? true : false

	}

}

export default {

	namespaced: true,
	state,
	mutations,
	getters

}
