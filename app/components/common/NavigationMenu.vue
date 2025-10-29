<template>
    <div class="menu">
        <RouterLink to="/favorites" class="link" v-if="showFavoritesButton">
            <p> Visualizza i preferiti</p>
        </RouterLink>
        <RouterLink to="/" class="link">
            <p> Indietro</p>
        </RouterLink>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    showFavoritesButton: boolean
}>()

</script>

<style scoped>
.menu {

    display: flex;
}

.link {
    text-decoration: none;
    margin-left: 1rem;
    color: #7CFF4E;
    font-family: 'Orbitron', sans-serif;
    font-size: 1.1rem;
    letter-spacing: 1px;
    border: 1px solid rgba(124, 255, 78, 0.4);
    padding: 0.5rem 1.2rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    background: rgba(20, 255, 150, 0.05);
    box-shadow: 0 0 8px rgba(124, 255, 78, 0.3);
}

.link:hover {
    background: rgba(124, 255, 78, 0.15);
    box-shadow: 0 0 20px rgba(124, 255, 78, 0.6);
    transform: translateY(-2px) scale(1.03);
    color: #C3FFB5;
}
</style>