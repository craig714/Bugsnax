<script setup>
import { AppState } from '@/AppState.js';
import SaucesCard from '@/components/SaucesCard.vue';
import { saucesService } from '@/services/SaucesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
// @ts-ignore
import bugsnaxSauces from '@/assets/img/bugsnaxSauces.webp'

const sauces = computed(() => AppState.sauces)



onMounted(() => {
  AppState.sauces = []
  getAllSauces()
})


async function getAllSauces() {
  try {
    await saucesService.getAllSauces()
  }
  catch (error) {
    Pop.error(error, 'Could not get sauces!');
    logger.error('Could not get sauces!', error);
  }
}

</script>


<template>

  <body :style="{ backgroundImage: `url(${bugsnaxSauces})` }">

    <div class="container">
      <div class="row">
        <div v-for="sauce in sauces" :key="sauce.id" class="col-12 col-md-4">
          <SaucesCard :sauceProp="sauce" />
        </div>
      </div>
    </div>
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