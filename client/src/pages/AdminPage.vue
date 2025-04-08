<script setup>
import { ref } from 'vue';
import BugsnaxForm from '@/components/BugsnaxForm.vue';
import GrumpusForm from '@/components/GrumpusForm.vue';
import LocationsForm from '@/components/LocationsForm.vue';
import SauceForm from '@/components/SauceForm.vue';

const activeComp = ref(BugsnaxForm);
</script>

<template>
  <div>
    <p>Choose which form you want to access:</p>
    <button @click="activeComp = BugsnaxForm">Bugsnax</button>
    <button @click="activeComp = GrumpusForm">Grumpus</button>
    <button @click="activeComp = LocationsForm">Locations</button>
    <button @click="activeComp = SauceForm">Sauces</button>

    <div>
      <component :is="activeComp" />
    </div>
  </div>
</template>


<style lang="scss" scoped></style>