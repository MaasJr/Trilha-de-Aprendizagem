<template>
  <div>
    <div class="d-flex flex-wrap justify-center" color="#f6f4e6">
      <v-card v-for="beer of beers" :key="beer.id" width="300px" class="ma-3" elevation="5">

        <v-icon class="fav-icon" color ="blue" large >mdi-star-outline</v-icon>

        <v-img :src="beer.image_url" height="200px" contain class="my-3"></v-img>

        <v-card-title style="font-weight: 700">{{ beer.name }}</v-card-title>

        <v-card-subtitle class="my-1">{{ beer.tagline }}</v-card-subtitle>
      </v-card>
    </div>
  </div>
</template>

<script>


export default ({
    name: "ShowBeers",

    props: [
      "beers"
    ]

    
})
</script>

<style scoped>
.fav-icon {
  z-index: 1;
}

.fav-icon:hover{
  cursor: pointer;
}
</style>
