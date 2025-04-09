<script setup>
import { AppState } from '@/AppState.js';
import SaucesCard from '@/components/SaucesCard.vue';
import { saucesService } from '@/services/SaucesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';


const sauces = computed(() => AppState.sauces)



onMounted(() => {
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
  <div class="container">
    <div class="row">
      <div v-for="sauce in sauces" :key="sauce.id" class="col-12 col-md-4">
        <SaucesCard :sauceProp="sauce" />
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>