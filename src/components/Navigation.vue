<template>
  <div id="nav">
    <router-link id="logo" to="/">Travel App</router-link>

    <router-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="{ name: 'DestinationShow', params: { id: destination.id, slug: destination.slug }}"
    >
      {{ destination.name }}
    </router-link>

    <router-link :to="{ name: 'Protected' }">Dashboard</router-link>
  </div>
</template>
<script>
import sourceData from '@/data.json'

export default ({
  data () {
    return {
      destinations: sourceData.destinations
    }
  }
})
</script>
<style scoped>
#nav .travel-active-link{
  color:greenyellow;
  border-bottom: 2px solid greenyellow;
}
</style>