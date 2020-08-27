import HTTP from './utils/http.base';

export default {
    getItems: () => HTTP.get('items?key=52d6c330')
}