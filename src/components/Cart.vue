<template>
	<div>
		<h1>Cart</h1>
		<hr>
		<div v-if="empty"
			 class="alert alert-warning">
			Your cart is empty
		</div>
		<template v-else>
			<table class="table table-bordered table-hover">
				<thead>
					<tr>
						<th>Title</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Total</th>
					</tr>
				</thead>	
				<tbody>
					<tr v-for="product in products">
						<td>{{ product.title }}</td>
						<td>{{ product.price }}</td>
						<td>{{ getCnt(product.id_product) }}</td>
						<td>{{ product.price * getCnt(product.id_product) }}</td>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td>{{ total }}</td>
					</tr>
				</tbody>	
			</table>
			<button @click="onOrder"
					class="btn btn-success"
			>
				Order Now
			</button>
		</template>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';

	export default {
		computed: {
			...mapGetters('products', {
				productsAll: 'products'
			}),
			...mapGetters('cart', {
				productsInCart: 'products',
				empty: 'empty'
			}),
			products(){
				return this.productsAll.filter((elem) => {
					return this.productsInCart.findIndex(obj => obj.id === elem.id_product) !== -1;
				});
			},
			total(){
				let total = 0;
				for(let i = 0; i < this.products.length; i++){
					let product = this.products[i];
					total += this.getCnt(product.id_product) * product.price;
				}
				return total;
			}
		},
		methods: {
			onOrder(){
				this.$router.push('/checkout');
			},
			getCnt(id_product){
				return this.productsInCart[this.productsInCart.findIndex(obj => obj.id === id_product)].cnt
			},
		}
	}
</script>