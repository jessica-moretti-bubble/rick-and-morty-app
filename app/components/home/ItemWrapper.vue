<template>
    <div class="wrapper">
        <div class="headerRow">
            <h3 class="title">{{ title }}</h3>
            <NuxtLink :to='path'>
                <Icon name="grommet-icons:next" />
            </NuxtLink>

        </div>

        <div class="content">
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

<style scoped>
.wrapper {
    width: 100%;
    min-width: 0;
}

.headerRow {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.title {
    margin-right: 10px;
}

.content {
    width: 100%;
}
</style>