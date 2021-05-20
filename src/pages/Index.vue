<template>
  <Layout>
    <h2>Latest Photos</h2>
    <ul>
      <li v-for="edge in $page.allPhotos.edges" :key="edge.node.id">
          <img loading="lazy" :src="edge.node.img" />
          <div class="date">{{ edge.node.title }}</div>
      </li>
    </ul>

  </Layout>
</template>

<page-query>
query allPhotos {
  allPhotos: allPhoto {
    edges {
      node {
        id
        title
        sol
        img
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
ul {
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
  margin-bottom: 30px;
}

ul li {
  list-style: none;
  position: relative;
}

img {
    width: 100%;
    object-fit: cover;
    height: 100%;
}

.date {
    position: absolute;
    top: 0;
    left: 0;
    bottom: auto;
    right: auto;
    font-style: italic;
    color: red;
}
</style>
