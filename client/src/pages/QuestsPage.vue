<script setup>



// @ts-ignore
import questPic from '@/assets/img/journal.webp'



</script>


<template>

  <body :style="{ backgroundImage: `url(${questPic})` }">

    <h1>This is the quests page!</h1>
  </body>



</template>


<style lang="scss" scoped>
body {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100dvh;
  padding: 2rem;
}
</style>