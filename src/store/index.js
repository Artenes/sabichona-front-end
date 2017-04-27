import Vue from 'vue'
import Vuex from 'vuex'
import location from './location'
import notification from './notification'
import experience from './experience'

Vue.use(Vuex)

export default new Vuex.Store({

	modules: {

		location,
		notification,
		experience
		
	}

})
