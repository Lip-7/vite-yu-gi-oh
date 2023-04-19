import { reactive } from 'vue';

export const store = reactive({
    cardsList: [],
    baseUrl: 'https://db.ygoprodeck.com/api/v7/',
    endpoint: '',
    search: {
        archetype: '',
        fname: '',
        num: 50,
        offset: 1
    }
})