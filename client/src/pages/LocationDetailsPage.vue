<script setup>
import { AppState } from '@/AppState.js';
import { locationsService } from '@/services/LocationsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';



const location = computed(() => AppState.activeLocation)

const route = useRoute()

onMounted(() => {
  getLocationByName()
})

async function getLocationByName() {
  try {
    const locationName = route.name
    await locationsService.getLocationByName(locationName)
  }
  catch (error) {
    Pop.error(error, 'Could not get location');
    logger.log('Could not get location'.toUpperCase(), error)
  }
}

</script>


<template>
  <div></div>
</template>


<style lang="scss" scoped></style>