<template>
    <div>
        <h1>Test</h1>
        <div v-for="image in images" :key="image.public_id">
            <g-image class="img" :src="image.secure_url"></g-image>
        </div>
        
    </div>
</template>


<script>
export default {
    computed: {
    images() {
      return this.$page.images.edges.map(({ node }) => node)
    }
  }
}
</script>

<style scoped>
.img {
    max-width: 100%;
}
</style>
