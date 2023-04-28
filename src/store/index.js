import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    questions: [],
    popproduct: [],
    lowproduct: [],
    busket: [],
    busketItemId: 1
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
    },
    BUSKET(state) {
      // console.log(state.busket)
      return state.busket;
    }
  },
  mutations: {
    SET_PRODUCTS_TO_BUSKET: (state, products) => {
      state.busket = products;

      // console.log(localStorage.getItem('busket'));
    },
    ADD_PRODUCT_TO_BUSKET: (state, product) => {
      product.busketId = state.busketItemId;
      console.log(state);
      console.log(state.busket);
      state.busketItemId++;
      state.busket.push(product);
      // console.log(state.busket);

      localStorage.setItem('busket', JSON.stringify(state.busket));
      // console.log(localStorage.getItem('busket'));

    },
    SET_VALUE_TO_PRODUCT_IN_BUSKET: (state, product) => {
      var newBusket = []
      state.busket.forEach((item) => {
        if (item.busketId == product.busketId){
          newBusket.push(product);
        } else {
          newBusket.push(item);
        }
      });
      state.busket = newBusket;
      // console.log(state.busket);
      localStorage.setItem('busket', JSON.stringify(state.busket));

    },
    REMOVE_PRODUCT_FROM_BUSKET: (state, product) => {
      state.busket = state.busket.filter((item) => {
        return item.busketId != product.busketId
      });
      console.log(state.busket)
      localStorage.setItem('busket', JSON.stringify(state.busket));
    },
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
    }

  },
  actions: {
    GET_PRODUCTS_FROM_API({commit}) {
      return axios('https://medbackend-production.up.railway.app/meds/getm', {
        method: "GET"
      })
      .then((products) => {
        // console.log(products.data.filter( function(item) {
        //   return item.id <= 50;
        // }));
        commit('SET_PRODUCTS_TO_STATE', products.data);
        console.log(products)
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
        // console.log('pop product: ',products.data);
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
        //  console.log('qeuestions: ', qeuestions.data);
         commit('SET_QUESTIONS_TO_STATE', qeuestions.data);
         return qeuestions;
       })
       .catch((error) => {
         console.log(error);
         return error;
       })
    },
    GET_BUSKET_FROM_LOCALSTORAGE({commit}) {
      var busketArr = localStorage.getItem('busket');

      commit('SET_PRODUCTS_TO_BUSKET', JSON.parse(busketArr));
    }
  },
  modules: {
  }
})
