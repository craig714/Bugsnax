<script setup>
import { AppState } from '@/AppState.js';
import { sauceLocationsService } from '@/services/SauceLocationsService.js';
import { saucesService } from '@/services/SaucesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';



const saucesLocations = computed(() => AppState.sauceLocation)
const sauces = computed(() => AppState.activeSauce)
const route = useRoute()


onMounted(() => {
  getSaucesById()
  getLocationBySauceId()
})


async function getLocationBySauceId() {
  try {
    const sauceId = route.params.sauceId
    await sauceLocationsService.getLocationBySauceId(sauceId)
  }
  catch (error) {
    Pop.error(error, 'Could not get sauces by Id');
    logger.error('Could not get sauces by Id', error)
  }
}

async function getSaucesById() {
  try {
    const sauceId = route.params.sauceId
    await saucesService.getSaucesById(sauceId)
  }
  catch (error) {
    Pop.error(error, 'Could not get sauces by Id');
    logger.error('Could not get sauces by Id', error)
  }
}







</script>


<template>
  <div v-if="sauces" class="container">
    <div class="row">
      <div class="col-12">
        <div class="fw-bold fs-1 d-flex justify-content-center">
          {{ sauces.name }}
        </div>
        <img class="cover-img" :src="sauces.picture" alt="">
      </div>
      <div class=" mt-5 fs-4">
        <p class="fw-bold">Location/Locations:</p>
        <div v-if="saucesLocations && saucesLocations.length > 0">
          <div v-for="location in saucesLocations" :key="location.locationId">
            {{ location.location.name }}
          </div>
        </div>
        <p v-else>No known location</p>
      </div>
      <div class="mt-5 fs-4">
        <p>Description:</p> <span>{{ sauces.description }}</span>
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