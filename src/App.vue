<script>

import TheHeader from "./components/TheHeader.vue";

import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management

export default {
	components: {
		TheHeader,
	},
	data() {
		return {
			store
		}
	},
	mounted() {
		this.getEventList();
	},
	methods: {
		getEventList() {

			let url = this.store.apiUrl + this.store.apiEventEndpoint;

			axios.get(url).then(risultato => {
				if (risultato.status === 200 && risultato.data.success) {
					console.log(risultato.data.payload);
					this.store.eventList = risultato.data.payload;
				} else {
					console.error("Ops... qualcosa è andato storto");
				}
			}).catch(errore => {
				console.error(errore);
			});

		}
	}
}
</script>

<template>
	<TheHeader />
	<main>

		<router-view></router-view>

	</main>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>

<style scoped lang="scss"></style>