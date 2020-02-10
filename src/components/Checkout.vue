<template>
	<div>
		<div class="wrapper">
			<h1>Order Now</h1>
			<div v-if="empty"
				 class="alert alert-warning">
				Your cart is empty
			</div>
			<template v-else>
				<transition leave-active-class="animated fadeOut"  enter-active-class="animated fadeIn" mode="out-in">
					<form v-if="getSubbmited!='true'">
						<div class="progress">
							<div class="progress-bar" :style="barProgress"></div>
						</div>
						<app-input class="form-group" v-for="(object, index) in getInfo"
								   :key="index"
								   :formname="object.name"
								   :formvalue="object.value"
								   :formpattern="object.pattern"
								   @infoChanged="ChangeValue(index, $event)"
								   @changeStatus="CheckValid(index, $event)"
						>
						</app-input>
						<button class="btn btn-primary" :disabled="buttonDesabled" @click.prevent="Submit" :value="buttonSign">
							{{ buttonSign }}
						</button>
					</form>
					<div v-else>
						<table class="table table-bordered">
							<tbody>
								<tr v-for="(object, index) in getInfo">
									<td>{{ object.name }}</td>
									<td>{{ object.value }}</td>
								</tr>
								<tr>
									<td>Products</td>
									<td>{{ getProductInfo }}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</transition>
			</template>
		</div>
	</div>
</template>

<script>
	import AppInput from './Input';
	import {mapGetters} from 'vuex';

	export default {
		data() {
			return {
				progress: 0,
				bar: [],
				disabled: true,
			}
		},
		methods: {
			CheckValid(index, valid){
				this.bar[index] = valid;

				let done = 0;

				for(let i = 0; i < this.getInfo.length; i++) {
					if(this.bar[i]) {
						done++;
					}
				}
				this.progress = done;
			},
			ChangeValue(index, data) {
				this.$store.commit('checkout/setValue', {
					index: index,
					value: data
				});
			},
			Submit(){
				this.$store.dispatch('checkout/onSubmit');
			},
		},

		computed: {
			...mapGetters('checkout', {
				getInfo: 'info',
				getSubbmited: 'submitted'
			}),
			...mapGetters('cart', {
				getProductInfo: 'products',
			}),
			empty(){
				return this.$store.getters['cart/empty']
			},
			barProgress() {
				return {
					width: (this.progress / this.getInfo.length * 100) + '%'

				}
			},
			buttonDesabled(){
				return this.progress == this.getInfo.length && this.getSubbmited == "false" ? false : true;
			},
			buttonSign(){
				if(this.getSubbmited == "false") {
					return "Send Data";
				} else if (this.getSubbmited == "Process") {
					return "Process...";
				}
			}
		},
		components: {
			AppInput,
		}
	}
</script>
<style>

</style>