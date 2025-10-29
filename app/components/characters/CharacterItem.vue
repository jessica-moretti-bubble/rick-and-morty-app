<template>
    <div :class="$style.characterItem">
        <div :class="$style.characterCard">
            <div :class="$style.imageWrapper">
                <img :src="character.image" :alt="character.name" :class="$style.image" />
            </div>

            <div :class="$style.info">
                <p :class="$style.name">{{ character.name }}</p>
                <p :class="$style.species">{{ character.species || 'unknown' }}</p>
            </div>
        </div>

        <div v-if="showButton" :class="$style.favoriteContainer">
            <FavoriteButton :handle-click="handleClick" :id="character.id" />
        </div>
    </div>
</template>

<script setup lang="ts">
import FavoriteButton from '~/components/common/FavoriteButton.vue'

import type { Character } from '~/model/character.model'

import $style from '../../assets/css/CharacterItem.module.css'

defineProps<{
    character: Character
    showButton: boolean
    handleClick: () => void
}>()

</script>

<style module src="../../assets/css/CharacterItem.module.css"></style>
