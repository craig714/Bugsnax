<script setup>
import { AppState } from '@/AppState.js';
import GrumpusesCard from '@/components/GrumpusesCard.vue';
import { grumpusesService } from '@/services/GrumpusesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';




const grumpuses = computed(() => AppState.grumpuses)

onMounted(() => {
  getAllGrumpuses()
})

async function getAllGrumpuses() {
  try {
    await grumpusesService.getAllGrumpuses()
  }
  catch (error) {
    Pop.error(error, 'Could not get grumpuses');
    logger.error('Could not get grumpuses', error)
  }
}



</script>







<template>

  <div class="container">
    <div class="row">
      <div v-for="grumpus in grumpuses" :key="grumpus.id" class="col-12 col-md-3">
        <GrumpusesCard :grumpusProp="grumpus" />
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>