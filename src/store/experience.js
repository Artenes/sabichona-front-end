const syncWithStore = function (state) {

	state.sawIntro = localStorage.getItem("sabichona.experience.sawIntro")

}

const state = {
	
	sawIntro: false

}

const mutations = {
	
	refresh(state) {

		syncWithStore(state)

	},

	seeIntro(state) {

		localStorage.setItem("sabichona.experience.sawIntro", true)

		syncWithStore(state)
		
	}

}

export default {

	namespaced: true,
	state,
	mutations

}
