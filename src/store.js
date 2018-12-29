import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allPlaces: [
      {
        imageUrl:
          "https://images.musement.com/cover/0002/42/view-on-manhattan-at-night-new-york-usa-jpg_header-141511.jpeg",
        id: "test1"
      },
      {
        imageUrl:
          "https://www.thelocal.fr/userdata/images/article/03820becd623391f4496c8dbdc6eb9d7b8be5525d96441a80739240ef79b1a0b.jpg",
        id: "test2"
      }
    ],
    user: null,
    isLoading: false,
    error: null,
  },
  mutations: {
    addNewPlace(state, payload) {
      return state.allPlaces.push(payload)
    },
    setUser(state, payload) {
      return state.user = payload;
    },
    setLoading(state, payload) {
      return state.isLoading = payload;
    },
    setError(state, payload) {
      return state.error = payload;
    },
    clearError(state) {
      return state.error = null;
    }
  },
  actions: {
    addNewPlace({ commit }, payload) {
      commit('setLoading', true);
      commit('clearError');
      const place = {
        title: payload.title,
        imageUrl: payload.imageUrl
      };
      commit('addNewPlace', place);
    },
    signUserUp({ commit }, payload) {
      commit('setLoading', true);
      commit('clearError');
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(successResponse => {
          commit('setLoading', false);
          const newUser = {
            id: successResponse.user.uid,
            addedPlaces: []
          };
          commit('setUser', newUser);
        })
        .catch(errorResponse => commit('setError', errorResponse.message));
    },
    signUserIn({ commit }, payload) {
      commit('setLoading', true);
      commit('clearError');
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(successResponse => {
          commit('setLoading', false);
          const newUser = {
            id: successResponse.user.uid,
            addedPlaces: []
          };
          commit('setUser', newUser);
        })
        .catch(errorResponse => commit('setError', errorResponse.message));
    },
    clearError({commit}) {
      commit('clearError');
    }
  },
  getters: {
    allPlaces(state) {
      return state.allPlaces;
    },
    singlePlace(state) {
      return placeId => state.allPlaces.find(data => data.id === placeId);
    },
    user(state) {
      return state.user;
    },
    loading(state) {
      return state.isLoading;
    },
    error(state) {
      return state.error;
    }
  }
});
