const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];

const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];

const countryFlag = document.querySelector(".flags");

let list = '<ul>' + countries.map(function(country, index){
    return '<li>' + country + '  ' + '-' + '  ' + flags[index] + '</li>';
}).join('') + '</ul>';

let addCountry = [];




countryFlag.innerHTML = list;
