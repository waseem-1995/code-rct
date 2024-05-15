// Ude Import export (MANDATORY)


import { navbar } from "../components/navbar.js";

let navbar_div=document.getElementById("navbar")
navbar_div.innerHTML=navbar()

function showDetailedNews() {

    let news = JSON.parse(localStorage.getItem('news'));

    console.log(news[news.length-1]);

    let detailNews = document.getElementById('detailed_news');

    let div = document.createElement('div');
    let title = document.createElement('h3');
    title.innerText = news[news.length - 1].title;

    let author = document.createElement('h4')
    author.innerText = news[news.length - 1].author;

    let description = document.createElement('p');
    description.innerText = news[news.length - 1].description;

    let img = document.createElement('img');
    img.src = news[news.length - 1].urlToImage;

    let source = document.createElement('h5');
    source.innerText = news[news.length - 1].source.name;

    div.append(img, title, author, description, source)

    detailNews.append(div);

    localStorage.setItem('news', JSON.stringify(news));
}
showDetailedNews();