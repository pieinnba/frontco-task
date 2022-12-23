<script setup>
import { onMounted, watch } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import store from '@/store'

onMounted(() => {
  store.dispatch('preparingData')
})
watch(() => store.getters.activeCities, (newData, oldData) => {
  if(newData.length > oldData.length) {
    store.dispatch('fetchWeather')
  }
})

</script>

<template>
  <div class="container">
    <header>
      <nav>
        <RouterLink class="nav-btn" to="/">Dashboard</RouterLink>
        <RouterLink class="nav-btn" to="/cities">Cities</RouterLink>
      </nav>
    </header>

    <body>
      <RouterView />
    </body>
  </div>
</template>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Yantramanav&display=swap');
  .container {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    padding-top: 3rem;
    font-family: 'Yantramanav', sans-serif;
    font-size: 2rem;

    header {
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;

      nav {
        display: flex;
        gap: 2rem;

        .nav-btn {
          color: black;
          padding: .5rem 1rem;
          border-radius: .5rem;
            border: .1rem rgba(0, 0, 0, 0) solid;

          &:hover {
            background-color: rgba(200, 200, 200, 0.5);
            border: .1rem rgba(165, 165, 165, 0) solid;
          }
        }
      }
    }
  }

</style>
