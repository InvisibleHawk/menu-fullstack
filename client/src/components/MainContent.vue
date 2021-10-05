<template>
  <v-main class="amber lighten-5">
      <h1
      class="text-center mt-10" 
      v-if="menu === null || !menu.length">Пока ничего нет</h1>
      <v-container v-else class="d-flex flex-row flex-wrap">
          <dish-card 
          v-for="dish in menu"
          :key="dish.id" 
          :title="dish.title"
          :spicy="dish.spicy"
          :vegetable="dish.vegetable"
          :price="dish.price"
          :country="dish.country"
          :img="dish.img"
          :description="dish.description"
          />
          
      </v-container>
    </v-main>
</template>

<script>
import axios from 'axios'
import DishCard from './DishCard.vue'


export default {
    components: {
        DishCard
    },

    data() {
        return {
            menu: null
        }
    },

    methods: {
        getMenu() {
             axios.get('http://localhost:5001/menu')
             .then(res => {
                 this.menu = res.data.sort((a, b) => b.id - a.id)})
        },

       
    },
    
     mounted() {
         this.getMenu()
         this.$root.$on('updateData', () => {
            setTimeout(() => {
                this.getMenu()
            }, 1000)
         })
     },

}
</script>

<style>

</style>