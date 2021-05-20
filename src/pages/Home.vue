<template>
  <v-container>
    <v-row>
      <v-col>
        <SearchBar />
      </v-col>
    </v-row>

     <v-row>
      <v-col>
        <ShowBeers :beers = "beers"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ShowBeers from '../components/ShowBeers'
import SearchBar from '../components/SearchBar'
import api from '../services/api'

export default ({
    name: "Home",
    components: {
        ShowBeers,
        SearchBar
    },

    data() {
        return {
            beers: [],
            
        }
    },

    mounted() {
        api.get('/beers',{
          params: {
            beer_name: this.textBeer
          }
        }).then(response => {
            this.beers = response.data;
        });
    }

})
</script>
