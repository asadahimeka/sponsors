<script lang="ts" setup>
import VueAboutMe from 'vue-about-me'
import 'vue-about-me/style.css'
import { isDark } from '~/composables'

const copyright = ref({
  name: 'Sponsors',
  repo: 'sponsors',
  author: 'Yumine Sakura',
  logo: 'ri:heart-line',
  authorUrl: 'https://www.nanoka.top',
  color: '#e87a90',
})

const links = ref([
  {
    type: 'github',
    label: 'GitHub',
    href: 'https://github.com/asadahimeka',
  },
  {
    type: 'telegram',
    label: 'Telegram',
    href: 'https://t.me/himekana',
  },
  {
    type: 'twitter',
    label: 'Twitter',
    href: 'https://twitter.com/soigneehimeka',
  },
  {
    type: 'blog',
    label: '博客',
    href: 'https://www.nanoka.top',
  },
])
</script>

<template>
  <VueAboutMe :is-dark="isDark" :copyright="copyright" :links="links" />
  <a
    id="bg_credit_white"
    href="https://www.freepik.com/free-vector/modern-soft-violet-watercolor-paint-texture-design-background_29568085.htm"
    target="_blank"
    style="font-size: 12px;color: #999;"
  >
    Background by Creative_hat
  </a>
</template>

<style>
  .dark #bg_credit_white {
    display: none;
  }
</style>
