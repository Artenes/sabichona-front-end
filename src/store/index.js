import Vue from 'vue'
import Vuex from 'vuex'
import location from './location'
import notification from './notification'

Vue.use(Vuex)

export default new Vuex.Store({

	modules: {

		location,
		notification
		
	}

})
