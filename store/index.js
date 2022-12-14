import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import audio from '@/store/modules/audio.js';
import common from '@/store/modules/common.js';

export default new Vuex.Store({
	modules:{
		audio,
		common
	}
})