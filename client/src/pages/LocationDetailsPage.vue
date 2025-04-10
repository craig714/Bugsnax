<script setup>
import { AppState } from '@/AppState.js';
import { bugsnaxLocationService } from '@/services/BugsnaxLocationsService.js';
import { locationsService } from '@/services/LocationsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';



const location = computed(() => AppState.activeLocation)
const bugsnax = computed(() => AppState.bugsnax)

const route = useRoute()

onMounted(() => {
  getAllLocations()
})

async function getAllLocations() {
  try {
    await locationsService.getAllLocations()
    setActiveLocation()
    getBugsnaxForThisLocation()
  }
  catch (error) {
    Pop.error(error, 'Could not get all locations');
    logger.log('Could not get all locations'.toUpperCase(), error)
  }
}

async function getBugsnaxForThisLocation() {
  try {
    const locationId = location.value.id
    await bugsnaxLocationService.getBugsnaxLocationsByLocationId(locationId)
  }
  catch (error) {
    Pop.error(error, 'Could not get bugsnaxLocations');
    logger.log('Could not get bugsnaxLocations'.toUpperCase(), error)
  }
}

function setActiveLocation() {
  try {
    const locationName = route.name
    locationsService.setActiveLocation(locationName)
  }
  catch (error) {
    Pop.error(error, 'Could not Set activeLocation');
    logger.log('Could not Set activeLocation'.toUpperCase(), error)
  }
}

</script>


<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="fw-bold fs-1 d-flex justify-content-center">
          <p>{{ location?.name }}</p>
        </div>
        <div>
          <img class="cover-img mt-4" :src="location?.picture" :alt="`Picture of ${location?.name}`">
        </div>
        <div class="mt-3 fs-4">
          <p class="fw-bold">Bugsnax:</p>
          <div v-for="bugsnak in bugsnax" :key="bugsnak.id">
            <p>{{ bugsnak.name }}</p>
            <p>{{ bugsnak.picture }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.cover-img {
  width: 100%;
  max-height: 80dvh;
  object-fit: cover;
  border-radius: 10px;
}
</style>