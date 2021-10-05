<template >
<v-col cols="auto">
      <v-dialog
        transition="dialog-top-transition"
       max-width="700px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            dark
            fab
            v-on="on"
            color="amber accent-4"
            small
          >
          <img  width="25px" height="25px" src="../assets/new_dish.png" >
          </v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card color="amber lighten-5">
            <v-toolbar
              color="amber accent-4"
              
            >
            <v-card-title>Добавить новое блюдо в меню</v-card-title>
            </v-toolbar>
            <form action="POST">
            <v-card-text>
              
                    <v-container class="mt-10">
                    <v-row>
                        <v-col
                        cols="12"
                        sm="6"
                        
                        >
                        <v-text-field
                            v-model="postData.title"
                            label="Название блюда"
                            outlined
                            color="black"
                        ></v-text-field>
                        
                        </v-col>
                          <v-col
                        cols="12"
                        sm="6"
                     
                        >
                        <v-text-field
                            v-model="postData.country"
                            label="Страна"
                            outlined
                            color="black"
                        ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col
                        cols="12"
                        sm="4"
                        
                        >
                        <v-text-field
                            v-model="postData.price"
                            label="Цена"
                            outlined
                            color="black"
                        ></v-text-field>
                        </v-col>

                        <v-col
                        cols="12"
                        sm="4"
                        >
                         <v-card-text>
                          <v-slider
                            v-model="postData.spicy"
                            label="Острота"
                            max="5"
                            min="0"
                            step="1"
                            color="red"
                            ticks="always"
                            tick-size="1"
                            thumb-label="always"
                          ></v-slider>
                        </v-card-text>
                       </v-col>
                       <v-col cols="12" sm="4">
                           <v-checkbox
                              label="Вегатарианское?"
                              color="success"
                              v-model="postData.vegetable"
                            ></v-checkbox>
                       </v-col>
                    </v-row>
                    <v-row>
                      <v-col
                          cols="12"
                          sm="6"
                        >
                           <v-textarea
                              v-model="postData.description"
                              label="Описание"
                              color="black"
                              no-resize
                              outlined
                              rows="3"
                            >{{postData.description}}</v-textarea>
                        </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                      >
                      <v-file-input
                        outlined
                        name="img"
                        accept="image/*"
                        color="black"
                        label="Изображение"
                        v-model="postData.img"
                      ></v-file-input>
                      </v-col>
                    </v-row>
                  </v-container>
               
            </v-card-text>
            <v-card-actions 
            class="justify-end">
              <v-btn
                text
                color="success"
                @click="submitDishData();
                updateDataClick(); 
                dialog.value = false"
              >
                  Добавить
              </v-btn>
              <v-btn
                text
                color="error"
                @click="dialog.value = false"
              >Отмена</v-btn>
            </v-card-actions>
          </form>  
          </v-card>
          
        </template>
      </v-dialog>
    </v-col>
</template>

<script>
import axios from 'axios'

export default {
    
  data() {
    return {
      postData: {
        title: "",
        country: "",
        price: "",
        img: null,
        description: "",
        spicy: 0,
        vegetable: 0,
        
      }
    }
  },

  methods: {
    submitDishData() {

        console.log(this.postData) 

        const formData = new FormData()
         formData.append("title", this.postData.title)
         formData.append("country", this.postData.country)
         formData.append("price", this.postData.price)
         formData.append("img", this.postData.img)
         formData.append('description', this.postData.description ? this.postData.description : "")
         formData.append('spicy', this.postData.spicy)
         formData.append('vegetable', this.postData.vegetable ? 1 : 0 )

        axios.post('http://localhost:5001/menu', formData)
        .then((res) => console.log(`Success! ${res}`))
        .catch((e) => console.log(`Failure ${e}`))

        this.postData = {}
    },

    updateDataClick() {
      this.$root.$emit('updateData')
    }
   
  },
}
</script>

<style>

</style>
