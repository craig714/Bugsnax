<script setup>
import { ref } from 'vue';


const editableLocationsData = ref({

})
</script>


<template>
  <section class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <section>
          <h2>Location Form</h2>
          <form @submit.prevent="">
            <div>
              <label for="">Name</label>
              <input type="text">
            </div>
            <div>
              <label for="">Picture</label>
              <input type="text">
            </div>
            <div>
              <label for="description">Description</label>
              <textarea name="" id="description"></textarea>
            </div>
          </form>
        </section>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped></style>