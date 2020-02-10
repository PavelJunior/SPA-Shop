<template>
    <div class="buttons-container">
        <button v-if="inCart.findIndex(obj => obj.id === product.id_product) == -1"
                @click="addToCart(product.id_product)"
                class="btn btn-primary"
        > Add to cart </button>
        <div v-else>
            <button @click="cntMinus(product.id_product)"
                    class="btn btn-primary btn-small"
            >-</button>
            <input :value="getCnt(product.id_product)"
                   @input="onlyNumber($event); calculateCnt($event.target.value, product.id_product)"
                   class="cntInput" type="text"
            >
            <button @click="cntPlus(product.id_product)"
                    class="btn btn-primary btn-small"
            >+</button>
            <button @click="removeFromCart(product.id_product)"
                    class="btn btn-danger btn-small"
            >x</button>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';

    export default {
        name: "ProductSelection",
        props: ['product'],
        computed: {
            ...mapGetters('cart', {
                inCart: 'products',
            })
        },
        methods: {
            ...mapActions('cart', {
                addToCart: 'add',
                removeFromCart: 'remove',
                cntPlus: 'cntPlus',
                cntMinus: 'cntMinus',
                cntInput: 'cntInput'
            }),
            getCnt(id_product){
                return this.inCart[this.inCart.findIndex(obj => obj.id === id_product)].cnt
            },
            calculateCnt(cnt, id_product){
                return this.cntInput({id_product: id_product, cnt: cnt});
            },
            onlyNumber ($event) {
                let pattern = /^[0-9]{1,2}$/;
                let cnt = $event.target.value;
                if(!pattern.test(cnt)){
                    let numbers = cnt.replace(/[^\d]/g, '');
                    if(parseInt(numbers) > 15){
                        numbers = 15
                    }
                    $event.target.value = numbers
                }
                if(cnt < 1 || isNaN(cnt) || cnt === ''){
                    $event.target.value = 1
                }
            }
        }
    }
</script>

<style scoped>
    .cntInput{
        width: 40px;
        text-align: center;
    }

    .btn-small{
        padding: 2px 8px;
    }

    .buttons-container{
        height: 30px;
        width: 130px;
    }
</style>


