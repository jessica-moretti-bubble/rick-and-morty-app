<template>
    <div :class="$style.root">
        <img ref="background" :class="$style.background" src="../assets/background/parallax-bg.png" />

        <div ref="first" :class="[$style.section, $style.section1]">
            <div>
                <h1>Rick and Morty's universe.</h1>
            </div>
        </div>

        <div ref="second" :class="[$style.section, $style.section2]">
            <div>
                <h2>Here's more info</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </div>
        </div>
        <CursorGlow />

    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import $style from '../assets/css/Parallax.module.css'
import CursorGlow from '~/components/CursorGlow.vue'

const background = ref(null)
const first = ref(null)
const second = ref(null)

const handleScroll = () => {
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
    window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>