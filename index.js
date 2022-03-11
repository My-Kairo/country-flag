// const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];

// const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];

let countries = [
  {name: 'Argentina', flag: '🇦🇷'},
  {name: 'Brazil', flag: '🇧🇷'},
  {name: 'Chile', flag: '🇨🇱'},
  {name: 'Zambia', flag: '🇿🇲'},
  {name: 'Uganda', flag: '🇺🇬'},
  {name: 'Malawi', flag: '🇲🇼'},
  {name: 'Rwanda', flag: '🇷🇼'},
  {name: 'Ireland', flag: '🇮🇪'},
  {name: 'Switzerland', flag: '🇨🇭'},

]

const countryFlag = document.querySelector(".flags");
const sortedElem = document.querySelector(".display");
const addBtnElem = document.querySelector(".addBtn");
const addTextElem = document.querySelector(".addText");
const addFlagElem = document.querySelector(".flegz")
const displayElem = document.querySelector(".display");
const sortElem = document.querySelector(".sorting ");
const searchElem = document.querySelector(".search_input")

let list = ()=> '<ul>' + countries.map(function(country, index){
  const { flag, name} = country;  
  return '<li>' + flag + '  ' + '-' + '  ' + name + '</li>';
}).join('') + '</ul>';

countryFlag.innerHTML = list();


function addCountries(event){
  let reggi = /[a-zA-z]$/g.test(addTextElem.value);
  let reg = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/.test(addFlagElem.value);
    
  let countryName = addTextElem.value.charAt(0).toUpperCase() + addTextElem.value.slice(1).toLowerCase();

      console.log(countryName)
      console.log(reg);
        if (reggi && reg){
          countries.push({
            name: countryName, flag: addFlagElem.value
          })
          console.log(countries);
        }
        countryFlag.innerHTML = list()    
}

  addBtnElem.addEventListener('click', addCountries);

  let sorted = () => '<ul>' + countries.sort(function (first, second){
    if (first.name < 
      second.name) return -1;
      if (first.name > 
      second.name) return 1;
      return 0;
  }).join('') + '</ul>';
  console.log(countries);
  
  sortedElem.innerHTML = sorted();
  sortElem.addEventListener('click', sorted)


  // let data = countries.
  let filtered = (data) => countries.filter(value => {
    let filterData = [];
    for ( let i = 0; i < data.length; i++){
      value = value.toLowerCase()
      let name = data[i].name.toLowerCase()
      if (name.includes(value)){
        filterData.push(data[i])
      }
    }
    return value == flagz;
});
searchElem.addEventListener('click', filtered)



const instance = addCountries();

let storage = (data) => {
  if (data) {
    let key = instance.addCountries();
    localStorage.setItem('countries', JSON.stringify(key))
  }
  location.reload();
  console.log(key);
}


let adding = [];

if(localStorage['name']){
  let names = JSON.parse(localStorage.getItem('name'))
}