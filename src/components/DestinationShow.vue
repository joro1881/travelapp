<template>
    <div class="my-6">
        <section v-if="destination" class="destination">
            <h2> {{ destination.name }} </h2>
            <GoBack/>
            <div class="destination-details">
                <img :src="`/images/${destination.image}`" :alt="destination.name">
                <p> {{ destination.description }} </p>

            </div>
        </section>
        <section class="experiences my-6">

            <h2>Top Experiences in {{ destination.name }}</h2>

            <div class="cards">
            <router-link
                    v-for="experience in destination.experiences"
                    :key="experience.slug"
                    :to="{ name: 'ExperienceShow', params: { experienceSlug: experience.slug }}"
            >
                    <ExperienceCard
                        :experience="experience"
                    />
            </router-link>
            </div>

            <router-view />

        </section>
    </div>
</template>
<script>
import sourceData from '@/data.json'
import ExperienceCard from '@/components/ExperienceCard.vue'
import GoBack from '@/components/GoBack.vue'

export default {
    components: { ExperienceCard, GoBack },
    props: {
        id: { type: String, required: true }
    },
    // data() {
    //     return {
    //         destionation: null
    //     }
    // },
    computed: {
        destinationId () {
            return parseInt(this.id)
        },
        destination () {
            return sourceData.destinations.find(destination => destination.id === this.destinationId)
        }
    },
    created () {
        // this.initData ()
        // this.$watch( () => this.$route.params, this.initData() )

    },
    // methods: {
    //     async initData () {
    //         const response = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`)
    //         this.destination = await response.json()
    //     }
    // }
}
</script>
<style>

.my-6 {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
}
</style>