<template>
  <div style="max-width: 500px" class="mx-auto">
    <v-row>
      <v-col>
        <v-text-field v-model="itemSearch" v-on:keyup.enter="search" placeholder="Procure aqui"></v-text-field>
      </v-col>
      <v-col cols="auto" class="px-0">
        <v-btn color="#fff" x-large @click="search">Procurar</v-btn>
      </v-col>
    </v-row>
  </div>
</template>


<script>

export default ({
    name: 'SearchBar',
    data() {
      return{
        itemSearch: ''
      }
    },
    methods: {
      search() {
        this.$store.commit('search', this.itemSearch);
      }
    }

})
</script>

