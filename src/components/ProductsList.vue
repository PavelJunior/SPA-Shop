<template>
	<div>
		<h1>Products</h1>
		<div class="row">
			<div class="col col-sm-3 product" v-for="product in getProducts">
				<router-link :to="'products/' + product.id_product"
							 tag="h3"
				>
					<a>{{ product.title }}</a>
				</router-link>
				<h4>{{ product.price + '$' }}</h4>
				<img :src="itemImg(product.image)" alt="">
				<ProductSelection :product="product"></ProductSelection>
			</div>
		</div>
	</div>
</template>

<script>
	import ProductSelection from './ProductSelection'
	import {mapGetters} from 'vuex';

	export default {
		components:{
			ProductSelection
		},
		computed: {
			...mapGetters('products', {
				getProducts: 'products'
			})
		},
		methods: {
			itemImg(image){
				return "/src/images/" + image;
			}
		}
	}
</script>

<style scoped>
	.row{
		padding-left: 15px;
	}

	img{
		height: 200px;
		width: 200px;
		margin-left: -50px;
		overflow: hidden;
		margin-bottom: 7px;
	}
</style>