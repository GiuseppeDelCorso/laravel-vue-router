<script>


export default {
    name: "Header",
    data() {
        return {
            MenuLink: [
                {
                    routeName: "home",
                    label: "HomePage",
                },
                {
                    routeName: "about",
                    label: "Informazioni",
                },
                {
                    routeName: "events",
                    label: "Eventi",
                },
                {
                    routeName: "tags",
                    label: "Tags",
                },

            ]
        }
    }
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <button class="btn btn-secondary">
                            <router-link :to="{ name: 'home' }" class="nav-link">HomePage SingleButton</router-link>
                        </button>

                        <li class="btn btn-primary mx-2" v-for="(item, index) in MenuLink" :key="index">
                            <router-link :to="{ name: item.routeName }" class="nav-link">
                                {{ item.label }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>