<template>
  <HeaderComponent/>
  <MainComponent/>

</template>

<script>
import axios from 'axios';
import { store } from './data/store.js';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
export default {
  name: 'App',
  data() {
    return {

    }
  },
  methods: {
    getCards() {
      const url = store.baseUrl + store.endpoint
      axios.get(url).then(res => {
        store.cardsList = res.data.data;
        console.log(store.cardsList);
      });
    }
  },
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent
  },
  mounted() {
    store.endpoint = 'cardinfo.php?num=40&offset=0'
    this.getCards()
  }
}
</script>

<style lang="scss" scoped></style>