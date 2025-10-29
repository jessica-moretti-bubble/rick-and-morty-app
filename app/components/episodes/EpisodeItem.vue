<template>
    <div :class="$style.characterCard">
        <div :class="$style.imageWrapper" />




        <div :class="$style.info">
            <p :class="$style.name">{{ episode.name }}</p>
            <p :class="$style.species">{{ episode.air_date }}</p>
            <p :class="$style.species">{{ episode.episode }}</p>

        </div>
    </div>
</template>

<script setup lang="ts">
import type { Episode } from '~/model/episode.model.ts'
import $style from '../../assets/css/CharacterItem.module.css'

defineProps<{
    episode: Episode
}>()
</script>

<style module src="../../assets/css/CharacterItem.module.css"></style>