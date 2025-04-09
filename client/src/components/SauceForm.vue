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
  }
  catch (error) {
    Pop.error(error);
  }
}
</script>


<template>
  <section class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <section>
          <h2>Sauce Form</h2>
          <form @submit.prevent="createSauce()">
            <div>
              <label for="name">Name</label>
              <input v-model="editableSauceData.name" id="name" type="text">
            </div>
            <div>
              <label for="picture">Picture</label>
              <input v-model="editableSauceData.picture" id="picture" type="text">
            </div>
            <div>
              <label for="descriptionBox">Description</label>
              <textarea v-model="editableSauceData.description" name="description" id="descriptionBox"></textarea>
            </div>
            <div>
              <button class="btn btn-outline-secondary" type="submit">Submit Sauce!</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped></style>