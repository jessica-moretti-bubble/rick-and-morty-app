<template>
    <div :class="$style.container">
        <FavoriteButton :handle-click="() => router.push('/favorites')" />

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
            <div :class="$style.locationsList">
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

const router = useRouter()

const [{ data: characters }, { data: locations }, { data: episodes }] = await Promise.all([
    getCharacters(),
    getLocations(),
    getEpisodes()
])

const characterList = computed(() => characters.value?.results ?? [])

const locationList = computed(() => locations.value?.results ?? [])

const episodeList = computed(() => episodes.value?.results ?? [])

</script>

<style module src="../../assets/css/ContentPreviewBox.module.css"></style>
