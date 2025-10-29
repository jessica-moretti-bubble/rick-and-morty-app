<template>
    <div class="wrapper">
        <NavigationMenu :show-favorites-button="true" />
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
import { useFavoritesStore } from '~/stores/use-favorites-store.js'
import NavigationMenu from '~/components/common/NavigationMenu.vue'


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



.wrapper::-webkit-scrollbar {
    width: 0;
    background: transparent;
}
</style>