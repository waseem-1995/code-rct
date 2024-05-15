function displaySearchedReceipe(data) {

    data = data[0];
    let receipeDiv = document.getElementById('receipeDiv');
    receipeDiv.innerHTML = null;
    
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.innerText = data.strMeal;
    let img = document.createElement('img');
    img.src = data.strMealThumb;
    let origin = document.createElement('h4');
    origin.innerText = "Country: " + data.strArea;
    let meatUsed = document.createElement('h5');
    meatUsed.innerText = "Meat: " + data.strCategory;

    let h3 = document.createElement('h3');
    h3.innerText = "Ingredients"

    let ul = document.createElement('ul');

    let i = 1;
    for (let key in data) {

        let string = "strMeasure";
        if (key.substr(0, 13) == "strIngredient" && data[key] != "") {
            string += i;
            // console.log(data[key]+": "+data[string]);

            let li = document.createElement('li');
            li.innerText = data[key] + ": " + data[string];
            ul.append(li);

            i++;
        }
    }

    let p = document.createElement('p');
    p.innerText = data.strInstructions;

    div.append(h2, img, origin, meatUsed, h3, ul, p);
    receipeDiv.append(div);
}


export {
    displaySearchedReceipe,
}