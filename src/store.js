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
    user: null
  },
  mutations: {
    addNewPlace(state, payload) {
      return state.allPlaces.push(payload)
    },
    setUser(state, payload) {
      return state.user = payload;
    }
  },
  actions: {
    addNewPlace({ commit }, payload) {
      const place = {
        title: payload.title,
        imageUrl: payload.imageUrl
      };
      commit('addNewPlace', place);
    },
    signUserUp({ commit }, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(successResponse => {
          const newUser = {
            id: successResponse.user.uid,
            addedPlaces: []
          };
          commit('setUser', newUser);
        })
        .catch(errorResponse => {
          console.log(errorResponse);
        });
    },
    signUserIn({ commit }, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(successResponse => {
          const newUser = {
            id: successResponse.user.uid,
            addedPlaces: []
          };
          commit('setUser', newUser);
        })
        .catch(errorResponse => {
          console.log(errorResponse);
        });
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
    }
  }
});
