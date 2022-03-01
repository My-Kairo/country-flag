const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];

const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];

const countryFlag = document.querySelector(".flags");
const addBtnElem = document.querySelector(".addBtn");
const addTextElem = document.querySelector(".addText");
const displayElem = document.querySelector(".display");
const sortElem = document.querySelector(".sorting");

let list = '<ul>' + countries.map(function(country, index){
    return '<li>' + country + '  ' + '-' + '  ' + flags[index] + '</li>';
}).join('') + '</ul>';

countryFlag.innerHTML = list;


let adding = [];

if(localStorage['name']){
  let names = JSON.parse(localStorage.getItem('name'))
}

let countryInstance = FlagCountries(names);

function countryAdded () {
   const regex = /[a-zA-z]$/g;

   if(!regex.test(addTextElem.value)){
    displayElem.classList.add("red");
     return displayElem.innerHTML = "Enter letters from A to Z!"
   }
   else {
     countryInstance.addTheCountries(addTextElem.value)
     displayElem.classList.remove("red")

     let key = countryInstance.getCountries();
     localStorage.setItem('name', JSON.stringify(key));
   }
   location.reload();
   console.log(key)
   
}
addBtnElem.addEventListener('click', countryAdded);


function sorted (){
  let sortCountry = countries.sort();
  addTextElem.innerHTML = {addTextElem: sortCountry};
}
sortElem.removeEventListener('click', sorted);