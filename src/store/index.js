import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    questions: [],
    popproduct: [],
    lowproduct: [],
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    POPPRODUCTS(state) {
      return state.popproduct;
    },
    LOWPRODUCTS(state) {
      return state.lowproduct;
    },
    QUESTIONS(state) {
      return state.questions;
    }
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_POPPRODUCTS_TO_STATE: (state, products) => {
      state.popproduct = products;
    },
    SET_LOWPRODUCTS_TO_STATE: (state, products) => {
      state.lowproduct = products;
    },
    SET_QUESTIONS_TO_STATE: (state, questions) => {
      state.questions = questions;
    },
    SET_FILTERED_BY_COST_PRODUCTS: (state, fval) => {
      // console.log(fval);
      var lowP = fval.fmin < fval.fmax ? fval.fmin : fval.fmax;
      var uppP = fval.fmin > fval.fmax ? fval.fmin : fval.fmax;

      // console.log(lowP, ' sd ', uppP)
      // console.log(lowP, ' ', uppP);
      var newArray = [];
      state.products.forEach((item) => {
        // console.log(item)
        if (item.price &&
            typeof(parseInt(item.price.split(' ').join(''))) == 'number' &&
            parseInt(item.price.split(' ').join('')) >= lowP &&
            parseInt(item.price.split(' ').join('')) <= uppP) {
              newArray.push(item);
            }
      });
      // console.log(newArray)
      state.products = newArray;
    }

  },
  actions: {
    GET_PRODUCTS_FROM_API({commit}) {
      return axios('https://medbackend-production.up.railway.app/meds/getm', {
        method: "GET"
      })
      .then((products) => {
        console.log(products.data.filter( function(item) {
          return item.id <= 50;
        }));
        commit('SET_PRODUCTS_TO_STATE', products.data.filter( function(item) {
          return item.id <= 50;
        }));
        return products;
      })
      .catch((error) => {
        console.log(error);
        return error;
      })
    },
    GET_POPPRODUCTS_FROM_API({commit}) {
      return axios('https://medbackend-production.up.railway.app/meds/top4', {
        method: "GET"
      })
      .then((products) => {
        console.log('pop product: ',products.data);
        commit('SET_POPPRODUCTS_TO_STATE', products.data);
        return products;
      })
      .catch((error) => {
        console.log(error);
        return error;
      })
    },
    GET_LOWPRODUCTS_FROM_API({commit}) {
      return axios('https://medbackend-production.up.railway.app/meds/topd', {
        method: "GET"
      })
      .then((products) => {
        console.log('pop product: ',products.data);
        commit('SET_LOWPRODUCTS_TO_STATE', products.data);
        return products;
      })
      .catch((error) => {
        console.log(error);
        return error;
      })
    },
    GET_QUESTIONS_FROM_API({commit}) {
      return axios('https://medbackend-production.up.railway.app/q/getAll', {
         method: "GET"
      })
       .then((qeuestions) => {
         console.log('qeuestions: ', qeuestions.data);
         commit('SET_QUESTIONS_TO_STATE', qeuestions.data);
         return qeuestions;
       })
       .catch((error) => {
         console.log(error);
         return error;
       })
   },
    FILTER_PRODUCTS_WITH_COST({commit}, fval) {
      console.log(fval.fmin, ' ', fval.fmax)
      
      commit('SET_FILTERED_BY_COST_PRODUCTS', fval);

    }
  },
  modules: {
  }
})
