<template>
  <div>
    <v-app-bar
      color="black accent-4"
      dense
      dark
    >
      <router-link to="/" style="color: inherit; text-decoration: none">
        <v-toolbar-title style="font-weight: 500; font-size: 1.5rem;">
          BeerS
        </v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <v-btn
              color="error"
              dark
              to="/favorites"
            >
              Favorites
            </v-btn>
  
    </v-app-bar>
  </div>
</template>