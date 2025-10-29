<template>

    <div class="container">
        <FavoriteButton :handle-click="() => { }" />

        <ItemWrapper title="Personaggi" path="/characters">
            <Grid>
                <CharacterItem v-for="character in characterList?.slice(0, 4)" :key="character.id" :show-button="false"
                    :handle-click="() => { }" :character="character" />
            </Grid>
        </ItemWrapper>

        <ItemWrapper title="Episodi" path="/episodes">
            <Grid>
                <EpisodeItem v-for="episode in episodeList?.slice(0, 4)" :key="episode.id" :episode="episode" />
            </Grid>
        </ItemWrapper>

        <ItemWrapper title="Luoghi" path="/locations">
            <div class="locationsList">
                <LocationItem v-for="location in locationList?.slice(0, 5)" :key="location.id" :location="location" />
            </div>
        </ItemWrapper>





    </div>
</template>

<script setup lang="ts">
import CharacterItem from '../characters/CharacterItem.vue'
import LocationItem from '../locations/LocationItem.vue'
import EpisodeItem from '../episodes/EpisodeItem.vue'
import FavoriteButton from '../common/FavoriteButton.vue'
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
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    border-radius: 16px;
    height: 90%;
    gap: 2rem;
    background: rgba(8, 8, 36, 0.3);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}

.iconWrapper {
    position: absolute;
    right: 2%;
    top: 5%;
    scale: 2;
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.locationsList {
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