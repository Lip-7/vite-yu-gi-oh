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
      const params = this.getParams()
      const url = store.baseUrl + store.endpoint;
      axios.get(url, {params}).then(res => {
        store.cardsList = res.data.data;
        console.log(store.cardsList);
      });
    },
    getParams() {
      const options = {};
      const params = {};
      for (let key in store.search) {
        if (store.search[key]) {
          params[key] = store.search[key];
        }
      }
      return options.params = params
    }
    
  },
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent
  },
  mounted() {
    store.endpoint = 'cardinfo.php' /* ?num=40&offset=0 */;
    this.getCards();
  }
}
</script>

<style lang="scss" scoped></style>