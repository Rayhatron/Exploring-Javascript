const endpoint = 'https://gist.githubusercontent.com/Rayhatron/ffc3bc38cc27d71e3167aceb79b6fe0c/raw/d7fb31385485aa5a0fbb293ff7f9382e000247b7/cities.json';

const cities = [];

function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

function findMatches(wordToMatch, cities){
    return cities.filter(place => {
        //figure out if the city or province matches the word searched

        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.province.match(regex);
    });
}

function displayMatches(){
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const provinceName = place.province.replace(regex, `<span class="hl">${this.value}</span>`);

        return `
            <li>
                <span class="name">${cityName}, ${provinceName}</span>
                <span class="population">${numberWithCommas(place.population)}</span>
            `;
    }).join('');

    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
