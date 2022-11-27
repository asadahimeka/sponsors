<script setup lang="ts">
import { isDark } from '~/composables'

const lightBgImageUrl = 'https://upload-bbs.mihoyo.com/upload/2022/09/09/190122060/82d2bdbcd27340dfe1bc27d01a5b00b6_6862346689033704022.jpg'
const darkBgImageUrl = ''

const mainStyle = computed(() => {
  return {
    backgroundImage: `url('${isDark.value ? darkBgImageUrl : lightBgImageUrl}')`,
  }
})
</script>

<template>
  <main
    class="p-4 text-center text-gray-700 dark:text-gray-200 min-h-screen"
    bg="cover center no-repeat fixed"
    :style="mainStyle"
  >
    <BaseMenu />
    <router-view />
    <BaseFooter />
  </main>
</template>
