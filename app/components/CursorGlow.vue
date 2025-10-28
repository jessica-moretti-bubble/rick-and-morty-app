<template>
    <div ref="cursor" class="fixed pointer-events-none z-[9999]" :style="cursorStyle"></div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const x = ref(0)
const y = ref(0)

// Posizione fluida del cursore
let targetX = 0, targetY = 0
let currentX = 0, currentY = 0

function move(e) {
    targetX = e.clientX
    targetY = e.clientY
}

function animate() {
    currentX += (targetX - currentX) * 0.15
    currentY += (targetY - currentY) * 0.15
    x.value = currentX
    y.value = currentY
    requestAnimationFrame(animate)
}

const cursorStyle = computed(() => ({
    left: `${x.value}px`,
    top: `${y.value}px`,
    width: '150px',
    height: '150px',
    transform: 'translate(-50%, -50%)',
    borderRadius: '50%',
    background: `
      radial-gradient(
        circle,
        rgba(0, 255, 80, 0.95) 0%,
        rgba(0, 255, 80, 0.6) 25%,
        rgba(0, 255, 80, 0.2) 60%,
        rgba(0, 255, 80, 0.05) 90%,
        transparent 100%
      )
    `,
    filter: 'blur(12px)',
    position: 'fixed',
    transition: 'transform 0.05s linear',
}))

onMounted(() => {
    window.addEventListener('mousemove', move)
    animate()
})
onBeforeUnmount(() => window.removeEventListener('mousemove', move))
</script>

<style scoped>
div {
    mix-blend-mode: screen;
}
</style>