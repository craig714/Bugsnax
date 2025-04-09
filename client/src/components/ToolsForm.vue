<script setup>
import { toolsService } from "../services/ToolsService.js";
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';


const editableToolsData = ref({
  name: '',
  picture: '',
  description: '',
  location: 'somewhere'
})

async function createTools() {
  try {
    const toolsData = editableToolsData.value
    await toolsService.createTools(toolsData)
    editableToolsData.value = {
      name: '',
      picture: '',
      description: '',
      location: ''
    }
    Pop.success('Tool created!');
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
          <h2 class="mb-3">Tools Form</h2>
          <form @submit.prevent="createTools()" class="fs-3">
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input v-model="editableToolsData.name" type="text" class="form-control" id="name">
            </div>
            <div class="mb-3">
              <label for="picture" class="form-label">Picture</label>
              <input v-model="editableToolsData.picture" type="url" class="form-control" id="picture">
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">Description</label>
              <textarea v-model="editableToolsData.description" name="" id="description"
                class="form-control"></textarea>
            </div>
            <div class="mb-3">
              <label for="location" class="form-label">Location</label>
              <input id="location" v-model="editableToolsData.location" type="text" class="form-control">
            </div>
            <div>
              <button class="btn btn-outline-secondary fs-2" type="submit">Submit Tool!</button>
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