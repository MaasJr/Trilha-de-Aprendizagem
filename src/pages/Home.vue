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
import ShowBeers from '../components/ShowBeers';
import SearchBar from '../components/SearchBar';
import { mapState} from 'vuex';


export default ({
    name: 'Home',
    components: {
      ShowBeers,
      SearchBar
    },
    
    computed: mapState ({
      beers: state => state.beers
    }),

    created() {
      this.$store.getters.getAllBeers;
    }

})
</script>
