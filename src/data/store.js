import { reactive } from 'vue';

export const store = reactive({
    cardsList: [],
    baseUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    endpoint: ''
})