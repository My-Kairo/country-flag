function FlagCountries(country) {
    let flagz = country || [];

    let countries = [
        { name: 'Argentina', flag: '🇦🇷' },
        { name: 'Brazil', flag: '🇧🇷' },
        { name: 'Chile', flag: '🇨🇱' },
        { name: 'Zambia', flag: '🇿🇲' },
        { name: 'Uganda', flag: '🇺🇬' },
        { name: 'Malawi', flag: '🇲🇼' },
        { name: 'Rwanda', flag: '🇷🇼' },
        { name: 'Ireland', flag: '🇮🇪' },
        { name: 'Switzerland', flag: '🇨🇭' },

    ]

    let regex = /[a-zA-z]$/g;
    let reg = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;


    let addTheCountries = (names, flag) => {
        if (names.match(regex) && reg.test(flag)) {
            if (!flagz.includes(names) && !flagz.includes(flag)) {
                flagz.push(names) && flagz.push(flag) ? true : false;
            }
        }
    }


    let getCountries = () => flagz;

    let sortedArray = () => countries.sort(function (first, second) {
        if (first.name < second.name)
            return -1;
        if (first.name > second.name)
            return 1;
        return 0;
    })

    let filtered = () => countries.filter(value => {
        return value == flagz;
    })



    return {
        addTheCountries,
        getCountries,
        sortedArray,
        filtered
    }
}