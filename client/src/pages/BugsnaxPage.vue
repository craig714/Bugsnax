<script setup>
import { AppState } from '@/AppState.js';
import BugsnaxCard from '@/components/BugsnaxCard.vue';
import { bugsnaxService } from '@/services/BugsnaxService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
// @ts-ignore
import bugsnaxBG from '@/assets/img/Bugsnax_loading.webp';

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

  <body :style="{ backgroundImage: `url(${bugsnaxBG})` }">

    <div class="container">
      <div class="row">
        <div v-for="bug in bugsnax" :key="bug.id" class="col-12 col-md-3">
          <BugsnaxCard :bugsnaxProp="bug" />
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