<template>
    <div class="full-grid">
        <slot />
    </div>
</template>

<style scoped>
.full-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    width: 100%;
    box-sizing: border-box;
    min-width: 0;
}

.full-grid>* {
    min-width: 0;
}

@media (max-width: 640px) {
    .full-grid {
        grid-template-columns: 1fr;
    }
}
</style>