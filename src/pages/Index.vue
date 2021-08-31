<template>
  <Layout>
    <h1 class="heading">Mars Rover Latest Photos</h1>        
      <Pager class="pagination" :info="$page.allPhotos.pageInfo" :showLinks="true" />  

    <ul>
      <li v-for="edge in $page.allPhotos.edges" :key="edge.node.id">
     
            <g-image :id="edge.node.id" class="thumbnail-img" @click="show(edge.node.img, edge.node.title)" :src="edge.node.img"></g-image>
            <div class="date">{{ edge.node.title }}</div>

            <modal name="example" 
                  :adaptive="true" 
                  :clickToClose="false"
                  :max-width="1000"
                  width="100%"
                  height="auto">
              <div class="modal-content">
                <g-image class="modal-img" :src="selectedImage"></g-image>
                <button @click="hide" class="close-btn">x</button>
                <div class="date">{{ selectedID }}</div>
              </div>
            </modal>             
            
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
  data() {
    return {
      selectedImage: '',
      url: '',
      selectedID: '',
      id: ''
    }
  },
  metaInfo: {
    title: 'Mars Rover Photos',
    titleTemplate: '%s | By Sahil Maharaj'
  },
  components: {
    Pager
  },
  methods: {
    show(url, id) {
      this.selectedImage = url
      this.selectedID = id
      this.$modal.show('example');
    },
    hide() {
      this.$modal.hide('example')
    }
  },
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

.v--modal {
  box-shadow: none;
}

.v--modal-overlay {
  background: rgba(255, 255, 255, 0.1);
}

.v--modal-top-right::after {
  position: absolute;
  content: 'X';
  color: #000;
  padding: 5px;
}

.close-btn {
  color: #fc3e22;
  position: absolute;
  top: 0;
  right: 0;
  left: auto;
  bottom: auto;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
  background: none;
  border: none;
  padding: 10px 15px;
}

.modal-img {
  display: block;
}

.thumbnail-img {
  cursor: pointer;
}

.date {
    position: absolute;
    top: auto;
    left: 0;
    bottom: 0;
    right: auto;
    font-style: italic;
    background-color: #0b3d91;
    color: #fff;
    padding: 5px;
    font-weight: normal;
    font-size: 12px;
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
