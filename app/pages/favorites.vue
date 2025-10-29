<template>
    <Box v-if="characterList && characterList.length > 0">
        <NavigationMenu :show-favorites-button="false" />

        <FullGrid>
            <CharacterItem v-for="character in characterList" :key="character.id" :character="character"
                :show-button="true" :handle-click="() => toggle(character.id)" />
        </FullGrid>
    </Box>


    <Box v-else class="empty-state">
        <NavigationMenu :show-favorites-button="false" />

        <h2>Non hai nessun preferito</h2>
    </Box>
</template>

<script setup lang="ts">
import { useApi } from '~/composables/useApi'
import { useFavoritesStore } from '~/stores/use-favorites-store.js'
import FullGrid from '~/components/common/FullGrid.vue'
import CharacterItem from '~/components/characters/CharacterItem.vue'
import NavigationMenu from '~/components/common/NavigationMenu.vue'
import Box from '~/components/common/Box.vue'

const { getMultipleCharacters } = useApi()
const favorites = useFavoritesStore()
const { data: characterList } = await getMultipleCharacters(favorites.favoritesIds)

const toggle = (id: number) => {
    favorites.toggleFavorite(id)
}
</script>

<style scoped>
.empty-state {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-height: 60vh;
    text-align: center;
    display: flex;
    flex-direction: column;
}

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



.empty-state h2 {
    font-size: 1.5rem;
    color: #fffbfb;
    font-weight: 600;
}
</style>