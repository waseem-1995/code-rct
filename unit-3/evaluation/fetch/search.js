

function slideShow(){
    const arr=['https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6838/1306838-h-5a58d2ed5fec','https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2121/1332121-h-2731b2ed4c39','https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/612/1160612-h-98975d3f9d98']

    let i=0;

    let div=document.getElementById("slide_images");
    let img=document.createElement("img");
    img.src=arr[0];
    div.append(img);
    i=i+1

    setInterval(function(){
        if(i==3){
            i=0;
        }
        img.src=arr[i];
        i=i+1
        div.append(img);
       
    },2000)
}
slideShow()

async function searchMovies(){
    try{
        let query=document.getElementById("query").value;
        let res= await fetch(`http://www.omdbapi.com/?apikey=bec1065b&s=${query}`);
        let data=await res.json();
        console.log(data)
        let actual_data=data.Search;
        appendMovies(actual_data)
    }catch(err){
        console.log("error")
    }
}

function appendMovies(data){
    let data_div=document.getElementById("movies")//movies in search.html page to append
    data_div.innerHTML=null;

    data.forEach(function(el){
        let div=document.createElement("div");
        let p_name=document.createElement("p")
        p_name.innerHTML=`Name:${el.Title}`;

        let p_rating=document.createElement("p");
        p_rating.innerHTML=`Year:${el.Year}`;

        let img=document.createElement("img");
        img.id="poster"
        img.src=el.Poster

        div.append(img,p_name,p_rating);
        data_div.append(div)
    })
}
//invoke this function async function