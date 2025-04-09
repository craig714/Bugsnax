<script setup>
import { AppState } from '@/AppState.js';
import { grumpusesService } from '@/services/GrumpusesService.js';
import { grumpusesLocationService } from '@/services/GrumpusLocationsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute()
const grumpus = computed(() => AppState.activeGrumpus)
const grumpusLocations = computed(() => AppState.grumpusLocations)


onMounted(() => {
  getGrumpusesById()
  getLocationsByGrumpusId()
  AppState.activeGrumpus = null
})


async function getLocationsByGrumpusId() {
  try {
    const grumpusId = route.params.grumpusId
    await grumpusesLocationService.getLocationsByGrumpusId(grumpusId)
  }
  catch (error) {
    Pop.error(error, 'Could not get grumpuses by location');
    logger.error('Could not get grumpuses by location', error)
  }
}

async function getGrumpusesById() {
  try {
    const grumpusId = route.params.grumpusId
    await grumpusesService.getGrumpusesById(grumpusId)
  }
  catch (error) {
    Pop.error(error, 'Could not get grumpuses by Id');
    logger.error('Could not get grumpuses by Id', error)
  }
}



</script>


<template>
  <div v-if="grumpus" class="container">
    <div class="row">
      <div class="col-12">
        <div class="fw-bold fs-1 d-flex justify-content-center">
          {{ grumpus.name }}
        </div>
        <div>
          <img class="cover-img mt-4" :src="grumpus.picture" alt="">
        </div>
        <div class=" mt-5 fs-4">
          <p class="fw-bold">Location/Locations:</p>
          <div v-if="grumpusLocations && grumpusLocations.length > 0">
            <div v-for="location in grumpusLocations" :key="location.locationId">
              {{ location.location.name }}
            </div>
          </div>
          <p v-else>No known location</p>
        </div>
        <div class="mt-5 fs-4">
          <p>Description:</p> <span>{{ grumpus.description }}</span>
        </div>
        <div class="d-flex justify-content-between mt-5">
          <div>
            <span class="mt-5 fs-4">Likes:</span>
            <div v-if="grumpus.likes && grumpus.likes.length > 0">
              <div v-for="like in grumpus.likes" :key="like.name">
                {{ like.name }}
              </div>
            </div>
            <p v-else>None</p>
          </div>
          <div>
            <span class="mt-5 fs-4">disLikes:</span>
            <div v-if="grumpus.likes && grumpus.dislikes.length > 0">
              <div v-for="dislike in grumpus.dislikes" :key="dislike.name">
                {{ dislike.name }}
              </div>
            </div>
            <p v-else>None</p>
          </div>

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