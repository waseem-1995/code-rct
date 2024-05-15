// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";

let navbar_div=document.getElementById("navbar")
navbar_div.innerHTML=navbar()

async function searchNews() {

    //let search = JSON.parse(localStorage.getItem('search'));

    let response = await fetch(
        `https://masai-api.herokuapp.com/news?q=tesla`
    );
    let data = await response.json();
    displayNews(data.articles);
    console.log(data.articles);

    //localStorage.setItem('search', JSON.stringify(search));

}
searchNews();


function displayNews(data) {

    data.forEach((element) => {

        let newsDiv = document.getElementById('results');

        let div = document.createElement('div');
        div.setAttribute("class","news")
        let title = document.createElement('h3');
        title.innerText = element.title;
        let description = document.createElement('p');
        description.innerText = element.description;

        let img = document.createElement('img');
        img.src = element.urlToImage;

        div.addEventListener('click', () => {
            let news = JSON.parse(localStorage.getItem('news'));
            news.push(element);
            localStorage.setItem('news', JSON.stringify(news));
            window.location.href = 'news.html';
        })

        div.append(title, description, img);

        newsDiv.append(div);

    })

}

