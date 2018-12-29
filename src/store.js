import Vue from 'vue';
import Vuex from 'vuex';

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
    user: {
      id: 'user1',
      addedPlaces: ['vietnam']
    }
  },
  mutations: {
    addNewPlace(state, payload) {
      return state.allPlaces.push(payload)
    }
  },
  actions: {
    addNewPlace({ commit }, payload) {
      const place = {
        title: payload.title,
        imageUrl: payload.imageUrl
      }
      commit('addNewPlace', place);
    }
  },
  getters: {
    allPlaces(state) {
      return state.allPlaces;
    },
    singlePlace(state) {
      return placeId => state.allPlaces.find(data => data.id === placeId);
    }
  }
});
