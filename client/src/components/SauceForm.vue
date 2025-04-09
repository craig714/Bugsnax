<script setup>
import { saucesService } from '@/services/SaucesService.js';
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';


const editableSauceData = ref({
  name: '',
  picture: '',
  description: ''
})

async function createSauce() {
  try {
    const sauceData = editableSauceData.value
    await saucesService.createSauce(sauceData)
    editableSauceData.value = {
      name: '',
      picture: '',
      description: ''
    }
    Pop.success('Sauce created!');
  } catch (error) {
    Pop.error(error);
  }
}
</script>


<template>
  <section class="container">
    <div class="row justify-content-center">
      <div class="col-md-6 border p-4 rounded">
        <section>
          <h2 class="mb-3">Sauce Form</h2>
          <form @submit.prevent="createSauce()" class="fs-3">
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input v-model="editableSauceData.name" id="name" type="text" class="form-control">
            </div>
            <div class="mb-3">
              <label for="picture" class="form-label">Picture</label>
              <input v-model="editableSauceData.picture" id="picture" type="text" class="form-control">
            </div>
            <div class="mb-3">
              <label for="descriptionBox" class="form-label">Description</label>
              <textarea v-model="editableSauceData.description" name="description" id="descriptionBox"
                class="form-control"></textarea>
            </div>
            <div>
              <button class="btn btn-outline-secondary fs-2" type="submit">Submit Sauce!</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
/* You can add more custom styling here if needed */
</style>