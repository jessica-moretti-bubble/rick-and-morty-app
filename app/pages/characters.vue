<template>
    <Box>
        <NavigationMenu :show-favorites-button="true" />
        <FullGrid>
            <CharacterItem v-for="character in characterList" :key="character.id" :character="character"
                :show-button="true" :handle-click="() => toggle(character.id)" />
        </FullGrid>

    </Box>

</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useApi } from '~/composables/useApi'
import FullGrid from '~/components/common/FullGrid.vue'
import CharacterItem from '~/components/characters/CharacterItem.vue'
import { useFavoritesStore } from '~/stores/use-favorites-store.js'
import NavigationMenu from '~/components/common/NavigationMenu.vue'
import Box from '~/components/common/Box.vue'


const { getCharacters } = useApi()

const { data: characters } = await getCharacters()

const characterList = computed(() => characters.value?.results ?? [])


const favorites = useFavoritesStore()

const toggle = (id: number) => {
    favorites.toggleFavorite(id)

}

</script>
