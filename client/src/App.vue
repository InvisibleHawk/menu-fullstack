<template>
  <v-app>
    <appbar/>
    <div style="height: 70px;"></div>
    <main-content/>
  </v-app>
</template>

<script>
import Appbar from './components/Appbar.vue'
import MainContent from './components/MainContent.vue'


export default {
  name: 'App',

  components: {
    Appbar,
    MainContent
  }

};
</script>

<style>
  :root {
    overflow-y: auto ;
  }

  ::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-track {
  background: #FFF8E1;
}

::-webkit-scrollbar-thumb {
    background: #FFAB00;
    border-radius: 3px ;
  }
</style>
