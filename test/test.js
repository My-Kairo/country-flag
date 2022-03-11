describe('Country Flags', function(){
    it('Should match all the regex specified', function(){
        let flag = FlagCountries();
        flag.addTheCountries('Brazil: 🇧🇷')
        assert.equal(flag.getCountries(), 'Brazil: 🇧🇷')
    })
    it('Should add the country name', function(){
        let country = FlagCountries()
        let them = {name: 'Argentina', flag: '🇦🇷'}
        country.addTheCountries(them)
        assert.equal('them',  country.getCountries());
    })
    it('Should set the country name to uppersace', function() {
        let flag = FlagCountries();
        flag.addTheCountries('brazil: 🇧🇷')
        assert.equal(flag.getCountries(), 'Brazil: 🇧🇷')
    })


})

// function sort_array_by (array, sort, desc) {
//     array.sort(function (first, second) {
//       if (first[sort] < second[sort]) return -1;
//       if (first[sort] > second[sort]) return 1;
//       return 0;
//     });
//     if (desc) array.reverse();
//     return array;
//     console.log(array);
//   }
//   let desc = false;
//   sortElem.addEventListener('click', () => {
//     let array = sort_array_by(countries, 'name', desc);
//     list(array);
//     desc = !desc;
//   });