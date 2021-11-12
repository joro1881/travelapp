<template>
    <div>
        <h1> Greetings, {{ username }} </h1>

        <button class="btn" @click="logout">Logout</button>
        <br>
        <div>
            <router-link :to="{ name: 'InvoicesShow' }">
                <button class="btn">Invoices</button>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            username: window.user
        }
    },
    methods: {
        logout () {
            window.user = null
            this.$router.push({ name: 'Home' })
        }
    }
}
</script>