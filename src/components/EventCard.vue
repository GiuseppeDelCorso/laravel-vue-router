<script>
export default {
    name: "EventCard",
    props: ["item"]
}
</script>

<template>
    <div class="col-md-4 gy-4">
        <div class="card h-100">
            <div class="card-header">{{ item.date }}</div>
            <div class="card-body">
                <h5 class="card-title">{{ item.name }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                    {{ item.user ? item.user.name : "Utente sconosciuto" }}
                </h6>
                <p class="card-text">Ci sono <b>{{ item.available_tickets }}</b> biglietti disponibili.
                </p>
            </div>

        </div>
    </div>
</template>