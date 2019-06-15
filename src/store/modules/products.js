import Vue from 'vue';

export default {
    namespaced: true,
    state: {
        products: []
    },
    getters: {
        products(state){
            return state.products;
        },
        itemsMap(state){
            let itemsMap = [];

            for(let i = 0; i < state.products.length; i++) {
                let product = state.products[i];
                itemsMap[product.id_product] = product;
            }

            return itemsMap;
        },
        item: (state, getters) => (id) => {
            return getters.itemsMap[id];
        }
    },
    mutations: {
        loadProducts(state, data){
            state.products = data;
        }
    },
    actions: {
        loadProducts(store) {
            Vue.http.get('products.php')
                .then(response => response.json())
                .then(data => {
                    store.commit('loadProducts', data);
                })
        }
    }
}