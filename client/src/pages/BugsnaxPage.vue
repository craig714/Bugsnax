<script setup>
import { AppState } from '@/AppState.js';
import BugsnaxCard from '@/components/BugsnaxCard.vue';
import { bugsnaxService } from '@/services/BugsnaxService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';


const bugsnax = computed(() => AppState.bugsnax)



onMounted(() => {
  getAllBugsnax()
})



async function getAllBugsnax() {
  try {
    await bugsnaxService.getAllBugsnax()
  }
  catch (error) {
    Pop.error(error, 'Could not get bugsnax!');
    logger.error('Could not get bugsnax!', error);

  }
}





</script>


<template>

  <div class="container">
    <div class="row">
      <div v-for="bug in bugsnax" :key="bug.id" class="col-12 col-md-3">
        <BugsnaxCard :bugsnaxProp="bug" />
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>