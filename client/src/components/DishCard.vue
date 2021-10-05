<template>
  <v-card
  color="amber accent-1"
    class="mx-auto my-5"
    max-width="350"
  >
   
    <v-img
      class="align-end"
      height="250px"
      width="350px"
      :src="img"
    >
   <v-chip
      class="ma-4 float-end"
      color="amber accent-4"
      
    >
      {{country}}
    </v-chip>
      <v-card-title class="title" >
        <v-chip 
          color="amber lighten-5"
          label
        >
        {{title}}
        </v-chip>
        </v-card-title>
    </v-img>
     <v-chip
      outlined
      class="ma-2"
      color="red"
      v-if="spicy"
    >
    <span v-for="n in spicy" :key="n">
        🌶️
    </span>
    </v-chip>
     <v-chip
     outlined
      class="ma-2"
      color="green"
      v-if="vegetable"
    >
      🥦
    </v-chip>
    <p class="text-center" outlined>{{description}}</p>
    <v-chip
      class="ma-2 float-end"
      label
      color="amber accent-4"
    >
      {{price}} ₽
    </v-chip>


    
  </v-card>
</template>

<script>
export default {
    props: {
        title: String,
        price: Number,
        img: String,
        description: String,
        country: String,
        spicy: Number,
        vegetable: Number,
        

    }
}
</script>

<style>
  
</style>