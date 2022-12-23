<template>
    <div class="err-container">
        <div class="first-line">
            404 
        </div>
        <div class="second-line">
            Page Not Found 
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .err-container {
        margin-top: 15rem;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 3rem;

        .first-line {
            font-size: 5rem;
        }
        .second-line {
            font-size: 3.5rem;
        }
    }
</style>