<script setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.customText" class="custom-hero-text">
    <div class="container">
      <p class="text-content">{{ frontmatter.customText }}</p>
    </div>
  </div>
</template>

<style scoped>
.custom-hero-text {
  /* Odstęp pionowy (góra/dół) pomiędzy sekcjami */
  padding-top: 40px;
  padding-bottom: 20px;
}

.container {
  margin: 0 auto;
  max-width: 1152px; /* Standardowa maksymalna szerokość siatki w VitePress */
  padding: 0 24px;   /* Dokładnie taki sam padding, jakiego VitePress używa dla krawędzi Hero i Features */
}

.text-content {
  margin: 0;
  text-align: left;
  font-size: 1.15rem;
  line-height: 1.6;
  color: var(--vp-c-text-2); /* Kolor stonowanego tekstu w motywie */
}

/* Wzmocnienie wyrównania dla ekranów desktopowych */
@media (min-width: 640px) {
  .container {
    padding: 0 24px;
  }
}

@media (min-width: 960px) {
  .container {
    padding: 0 0px;
  }
}
</style>