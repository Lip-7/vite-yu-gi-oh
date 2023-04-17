import { reactive } from 'vue';

export const store = reactive({
    cardsList: [1,2],
    baseUrl: 'https://db.ygoprodeck.com/api/v7/',
    endpoint: ''
})