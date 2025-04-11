<script setup>
import { AppState } from '@/AppState.js';
import BugsnaxCard from '@/components/BugsnaxCard.vue';
import { bugsnaxLocationService } from '@/services/BugsnaxLocationsService.js';
import { locationsService } from '@/services/LocationsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';



const location = computed(() => AppState.activeLocation)
const bugsnax = computed(() => AppState.bugsnax)
const grumpuses = computed(() => AppState.grumpuses)
const sauces = computed(() => AppState.sauces)
const tools = computed(() => AppState.tools)
const quests = computed(() => AppState.quests)


const route = useRoute()

onMounted(() => {
  AppState.activeLocation = null
  AppState.bugsnax = []
  AppState.grumpuses = []
  AppState.sauces = []
  AppState.tools = []
  AppState.quests = []

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
          <div class="row">
            <p class="fw-bold">Bugsnax:</p>
            <div v-for="bugsnak in bugsnax" :key="bugsnak.id" class="col-md-2">
              <BugsnaxCard :bugsnaxProp="bugsnak" />
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">

            </div>
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