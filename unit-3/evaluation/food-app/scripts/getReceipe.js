async function getSearchedReceipe(querry) {

    let response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${querry}`
    );
    let data = await response.json();
    return data;
}

async function getReceipeOfTheDay() {

    let response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/random.php`
    );
    let data = await response.json();
    return data;
}

async function getLatestReceipe() {

    let response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/random.php`
    );
    let data = await response.json();
    return data;
}


export {
    getSearchedReceipe,
    getReceipeOfTheDay,
    getLatestReceipe
}