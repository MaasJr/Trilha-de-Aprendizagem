<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-center" id="heading">Cervejas Favoritas</h1>
      </v-col>
    </v-row>
    <ShowBeers v-if="this.favorites.length > 0" v-bind:beers="favorites" />
  </v-container>
</template>

<script>
  import { mapState } from 'vuex'
  import ShowBeers from '../components/ShowBeers'

  export default {
    name: 'Favorites',
    components: {
      ShowBeers
    },
    computed: mapState ({
      favorites: state => state.favorites
    })
  }
</script>