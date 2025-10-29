<template>
    <div class="two-col-grid">
        <slot />
    </div>
</template>

<style scoped>
.two-col-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    width: 100%;
    box-sizing: border-box;
    min-width: 0;
}

.two-col-grid>* {
    min-width: 0;
}
</style>