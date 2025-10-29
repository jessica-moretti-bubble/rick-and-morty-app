<template>
    <div :class="$style.locationCard">
        <div :class="$style.infoWrapper">
            <div :class="$style.info">
                <p :class="$style.name">{{ location.name }}</p>
                <p :class="$style.species">{{ location.type }}</p>
            </div>
            <div :class="$style.info">

                <p :class="$style.species">Dimensions: {{ location.dimension }}</p>


            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import $style from '../../assets/css/LocationItem.module.css'
import type { Location } from '~/model/location.model'


defineProps<{
    location: Location
}>()
</script>

<style module src="../../assets/css/LocationItem.module.css"></style>