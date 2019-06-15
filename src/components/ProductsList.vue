<template>
	<div>
		<h1>Products</h1>
		<div class="row">
			<div class="col col-sm-4" v-for="product in getProducts">
				<router-link :to="'products/' + product.id_product"
							 tag="h3"
				>
					<a>{{ product.title }}</a>
				</router-link>
				<h4>{{ product.price }}</h4>
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
			</div>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';

	export default {
		computed: {
			...mapGetters('products', {
				getProducts: 'products'
			}),
			...mapGetters('cart', {
				inCart: 'products'
			})
		},
		methods: {
			...mapActions('cart', {
				addToCart: 'add',
				removeFromCart: 'remove'
			})
		}
	}
</script>

<style scoped>
	.row{
		padding-left: 15px;
	}
</style>