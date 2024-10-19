<script setup lang="ts">

</script>

<template>
  <div class="container">
  <div class="notification is-primary">
   Please send us your feedback!
  </div>
</div>
  <div class="container">
    <div class="card">
  <div class="card-content">
    <div class="content">
      <div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Enter Full Name">
  </div>
</div>

<div class="field">
  <label class="label">Username</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="text" placeholder="Enter Username">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
  </div>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Enter Email">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
  </div>
</div>

<div class="field">
  <label class="label">Message</label>
  <div class="control">
    <textarea class="textarea" placeholder="Enter Message"></textarea>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Submit</button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>
    </div>
  </div>
</div>
  </div>
</template>

<style scoped>

</style>
