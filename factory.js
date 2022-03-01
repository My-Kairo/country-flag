function FlagCountries(countries){
    var flagz = countries || [];

    function addTheCountries (name){
        let names = name.charAt(0).toUppercase() + name.slice(1).lowerCase();
        if(!flagz.include(names)){
            flagz.push(names)
        }else{
            return
        }
    }

    function getCountries (){
        return flagz;
    }


    return {
        addTheCountries,
        getCountries
    }
}