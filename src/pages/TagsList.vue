<script>
import { store } from "../store.js"
import axios from 'axios';

export default {

    name: "TagsList",


    data() {
        return {
            store,
            tagsList: null
        }
    },
    mounted() {
        this.getEventShow();

    },
    methods: {
        getEventShow() {

            let url = this.store.apiUrl + this.store.apiTagsEndpoint;
            console.log(url);

            axios.get(url).then(risultato => {
                if (risultato.status === 200 && risultato.data.success) {
                    console.log(risultato.data.payload);
                    this.tagsList = risultato.data.payload;
                } else {
                    //ToDo: distinguere il motivo dell'else.
                    //es. controllare statusCode, presenza e veridicità di data.success
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
    <div class="container">
        <div class="row">
            <h1 class="mb-3">Tag List</h1>
            <div v-for="tag in tagsList">
                <div class="text-white py-1">
                    <p>{{ tag.type }}</p>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped></style>