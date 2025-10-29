<template>
    <button :class="['favoriteButton', { absolute: isHome }]" aria-label="Aggiungi ai preferiti" @click="handleClick">
        <Icon v-if="id"
            :name="favorites.favoritesIds.includes(id) ? 'emojione:red-heart' : 'streamline-color:heart-flat'" />
        <Icon v-else name="streamline-color:heart-flat" />

    </button>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

import { computed } from 'vue'

import { useFavoritesStore } from '~/stores/use-favorites-store'

const favorites = useFavoritesStore()




defineProps<{
    handleClick: () => void
    id?: number
}>()

const route = useRoute()

const isHome = computed(() => route.path === '/')

</script>


<style scoped>
.favoriteButton {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease, opacity 0.2s ease;
    margin-top: 0.5rem;
}

.favoriteButton:hover {
    transform: scale(1.2);
    opacity: 0.9;
}

.absolute {
    position: absolute;
    top: 5%;
    right: 2%;
    scale: 2;
    margin-top: 0;
}
</style>