<template>
    <div>
        <h1>Not Found</h1>

        <div v-for="number in numbers" :key="number" style="margin-left: 20px; color: #502c3c;">
            <span> Rosen e strahoten!</span>
        </div>
        <p>

            Oops, we couldn't find that page, Try going

            <router-link to="/">home</router-link>

        </p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            numbers: 100,
        }
    }
}
</script>