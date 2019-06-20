import Vue from 'vue';

export default {
    namespaced: true,
    state: {
        products: [
            {
                id_product: 1,
                title: "IPhone 5",
                price: 20400,
                description: 'it is iphone 5',
                image: 'iphone5.jpg'
            },
            {
                id_product: 2,
                title: "IPhone 6",
                price: 25000,
                description: 'it is iphone 6',
                image: 'iphone6.jpg'
            },
            {
                id_product: 3,
                title: "IPhone 7",
                price: 30000,
                description: 'it is iphone 7',
                image: 'iphone7.jpg'
            }
        ]
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
        // loadProducts(store) {
        //     Vue.http.get('products.php')
        //         .then(response => response.json())
        //         .then(data => {
        //             store.commit('loadProducts', data);
        //         })
        // }
    }
}