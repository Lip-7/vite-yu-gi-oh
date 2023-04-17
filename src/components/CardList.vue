<template>
    <div class="wrapper p-4">
        <div class="cardListHeader mb-4">
            <h3>Found tot cards</h3>
        </div>
        <div class="cardList">
            <div class="row">
                <CardComponent v-for="card in store.cardsList" :card="card"/>
            </div>
        </div>
    </div>
</template>
  
<script>
import { store } from '../data/store';
import CardComponent from './CardComponent.vue';
export default {
    name: 'CardList',
    data() {
        return {
            store,
        }
    },
    methods: {

    },
    components: {
        CardComponent,
    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped></style>