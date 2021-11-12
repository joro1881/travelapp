<template>
  <br>

  <Navigation/>

  <div class="container">

    <router-view v-slot="{Component}">

      <transition name="slide" mode="out-in">
          <Component :is="Component" :key="$route.path"></Component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
export default {
  name: 'App',
  components: { Navigation }
}
</script>
<style>
.slide-enter-active,
.slide-leave-active{
  transition: opacity (0.1s + 0.4s), transform 0.1s;
}

.slide-enter-form,
.slide-leave-to{
  opacity: 0;
  transform: translateX(-30%);
}
</style>
