const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
   
}

const displayCountries = countries =>{
    
    const countriesHTML = countries.map(country => getCountryHTML(country));
   
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}


const getCountryHTML = ({name, flags, area, region, population}) =>{
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <p>Area: ${area}</p>
            <p>Continet: ${region}</p>
           <p> people: ${population}</p>
            
            <img src="${flags.png}">
        </div>
    `
}


loadCountries();