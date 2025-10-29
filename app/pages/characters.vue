<template>
    <div class="wrapper">
        <RouterLink to="/favorites" class="link">
            <p> Visualizza i preferiti</p>
        </RouterLink>

        <FullGrid>
            <CharacterItem v-for="character in characterList" :key="character.id" :character="character"
                :show-button="true" :handle-click="() => toggle(character.id)" />
        </FullGrid>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useApi } from '~/composables/useApi'
import FullGrid from '~/components/common/FullGrid.vue'
import CharacterItem from '~/components/characters/CharacterItem.vue'
import { RouterLink } from 'vue-router'
import { useFavoritesStore } from '~/stores/use-favorites-store.js'


const { getCharacters } = useApi()

const { data: characters } = await getCharacters()

const characterList = computed(() => characters.value?.results ?? [])


const favorites = useFavoritesStore()

const toggle = (id: number) => {
    favorites.toggleFavorite(id)

}

</script>

<style scoped>
.wrapper {
    width: 80%;
    max-height: calc(100vh - 50px);
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;
    padding-top: 2rem;
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

.wrapper::-webkit-scrollbar {
    width: 0;
    background: transparent;
}
</style>