function FlagCountries(country){
    let flagz = country || [];

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

    let regex = /[a-zA-z]$/g;
    let reg = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;


    function addTheCountries (names, flag){
        if (names.match(regex) && flag.match(reg)){
            if (!flagz.includes(names) && !flagz.includes(flag)) {
                flagz.push(names) && flag.push(flag)
                return true
            }else {
                return false
            }
        }
    }
    

    function getCountries (){
        return flagz;
    }
    

    let search = countries.filter(countrry => countrry.flag);

    // function getsearched (){
    //     return search;
    search()
    // }
    // search = () => flagz;
    // search()


    return {
        addTheCountries,
        getCountries,
        getsearched,
        search()
    }
}

// const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];

// const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];

// const countries = [
//     { name: 'Argentina', flag: "🇦🇷"}, 
//     { name: 'Brazil', flag: "🇧🇷"}, 
//     // { name: 'Brazil', flag: "🇧🇷"}, 
//     // { name: 'Brazil', flag: "🇧🇷"}, 
//     // { name: 'Brazil', flag: "🇧🇷"}, 
//     // { name: 'Brazil', flag: "🇧🇷"}, 
//     // { name: 'Brazil', flag: "🇧🇷"}, 
//     // { name: 'Brazil', flag: "🇧🇷"}, 
//   ]
  
//   const countryFlag = document.querySelector(".flag");
//   const addBtnElem = document.querySelector('.btn');
//   const addTextElem = document.querySelector('.text')
//   const displayElem = document.querySelector('.display')
//   const addFlagElem = document.querySelector('.flegz')
  
//   let list = ()=> '<ul>' + countries.map(function(country, index){
//     const { flag, name } = country;
//       return '<li>' + flag + '  ' + '-' + '  ' + name + '</li>';
//   }).join('') + '</ul>';
  
//   countryFlag.innerHTML = list();
  
//   if(localStorage['name']){
//     //   let names = JSON.parse(localStorage.getItem('name'))
//     // }
  
//    let newList = [];
  
//   // if(localStorage['newList']){
//   //   JSON.parse(localStorage.)
//   // }
  
//   function addCountries (event){
//     let regex = /[a-zA-z]$/g;
//     let reg = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;
    
//     let countryName = addTextElem.value.charAt(0).toUpperCase() + addTextElem.value.slice(1).toLowerCase();
    
//     console.log(countryName)
//     countries.push({
//       name: countryName, flag: addFlagElem.value
//     })
    
//     console.log(countries)
//     countryFlag.innerHTML = list();

//   //   if(regex.test(addTextElem.value) && reg.test(addFlagElem.value)){
//   //     newList.include(added);
//   //     newList.push(added);
//   //     list.append(newList);
//   //     return displayElem.innerHTML = "Enter only letters from A to Z";
      
//   //   }else {
//   //     return newList;
//   //   }
//   }
  
//   addBtnElem.addEventListener('click', addCountries);