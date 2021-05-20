<template>
  <v-container>
    <v-row>
      <v-col>
        <SearchBar />
      </v-col>
    </v-row>

     <v-row>
      <v-col>
        <ShowBeers />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ShowBeers from '../components/ShowBeers'
import SearchBar from '../components/SearchBar'

export default ({
    name: "Home",
    components: {
        ShowBeers,
        SearchBar
    }
})
</script>
