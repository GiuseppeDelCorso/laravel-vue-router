<script>
import { store } from "../store.js" //state management
import axios from 'axios'; //importo Axios

export default {
    name: "EventShow",
    props: ["id"],
    data() {
        return {
            store,
            evento: null
        }
    },
    mounted() {

        this.getEventShow();

    },
    methods: {
        getEventShow() {

            let url = this.store.apiUrl + this.store.apiEventEndpoint + this.id;
            console.log(url);

            axios.get(url).then(risultato => {
                if (risultato.status === 200 && risultato.data.success) {
                    console.log(risultato.data.payload);
                    this.evento = risultato.data.payload;
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
            <div class="col-md-12 gy-4">
                <div v-if="!evento">Caricamento dati in corso</div>
                <div class="card h-100" v-else>
                    <div class="card-header">{{ evento?.date }}</div>
                    <div class="card-body">
                        <h5 class="card-title">{{ evento?.name }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">
                            {{ evento?.user ? evento?.user.name : "Utente sconosciuto" }}
                        </h6>
                        <p class="card-text">Restano <b>{{ evento?.available_tickets }}</b> biglietti disponibili.
                        </p>
                        <div class="card-subtitle mb-2 text-muted badge bg-success me-2" v-for="tag in evento?.tags">
                            <div class="text-white py-1">
                                {{ tag.type }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>