export default {
    namespaced: true,
    state: {
        products: []
    },
    getters: {
        products(state) {
            return state.products;
        },
        cnt(state){
            let cnt = 0;
            for(let i = 0; i < state.products.length; i++){
                cnt += parseInt(state.products[i].cnt);
            }
            return cnt;
        },
        empty(state){
            return state.products.length == 0 ? true : false;
        }
    },
    mutations: {
        add(state, id_product){
            if(state.products.findIndex(obj => obj.id === id_product) == -1) {
                state.products.push({id: id_product, cnt: 1});
            }
        },
        remove(state, id_product){
            let pos = state.products.findIndex(obj => obj.id === id_product);

            if(pos !== -1) {
                state.products.splice(pos, 1);
            }
        },
        cntPlus(state, id_product){
            let pos = state.products.findIndex(obj => obj.id === id_product);
            state.products[pos].cnt+=1;
        },
        cntMinus(state, id_product){
            let pos = state.products.findIndex(obj => obj.id === id_product);
            if(state.products[pos].cnt >= 2){
                state.products[pos].cnt-=1;
            }
        },
        cntInput(state, params){
            let input = parseInt(params.cnt);
            if(input < 1) {
                input = 1;
            }
            let pos = state.products.findIndex(obj => obj.id === params.id_product);
            state.products[pos].cnt = input;
        }
    },
    actions: {
        add(store, id_product){
            store.commit('add', id_product);
        },
        remove(store, id_product){
            store.commit('remove', id_product);
        },
        cntPlus(store, id_product){
            store.commit('cntPlus', id_product);
        },
        cntMinus(store, id_product){
            store.commit('cntMinus', id_product);
        },
        cntInput(store, id_product){
            store.commit('cntInput', id_product);
        },
    }
}