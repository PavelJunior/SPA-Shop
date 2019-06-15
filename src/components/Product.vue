<template>
	<div>
		<h1>{{ product.title }}</h1>
		<router-link :to="{name: 'products'}">Back to Main</router-link>
		<hr>
		<h3>{{ product.price }}</h3>
		<button class="btn btn-primary"
				v-if="inCart.indexOf(product.id_product) === -1"
				@click="addToCart(product.id_product)"
		>
			Add to cart
		</button>
		<button class="btn btn-warning"
				v-else
				@click="removeFromCart(product.id_product)"
		>
			Remove from cart
		</button>
		hw: add to cart
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
				removeFromCart: 'remove'
			})
		}
	}
</script>