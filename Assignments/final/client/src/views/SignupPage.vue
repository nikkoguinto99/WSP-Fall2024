<script setup lang="ts">

</script>

<template>
<div class="level-item">
  <div class="column is-half">
    <div class="container">
      <div>
        <div class="field">
  <label class="label">First Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="First Name">
  </div>
</div>

<div class="field">
  <label class="label">Last Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Last Name">
  </div>
</div>

<div class="field">
  <label class="label">Date of Birth</label>
  <div class="control">
    <input class="input" type="date" placeholder="Last Name">
  </div>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Email input" value="silverhand@hawkmail.edu">
    <span class="icon is-small is-left">
      <i class="far fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <p class="help is-danger">This email is invalid</p>
</div>

<div class="field">
  <label class="label">Membership Type</label>
  <div class="control">
    <div class="select">
      <select>
        <option>Free Membership</option>
        <option>Standard Membership</option>
        <option>Membership +</option>
      </select>
    </div>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox">
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Submit</button>
  </div>
  <RouterLink to="/">
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</RouterLink>
</div>
    </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>