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
const addBtnElem = document.querySelector(".addBtn");
const addTextElem = document.querySelector(".addText");
const addFlagElem = document.querySelector(".flegz")
const displayElem = document.querySelector(".display");
const sortElem = document.querySelector(".sorting ");

let list = ()=> '<ul>' + countries.map(function(country, index){
  const { flag, name} = country;  
  return '<li>' + flag + '  ' + '-' + '  ' + name + '</li>';
}).join('') + '</ul>';

countryFlag.innerHTML = list();

// if (localStorage['countries']){
//   countries = JSON.parse(localStorage.getItem('countries'))
// }else {
//   return countries;
// }

// let myList = {name: addTextElem.value, flag:addFlagElem};

// let storList = localStorage.setItem('countries');
// if (localStorage['storList']) {
//   countries = JSON.parse()
// }


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
        countryFlag.innerHTML = list();

      
}

// function sorted(){
//     let sortCountry = countries.sort();
//     addTextElem.innerHTML = {addTextElem: sortCountry};
    // return Object.keys(countries).sort()

    let ordered = Object.keys(countries).sort() (obj, key) => obj[key] = countries[key];
     obj;
      {}

  sortElem.addEventListener('click', ordered);


  addBtnElem.addEventListener('click', addCountries);

// function addCountries (event){
  //   // let reg = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;
  
  //   let reg = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/.test(addFlagElem.value)
  
  //   let countryName = addTextElem.value.charAt(0).toUpperCase() + addTextElem.value.slice(1).toLowerCase();
  //   let regex = /[a-zA-Z]$/g.test(countryName);
  
  
  //   // if (regex.test(addTextElem.value) && reg.test(addFlagElem.value)){
  
  //   if (regex != '' && reg != ''){
  //       console.log(regex)
  //       console.log(addFlagElem.value)
  //       countries.push({
  //       name: regex, flag: addFlagElem.value
  //   })
  //   console.log(countries);
  //   }return countries;
  
  // }




//     let theStored = []

//   if (localStorage['countries']) {
//     theStored = JSON.parse(localStorage.getItem('countries'))
//   }

//   const instance = addCountries(theStored);

// function storage (data) {
//   if (data) {
//     let key = instance.addCountries();
//     localStorage.setItem('countries', JSON.stringify(key))
//   }
//   location.reload();
//   console.log(key);
// }


// let adding = [];

// if(localStorage['name']){
//   let names = JSON.parse(localStorage.getItem('name'))
// }

// let countryInstance = FlagCountries(names);

// function countryAdded () {
//    const regex = /[a-zA-z]$/g;
//    const reg = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;

//    if(!regex.test(addTextElem.value)){
//     displayElem.classList.add("red");
//      return displayElem.innerHTML = "Enter letters from A to Z!"
//    }
//    else {
//      countryInstance.addTheCountries(addTextElem.value)
//      displayElem.classList.remove("red")

//      let key = countryInstance.getCountries();
//      localStorage.setItem('name', JSON.stringify(key));
//    }
//    location.reload();
//    console.log(key)
   
// }
// addBtnElem.addEventListener('click', countryAdded);


// function sorted (){
//   let sortCountry = countries.sort();
//   addTextElem.innerHTML = {addTextElem: sortCountry};
// }
// sortElem.removeEventListener('click', sorted);