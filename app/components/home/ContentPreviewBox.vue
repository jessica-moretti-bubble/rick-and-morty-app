<template>
    <div class="container">

        <ItemWrapper title="Personaggi" path="/characters">
            <Grid>
                <CharacterItem v-for="character in characterList?.slice(0, 4)" :key="character.id"
                    :character="character" />
            </Grid>
        </ItemWrapper>

        <ItemWrapper title="Luoghi" path="/locations">
            <div class="locationsGrid">
                <LocationItem v-for="location in locationList?.slice(0, 6)" :key="location.id" :location="location" />
            </div>
        </ItemWrapper>

        <ItemWrapper title="Episodi" path="/episodes">
            <Grid>
                <EpisodeItem v-for="episode in episodeList?.slice(0, 4)" :key="episode.id" :episode="episode" />
            </Grid>
        </ItemWrapper>

    </div>
</template>

<script setup lang="ts">
import CharacterItem from '../characters/CharacterItem.vue'
import LocationItem from '../locations/LocationItem.vue'
import EpisodeItem from '../episodes/EpisodeItem.vue'
import Grid from '../common/Grid.vue'
import ItemWrapper from './ItemWrapper.vue'
import { useApi } from '../../composables/useApi'
import { computed } from 'vue'

const { getCharacters, getLocations, getEpisodes } = useApi()

const [{ data: characters }, { data: locations }, { data: episodes }] = await Promise.all([
    getCharacters(),
    getLocations(),
    getEpisodes()
])

const characterList = computed(() => characters.value?.results ?? [])
const locationList = computed(() => locations.value?.results ?? [])
const episodeList = computed(() => episodes.value?.results ?? [])
</script>

<style scoped>
.container {
    width: 90%;
    display: grid;
    height: 80%;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 2rem;
    border-radius: 5%;
    background: rgba(8, 8, 36, 0.3);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}

.locationsGrid {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
}

@media (max-width: 1024px) {
    .container {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 640px) {
    .container {
        grid-template-columns: 1fr;
    }
}
</style>