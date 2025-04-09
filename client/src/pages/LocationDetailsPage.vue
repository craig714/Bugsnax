<script setup>
import { AppState } from '@/AppState.js';
import { locationsService } from '@/services/LocationsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';



const activelocation = computed(() => AppState.activeLocation)

const route = useRoute()

onMounted(() => {
  getAllLocations()
})

async function getAllLocations() {
  try {
    debugger
    await locationsService.getAllLocations()
    setActiveLocation()
  }
  catch (error) {
    Pop.error(error, 'Could not get all locations');
    logger.log('Could not get all locations'.toUpperCase(), error)
  }
}

// async function getLocationByIdUsingName() {
//   try {
//     debugger
//     await locationsService.getLocationByIdUsingName(locationName)
//   }
//   catch (error) {
//     Pop.error(error, 'Could not get location');
//     logger.log('Could not get location'.toUpperCase(), error)
//   }
// }

function setActiveLocation() {
  try {
    debugger
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
  <div></div>
</template>


<style lang="scss" scoped></style>