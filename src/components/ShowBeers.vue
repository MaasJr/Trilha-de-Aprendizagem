<template>
  <div>
    <div class="d-flex flex-wrap justify-center" color="#f6f4e6">
      <v-card v-for="beer of beers" :key="beer.id" width="300px" class="ma-3" elevation="5">

        <v-icon v-if="!isFavorite(beer.id)" v-on:click="addToFavorites(beer.id, beer.name, beer.description, beer.image_url)" id="favorite" :key="beer.id" color="#ff4d4d">mdi-star-outline</v-icon>
          <v-icon v-else v-on:click="removeFromFavorites(beer.id)" id="favorite" :key="beer.id" color="#ff4d4d">mdi-star</v-icon>

        <v-img :src="beer.image_url" height="200px" contain class="my-3"></v-img>

        <v-card-title style="font-weight: 700">{{ beer.name }}</v-card-title>

        <v-card-subtitle class="my-1">{{ beer.tagline }}</v-card-subtitle>
      </v-card>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
      name: 'ShowBeers',
      props: ['beers'],
      computed: mapState ({
        favorites: state => state.favorites
      }),
      methods: {
        addToFavorites(id, name, desc, url){
          this.$store.commit('addFavorite', {id: id, name: name, description: desc, image_url: url})
        },
        removeFromFavorites(id){
          this.favorites.forEach((fav, index) => {
            if(fav.id == id){
              this.favorites.splice(index, 1)
            }
          });

        },
        isFavorite(id){
          if(this.favorites.length === 0){
            return false
          }
          else{
            return this.favorites.some(i => i.id == id)
          }
        }
      }
  }
</script>

<style scoped>
.fav-icon {
  z-index: 1;
}

.fav-icon:hover{
  cursor: pointer;
}
</style>
