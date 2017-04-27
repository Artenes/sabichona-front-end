const syncWithStore = function (state) {

	state.uuid = localStorage.getItem("sabichona.location.uuid")
	state.label = localStorage.getItem("sabichona.location.label")
	state.city = localStorage.getItem("sabichona.location.city")

}

const state = {
	
	uuid: '',
	label: '',
	city: ''

}

const mutations = {
	
	refresh(state) {

		syncWithStore(state)

	},

	change(state, payload) {

		localStorage.setItem("sabichona.location.uuid", payload.place_id)
		localStorage.setItem("sabichona.location.label", payload.formatted_address)
		localStorage.setItem("sabichona.location.city", payload.locality)

		syncWithStore(state)
		
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
