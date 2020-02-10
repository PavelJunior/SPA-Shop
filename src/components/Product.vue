<template>
	<div>
		<div class="product-header">
			<div class="header-element">
				<h1>{{ product.title }}</h1>
				<router-link :to="{name: 'products'}">Back to Main</router-link>
			</div>
			<div class="header-element">
				<h3 class="price">{{ product.price + '$' }}</h3>
				<ProductSelection :product="product"></ProductSelection>
			</div>
		</div>
		<hr>
		<p v-html="product.description"></p>
		<img :src="itemImg(product.image)" alt="">

	</div>
</template>

<script>
	import ProductSelection from './ProductSelection'

	export default {
		components:{
			ProductSelection
		},
		computed: {
			id(){
				return this.$route.params.id
			},
			product(){
				return this.$store.getters['products/item'](this.id);
			}
		},
		methods: {
			itemImg(image){
				return "../src/images/" + image;
			}
		}
	}
</script>

<style scoped>
	.product-header{
		display: flex;
		justify-content: space-between;
	}

	.price{
		margin-left: 30px;
	}

	img{
		display: block;
		margin: 0 auto;
	}
</style>