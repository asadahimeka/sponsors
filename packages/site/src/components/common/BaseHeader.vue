<script setup lang="ts">
defineProps<{ msg: string }>()
const { t } = useI18n()
</script>

<template>
  <div class="relative flex justify-center items-center flex-col animate-iteration-1 animate-duration-1000 animate-fade-in">
    <img class="xiao-yun-q inline-flex m-auto fade-in z-2 rounded-full" src="https://upload-bbs.mihoyo.com/upload/2022/09/07/190122060/8505ff4b535cb1487b521d73c7f71d63_865024295271530650.png" alt="">
    <!-- <p class="absolute bottom-0">
      我很可爱，请给我钱！
    </p> -->
  </div>
  <router-link to="/projects">
    <a
      font="semibold"
      m="t-2 b-2"
      p="x-4 y-1"
      border="~ purple-300"
      class="inline-block justify-center items-center rounded text-sm text-purple-600 hover:(text-white bg-purple-600 border-transparent) focus:(outline-none ring-2 ring-purple-600 ring-offset-2) dark:(text-purple-300)"
    >{{ t('message.projects') }}</a>
  </router-link>
</template>

<style>
.xiao-yun-q {
  width: 200px;
  aspect-ratio: 1;
}
</style>
