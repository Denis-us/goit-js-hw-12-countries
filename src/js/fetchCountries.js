import { onError } from '../index.html';

function searchCountries(countryName) {

    return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`).then(response => {
        return response.json()})
   .catch(onError)
}

export default { searchCountries };