<template>
  <Navbar />
  <main class="pt-24">
    <router-view />
  </main>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
</script>
