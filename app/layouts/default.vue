<template>
    <div :class="$style.root">
        <CursorGlow />
        <img ref="background" :class="$style.background" src="../assets/background/parallax-bg.png" />
        <div v-if="isHome" ref="first" :class="[$style.section, $style.section1]">
            <div>
                <h1 :class="$style.title">Rick and Morty's Universe</h1>
            </div>
        </div>
        <div ref="second" :class="[$style.section, $style.section2]">
            <slot />
        </div>
    </div>
</template>

<script setup>

import { onMounted, onUnmounted, ref } from 'vue'

import $style from '../assets/css/Parallax.module.css'
import CursorGlow from '~/components/CursorGlow.vue'

const background = ref(null)

const first = ref(null)

const second = ref(null)

const route = useRoute()

const isHome = computed(() => route.path === '/')


const handleScroll = () => {
    if (!isHome.value) return

    const scrollY = window.scrollY

    if (!background.value || !first.value || !second.value) return

    first.value.style.opacity =
        (100 - (scrollY + window.innerHeight - first.value.offsetHeight)) / 100

    second.value.style.opacity =
        (scrollY + window.innerHeight - second.value.offsetTop) / 100

    const maxBackgroundSize = 120

    const backgroundSize = scrollY / (maxBackgroundSize - 100)

    background.value.style.transform = `scale(${(100 + backgroundSize * 0.4) / 100})`
}

onMounted(() => {
    if (!isHome.value) return

    window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
    if (!isHome.value) return

    window.removeEventListener('scroll', handleScroll)
})
</script>