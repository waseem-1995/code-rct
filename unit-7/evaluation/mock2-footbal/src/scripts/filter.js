
let url="https://jsonmock.hackerrank.com/api/football_matches"

// let filterData=async()=>{
//     let team1=document.getElementById("team1").value;
//     let team2=document.getElementById("team2").value;
//     let year=document.getElementById("year").value;

//     let u=`${url}?`;
//     if(team1){
//         u=u+`team1=${team1}`
//     }
//     if(team2){
//         u=u+`&team2=${team2}`
//     }
//     if(year){
//         u=u+`&year=${year}`
//     }

//     try {
//         let res =await fetch(u)
//         data=await res.json()
//         appenData(data.data)
//     } catch (error) {
//         console.log(error);
//     }
// } 

// filterData()

//  function appenData(data){
//     tbody.innerHTML=null;
//     data.forEach(function(el){
//         let row=document.createElement("tr")
//         let competition=document.createElement("td")
//         competition.innerText=el.competition

//         let year=document.createElement("td")
//         year.innerText=el.year

//         let round=document.createElement("td")
//         round.innerText=el.round

//         let team1=document.createElement("td")
//         team1.innerText=el.team1

//         let team2=document.createElement("td")
//         team2.innerText=el.team2

//         let team1goals=document.createElement("td")
//         team1goals.innerText=el.team1goals

//         let team2goals=document.createElement("td")
//         team2goals.innerText=el.team2goals

//         row.append(competition,year,round,team1,team2,team1goals,team2goals)
//         tbody.append(row)
//     })
//  }


let filterData=async()=>{
    let team1=document.getElementById("team1").value
    let team2=document.getElementById("team2").value
    let year=document.getElementById("year").value
    let filter=`${url}?`
    if(team1){
        filter=filter+`team1=${team1}`
    }
    if(team2){
        filter=filter+`&team2=${team2}`
    }
    if(year){
        filter=filter+`&year=${year}`
    }
    try {
        let res=await fetch(filter)
        data=await res.json()
        displayTable(data.data)
    } catch (error) {
        console.log(error)
    }
}
filterData()


function displayTable(data){
    
    document.querySelector("tbody").innerHTML=null

    data.forEach(ele => {
        let tr=document.createElement("tr")
       let c1=document.createElement("td")
       c1.innerText=ele.competition
       let c2=document.createElement("td")
       c2.innerText=ele.year
       let c3=document.createElement("td")
       c3.innerText=ele.round
        let c4=document.createElement("td")
       c4.innerText=ele.team1
       let c5=document.createElement("td")
       c5.innerText=ele.team2
       let c6=document.createElement("td")
       c6.innerText=ele.team1goals
       let c7=document.createElement("td")
       c7.innerText=ele.team2goals

       tr.append(c1,c2,c3,c4,c5,c6,c7)
       document.querySelector("tbody").append(tr)
    })
}