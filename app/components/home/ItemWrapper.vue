<template>
    <div :class="$style.wrapper">
        <div :class="$style.headerRow">
            <h3 :class="$style.title">{{ title }}</h3>
            <NuxtLink :to="path">
                <Icon name="grommet-icons:next" />
            </NuxtLink>
        </div>

        <div :class="$style.content">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string
    path: string
}>()
</script>

<style module src="../../assets/css/ItemWrapper.module.css"></style>