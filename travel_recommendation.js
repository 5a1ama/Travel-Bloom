const btnSearch = document.getElementById('btnSearch');
const btnReset = document.getElementById('btnReset');

function searchTravel() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
    const country = data.countries.find(item => item.name.toLowerCase() === input);
    const temple = data.temples.find(item => item.name.toLowerCase() === input);
    const beach = data.beaches.find(item => item.name.toLowerCase() === input);
    if(input == "country" || input == "countries"){
        resultDiv.innerHTML += '<p><strong>Countries:</strong> <br>'
        data.countries.forEach((country) =>
        country.cities.forEach((city) =>
        resultDiv.innerHTML += `<p><strong>City:</strong> ${city.name}</p> <br>
        ${city.description}</p>`
        ))
    }
    else if(input == "temple" || input == "temples"){
        resultDiv.innerHTML += '<p><strong>Temples:</strong> <br>'
        data.temples.forEach((temple) =>
        resultDiv.innerHTML += `<p><strong>Temple:</strong> ${temple.name}</p> <br>
        ${temple.description}</p>`
        )
    }
    else if(input == "beach" || input == "beaches"){
        resultDiv.innerHTML += '<p><strong>Beaches:</strong> <br>'
        data.beaches.forEach((beach ) =>
        resultDiv.innerHTML += `<p><strong>Beach:</strong> ${beach.name}</p> <br>
        ${beach.description}</p>`
        )
    }
    else if (country) {
        const cities = country.cities;
        cities.forEach((city) => 
        resultDiv.innerHTML += `<p><strong>City:</strong> ${city.name}</p> <br>
        ${city.description}</p>`
        )} 
    else  if(temple){
        resultDiv.innerHTML += `<p><strong>Temple:</strong> ${temple.name}</p> <br>
        ${temple.description}</p>`
    }
    else if(beach){
        resultDiv.innerHTML += `<p><strong>Beache:</strong> ${beach.name}</p> <br>
        ${beach.description}</p>`
    }
    else
        resultDiv.innerHTML = 'Condition not found.';
    })
}

function reset() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    document.getElementById('conditionInput').value = '';
}


btnSearch.addEventListener('click', searchTravel);
btnReset.addEventListener('click', reset);