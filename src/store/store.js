import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const axios = require('axios');
const url_search = "https://api.punkapi.com/v2/beers";

export default new Vuex.Store({
    state: {
        favorites: [],
        beers: []
    },
    mutations: {
        search(state, item) {
            let params = {
                beer_name: item
            }
            axios.get(url_search, {
                params
            }).then((response) => {
                state.beers = response.data
            })
        },
        addFavorite(state, payload) {
            state.favorites.push(payload)
            console.log(state.favorites)
        },
        removeFavorite(state, index) {
            state.favorites.splice(index, 1)
        }
    },
    actions: {
        addFavorite: ({
            commit
        }) => commit('addFavorite')
    },
    getters: {
        getAllBeers: state => {
            axios.get(url_search).then((response) => {
                state.beers = response.data
            });

            return state.beers;
        }
    }
});