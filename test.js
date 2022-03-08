describe('Country Flags', function(){
    it('Should add the country name', function(){
        let country = FlagCountries()
        let them = {name: 'Argentina', flag: '🇦🇷'}
        country.addTheCountries(them)
        assert.equal('them',  country.getCountries());
    })


})