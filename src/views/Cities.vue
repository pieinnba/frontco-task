<template>
    <div class="search">
        <input type="text" v-model="store.state.searchedCity" placeholder="Search">
    </div>
    <div class="cities-list">
        <div 
            class="city"
            v-for="city in store.getters.filteredCities" 
            @click="city.isActive = true"
        >
            {{ city.city }}
        </div>
    </div>
</template>

<script setup>
    import { useStore } from 'vuex'

    const store = useStore()

</script>

<style lang="scss" scoped>
.search {
    margin: 3rem 0 1.5rem 0;
    
    input {
        display: block;
        padding: .5rem;
        font-size: 1.5rem;
        border: .1rem rgba(220, 220, 220, 0) solid;

        &:focus {
            background-color: rgba(220, 220, 220, 0.5);
            border: .1rem rgba(220, 220, 220, 0) solid;
            border-radius: .5rem;
        }
    }
}
    .cities-list {
        
        .city {
            margin: .5rem;
            padding: .5rem .8rem;
            cursor: pointer;
            display: inline-block;
            font-size: 1.5rem;
            border-radius: .5rem;
            border: .1rem rgba(0, 0, 0, 0) solid;

            &:hover {
                background-color: rgba(200, 200, 200, 0.5);
                border: .1rem rgba(165, 165, 165, 0) solid;
            }
        }
    }
</style>