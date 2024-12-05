<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">

</script>

<template>
  <section class="hero is-halfheight is-danger">
    <div class="hero-body is-medium">
      <div class="columns is-one-third is-justify-content-space-between">
        <!-- Text Column -->
        <div class="column">
          <p class="title">Welcome to Samurai Fitness</p>
          <p class="subtitle">Wake up Samurai, we've got calories to burn</p>
          <br>
          <p>Please log in or create an account to begin your fitness journey</p>
        </div>
        <!-- Image Column -->
        <div class="column" id="img">
          <img src="../assets/logo.png" alt="Samurai Fitness Logo" style="width: 300px; height: auto;" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-body .columns {
  align-items: center;
}
#img {
  display: flex;
  padding-left: 25em;
  justify-content: right;
}
</style>
