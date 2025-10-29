<template>
    <div :class="$style.characterCard">
        <div :class="$style.imageWrapper">
            <img :src="character.image" :alt="character.name" :class="$style.image" />
        </div>

        <div :class="$style.info">
            <p :class="$style.name">{{ character.name }}</p>
            <p :class="$style.species">{{ character.species || 'unknown' }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Character } from '~/model/character.model'
import $style from '../../assets/css/CharacterItem.module.css'

defineProps<{
    character: Character
}>()
</script>

<style module src="../../assets/css/CharacterItem.module.css"></style>