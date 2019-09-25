import Vue from 'vue'
import Vuex from 'vuex'
import testLinkCreator from './modules/testLinkCreator.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        testLinkCreator
    }
});