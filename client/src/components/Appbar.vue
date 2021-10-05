<template>
  <div>
    <v-app-bar
      height="70"
      color="amber accent-1"
      fixed
      dense
  
    >
    <v-spacer></v-spacer>
 
      <img src="../assets/logo.png"/>
     <v-toolbar-title class="ml-5">Menu List</v-toolbar-title>

     <v-spacer></v-spacer>
          
      <form-dish/>

    </v-app-bar>
  </div>
</template>


<script>
import FormDish from './FormDish.vue'

export default {
    components: {
        FormDish
     
    },

}
</script>