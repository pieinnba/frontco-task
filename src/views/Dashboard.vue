<template>
    <table>
        <thead>
            <tr>
                <th>CITY</th>
                <th>MIN</th>
                <th>MAX</th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="city in store.getters.activeCities" 
            >
                <td 
                    class="city-name"
                    title="double click to delete"
                    @dblclick="city.isActive = false"
                >
                    {{ city.city }}
                </td>
                <td>{{ city.temp[0]?.min }}</td>
                <td>{{ city.temp[0]?.max }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
    import { useStore } from 'vuex'

    const store = useStore()
</script>

<style lang="scss" scoped>
    table {
        margin: 0 auto;
        margin-top: 3rem;
        font-size: 1.5rem;
    }
    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
    }
    th, td {
        padding: .5rem;
    }
    .city-name {
        cursor: pointer;
        -webkit-user-select: none; 
        -ms-user-select: none; 
        user-select: none; 
    }

</style>