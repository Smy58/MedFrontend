import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
	// Данные которые хранятся на сайте полученные с API и localstorage
	state: {
		products: [], // Продукты из каталога
		questions: [], // Популярные вопросы и ответы
		popproduct: [], // Популярные продукты
		lowproduct: [], // Бюджетные продукты
		busket: [], // Продукты в корзине
		busketItemId: 1, // последний добавленный продукт в корзине
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
	// Установление, удаление и изменения данных
	mutations: {
		// Устанавливает продукты в корзину
		SET_PRODUCTS_TO_BUSKET: (state, products) => {
			state.busket = products;

			// console.log(localStorage.getItem('busket'));
		},
		// Добавляет продукт в корзину
		ADD_PRODUCT_TO_BUSKET: (state, product) => {
			product.busketId = state.busketItemId;
			// console.log(state);
			// console.log(state.busket);
			state.busketItemId++;
			state.busket.push(product);
			// console.log(state.busket);

			localStorage.setItem('busket', JSON.stringify(state.busket));
			// console.log(localStorage.getItem('busket'));

		},
		// Меняет значение продукта в корзине
		SET_VALUE_TO_PRODUCT_IN_BUSKET: (state, product) => {
			var newBusket = []
			state.busket.forEach((item) => {
				if (item.busketId == product.busketId) {
					newBusket.push(product);
				} else {
					newBusket.push(item);
				}
			});
			state.busket = newBusket;
			// console.log(state.busket);
			localStorage.setItem('busket', JSON.stringify(state.busket));

		},
		// Удаляет продукт с корзины
		REMOVE_PRODUCT_FROM_BUSKET: (state, product) => {
			state.busket = state.busket.filter((item) => {
				return item.busketId != product.busketId
			});
			// console.log(state.busket)
			localStorage.setItem('busket', JSON.stringify(state.busket));
		},
		// Устанавливает продукты в каталог
		SET_PRODUCTS_TO_STATE: (state, products) => {
			state.products = products;
		},
		// Устанавливает популярные продукты 
		SET_POPPRODUCTS_TO_STATE: (state, products) => {
			state.popproduct = products;
		},
		// Устанавливает бюджетные продукты 
		SET_LOWPRODUCTS_TO_STATE: (state, products) => {
			state.lowproduct = products;
		},
		// Устанавливает вопросы
		SET_QUESTIONS_TO_STATE: (state, questions) => {
			state.questions = questions;
		}

	},
	// Работа с API и localstorage
	actions: {
		// Получения продуктов с API
		GET_PRODUCTS_FROM_API({ commit }) {
			return axios('https://medback-production.up.railway.app/meds/getm', {
				method: "GET"
			})
				.then((products) => {
					// console.log(products.data.filter( function(item) {
					//   return item.id <= 50;
					// }));
					commit('SET_PRODUCTS_TO_STATE', products.data);
					// console.log(products)
					return products;
				})
				.catch((error) => {
					console.log(error);
					return error;
				})
		},
		// Получения популярных продуктов с API
		GET_POPPRODUCTS_FROM_API({ commit }) {
			return axios('https://medback-production.up.railway.app/meds/top4', {
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
		// Получения бюджетных продуктов с API
		GET_LOWPRODUCTS_FROM_API({ commit }) {
			return axios('https://medback-production.up.railway.app/meds/topd', {
				method: "GET"
			})
				.then((products) => {
					console.log('pop product: ', products.data);
					commit('SET_LOWPRODUCTS_TO_STATE', products.data);
					return products;
				})
				.catch((error) => {
					console.log(error);
					return error;
				})
		},
		// Получения вопросов и ответов с API
		GET_QUESTIONS_FROM_API({ commit }) {
			return axios('https://medback-production.up.railway.app/q/getAll', {
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
		// Отправка заказа
		POST_ORDER({ commit }, order) {
			console.log(order)

			return axios.post('https://medback-production.up.railway.app/orders/save',
				{
					customer_Firstname: order.name,
					phone: order.phone,
					address: order.address,
					date: order.date,
					time: order.time,
					optional: order.optional,
					products: order.busket,
					payment: order.payment,
					delivery: order.delivery,
					totalCost: order.totalCost
				}
			)
				.then((res) => {
					//  console.log('qeuestions: ', qeuestions.data);
					console.log(res);
					return res.data.id;
				})
				.catch((error) => {
					console.log(error);
					return error;
				})
		},
		// Отправка обратной связи клиента
		POST_INFO({ commit }, info) {
			console.log(info)
			return axios.post('https://medback-production.up.railway.app/cons/saveCons',
				{
					c_name: info.name,
					phone: info.phone,
					questions: info.info

				}
			)
				.then((res) => {
					//  console.log('qeuestions: ', qeuestions.data);
					console.log(res);
					return res;
				})
				.catch((error) => {
					console.log(error);
					return error;
				})
		},
		// Получения продуктов по поисковику с API
		GET_SEARCH_PRODUCTS({ commit }, words) {
			console.log(words)
			return axios.get('https://medback-production.up.railway.app/meds/search',
				{
					params: { name: words }
				}
			)
				.then((res) => {
					//  console.log('qeuestions: ', qeuestions.data);
					commit('SET_PRODUCTS_TO_STATE', res.data);
					console.log(res.data);
					return res;
				})
				.catch((error) => {
					console.log(error);
					return error;
				})
		},
		// Получения продуктов с localstorage
		GET_BUSKET_FROM_LOCALSTORAGE({ commit }) {
			var busketArr = localStorage.getItem('busket');

			if (busketArr) {
				commit('SET_PRODUCTS_TO_BUSKET', JSON.parse(busketArr));
			}

		}
	},
	modules: {
	}
})
