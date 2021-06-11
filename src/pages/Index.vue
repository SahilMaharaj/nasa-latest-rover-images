<template>
  <Layout>
    <h1 class="heading">Mars Rover Latest Photos</h1>

        
      <Pager class="pagination" :info="$page.allPhotos.pageInfo" :showLinks="true" />
  
    <ul>
      <li v-for="edge in $page.allPhotos.edges" :key="edge.node.id">
          <g-image :src="edge.node.img"></g-image>
          <div class="date">SOL - {{ edge.node.sol }} - {{ edge.node.title }}</div>
      </li>
    </ul>
    <Pager class="pagination" :info="$page.allPhotos.pageInfo" :showLinks="true" />
  </Layout>
</template>

<page-query>
query allPhotos ($page: Int) {
  allPhotos: allPhoto (perPage: 21, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
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
import { Pager } from 'gridsome'

export default {
  metaInfo: {
    title: 'Mars Rover Photos',
    titleTemplate: '%s | By Sahil Maharaj'
  },
  components: {
    Pager
  },
  data() {
    return {
      images: [],
      mars: '',
    }
  },
  async asyncData(context) {
    const mars = await fetch('https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03144/opgs/edr/ncam/NRB_676595786EDR_S0882130NCAM00567M_.JPG').then((res) => res.json());
    
    return {
      mars: context.$cloudinary.image.fetchRemote(mars.image)
    }
  }
}
</script>

<style>
.heading {
  color: #fc3e22;
  font-family: 'Roboto', sans-serif;
}

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
    color: #fc3e22;
    font-weight: bold;
}

.pagination {
    text-align: center;
    font-size: 30px;
    margin-bottom: 20px;
}

.pagination a {
  border: 1px solid #0b3d91;
  text-decoration: none;
  padding: 0px 15px 5px;
  margin: 0 5px;
  color: #0b3d91;
}

.pagination a.active {
  background-color: #0b3d91;
  border: 1px solid #0b3d91;
  color: #fff;
}

@media only screen and (max-width: 600px) {
  .header {
    justify-content: center;
  }
  
  .heading {
    text-align: center;
    font-size: 24px;
    line-height: 26px;
  }
  
  ul {
    grid-template-columns: 1fr;
  }

  .pagination {
    font-size: 16px;
  }

  .pagination a {
    padding: 0 10px 3px;
  }
}
</style>
