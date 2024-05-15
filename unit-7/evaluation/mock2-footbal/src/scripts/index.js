//add your js code here
let tbody=document.querySelector("tbody")

const url="https://jsonmock.hackerrank.com/api/football_matches"

let page=1;
const getData=async(p)=>{
    try {
        let res=await fetch(`${url}?page=${p}`)
        data=await res.json();
        console.log(data.data);
        appenData(data.data)
    } catch (error) {
        console.log(error);
    }
}
 getData(page)

 function appenData(data){
    tbody.innerHTML=null;
    data.forEach(function(el){
        let row=document.createElement("tr")
        let competition=document.createElement("td")
        competition.innerText=el.competition

        let year=document.createElement("td")
        year.innerText=el.year

        let round=document.createElement("td")
        round.innerText=el.round

        let team1=document.createElement("td")
        team1.innerText=el.team1

        let team2=document.createElement("td")
        team2.innerText=el.team2

        let team1goals=document.createElement("td")
        team1goals.innerText=el.team1goals

        let team2goals=document.createElement("td")
        team2goals.innerText=el.team2goals

        row.append(competition,year,round,team1,team2,team1goals,team2goals)
        tbody.append(row)
    })
 }

 let prev=()=>{
    if(page===1){
        return
    }
    page--;
    getData(page)
 }
let next=()=>{
    if(page===1159){
        return
    }
    page++;
    getData(page)
}

const navigate=()=>{
    window.location.href="./filter.html"
}