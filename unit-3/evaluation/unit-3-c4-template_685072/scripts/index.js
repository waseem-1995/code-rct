// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";

let navbar_div=document.getElementById("navbar")
navbar_div.innerHTML=navbar()

const defaultnews=async ()=>{
    try{
        let res=await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=in`)
        let data=await res.json();
        showNews(data.articles)
    }catch(error){
        console.log(error)
    }
}
defaultnews()

if(localStorage.getItem("news")===null){
    localStorage.setItem("news",JSON.stringify([]))
}

function showNews(data) {

    data.forEach((element) => {

        let container = document.getElementById("results");

        let div = document.createElement("div");
        div.setAttribute("class","news")
        let title = document.createElement("h3");
        title.innerText = element.title;
        let description = document.createElement("p");
        description.innerText = element.description;

        let img = document.createElement("img");
        img.src = element.urlToImage;

        div.addEventListener('click', () => {
            let news = JSON.parse(localStorage.getItem('news'));
            news.push(element);
            localStorage.setItem('news', JSON.stringify(news));
            window.location.href = 'news.html';
        })

        div.append(title, description, img);

        container.append(div);

    })

}






//////////////



let searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', () => {

    let search = JSON.parse(localStorage.getItem('search'));
    
    let searchBox = document.getElementById('searchBox').value;
    search.push(searchBox);

    localStorage.setItem('search', JSON.stringify(search));
    window.location.href = 'search.html';
})






async function cCearch(t) {

    let query = document.getElementById("search_input")

    let response = await fetch(
        `https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=&{query}`
    );
    let data = await response.json();
    displayNews(data.articles);
    console.log(data.articles);


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

