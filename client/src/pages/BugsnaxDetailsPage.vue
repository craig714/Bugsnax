<script setup>
import { AppState } from '@/AppState.js';
import { Bugsnax } from '@/models/Bugsnax.js';
import { bugsnaxService } from '@/services/BugsnaxService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const bugsnax = computed(() => AppState.activeBugsnax)
const route = useRoute()


defineProps({
  bugsnaxArrayProp: { type: Bugsnax, required: true }
})




onMounted(() => {
  getBugsnaxById()
})


async function getBugsnaxById() {
  try {
    const bugsnaxId = route.params.bugsnaxId
    await bugsnaxService.getBugsnaxById(bugsnaxId)
  }
  catch (error) {
    Pop.error(error, 'Could not get bugsnax by Id');
    logger.error('Could not get bugsnax by Id', error)
  }
}

</script>


<template>
  <div v-if="bugsnax" class="container">
    <div class="row">
      <div class="col-12">
        <div class="fw-bold fs-1 d-flex justify-content-center">
          {{ bugsnax.name }}
        </div>
        <div>
          <img class="cover-img mt-4" :src="bugsnax.picture" alt="">
        </div>
        <div class="mt-5 fs-4">
          <p class="fw-bold">Description:</p> <span>{{ bugsnax.description }}</span>
        </div>
        <div class="mt-5 fs-4">
          <p class="fw-bold">Strategy:</p><span>{{ bugsnax.strategy }}</span>
        </div>
        <div class="d-flex justify-content-between mt-5">

        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.cover-img {
  width: 100%;
  max-height: 600px;
  object-fit: cover;
  border-radius: 10px;
}
</style>