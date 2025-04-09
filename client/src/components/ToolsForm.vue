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
          <h2>Tools Form</h2>
          <form @submit.prevent="createTools()">
            <div>
              <label for="">Name</label>
              <input v-model="editableToolsData.name" type="text">
            </div>
            <div>
              <label for="">Picture</label>
              <input v-model="editableToolsData.picture" type="url">
            </div>
            <div>
              <label for="description">Description</label>
              <textarea v-model="editableToolsData.description" name="" id="description"></textarea>
            </div>
            <div>
              <label for="location">Location</label>
              <input id="location" v-model="editableToolsData.location" type="text">
            </div>
            <div>
              <button class="btn btn-outline-secondary" type="submit">Submit Tool!</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped></style>