const credentials = {
    name: Benja,
    lastName: Bastan
}

let credentialsToJson = JSON.stringify(credentials);

localStorage.setItem("user", credentialsToJson);
let getData = localStorage.getItem("user");

let getDataToJson = JSON.parse(getData);

console.log(getData);

createElement.innerHTML = 'Welcome ${getDataToJson.name} ${getDataToJson.lastName}';

