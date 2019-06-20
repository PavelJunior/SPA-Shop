<template>
	<div>
		<h1>{{ product.title }}</h1>
		<router-link :to="{name: 'products'}">Back to Main</router-link>
		<hr>
		<h3>{{ product.price }}</h3>
		<hr>
		<p>{{ product.description }}</p>
		<button class="btn btn-primary"
				v-if="inCart.findIndex(obj => obj.id === product.id_product) == -1"
				@click="addToCart(product.id_product)"
		>
			Add to cart
		</button>
		<div v-else>
			<button @click="cntMinus(product.id_product) ">-</button>
			<input class="cntInput" type="text" :value="getCnt(product.id_product)"
				   @input="onlyNumber($event); calculateCnt($event.target.value, product.id_product)"
			>
			<button @click="cntPlus(product.id_product) ">+</button>
			<button class="btn btn-danger"
					@click="removeFromCart(product.id_product)"
			>
				X
			</button>
		</div>
	</div>
</template>

<script>
	import {mapActions} from 'vuex';
	import {mapGetters} from 'vuex';

	export default {
		computed: {
			...mapGetters('products', {
				getProducts: 'products'
			}),
			...mapGetters('cart', {
				inCart: 'products'
			}),
			id(){
				return this.$route.params.id
			},
			product(){
				return this.$store.getters['products/item'](this.id);
			}
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
				let pattern = /^[0-9]{1,3}$/;
				let cnt = $event.target.value;
				if(!pattern.test(cnt)){
					let numbers = cnt.replace(/[^\d]/g, '');
					if(parseInt(numbers) > 999){
						numbers = parseInt(numbers/10);
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

	.btn-danger{
		padding: 2px 8px;
	}
</style>