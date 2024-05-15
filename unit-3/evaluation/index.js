//     const movies=[
//     { 
//       name:'doctor strange',
//       Rating:'9.5',
//       img:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9946/1279946-v-e840df4196c6',
//     },
//     { 
//       name:'Criminal justice',
//       Rating:'9',
//       img:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3065/1323065-v-58c6d2de61e1',
//     },
//     { 
//       name:'House of Dragon',
//       Rating:'8.5',
//       img:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/100/1320100-v-2498e2b9dd35',
//     },
//     { 
//       name:'Khuda Hafiz',
//       Rating:'8',
//       img:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7437/747437-v',
//     },
//     { 
//       name:'Bala',
//       Rating:'7.5',
//       img:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5002/705002-v',
//     },
//     { 
//       name:'Lakshmi',
//       Rating:'4',
//       img:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7509/827509-v',
//     },
//     { 
//       name:'83',
//       Rating:'5.9',
//       img:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/613/1160613-v-b525150954e1',
//     },
//     { 
//       name:'Groot',
//       Rating:'6.8',
//       img:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3373/1313373-v-b03a81fa59c6',
//     },
//     { 
//       name:'Thor',
//       Rating:'5.5',
//       img:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5559/675559-v',
//     },
    
//    ];
  

   
  

//localStorage.setItem("movies",JSON.stringify(movies));
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
  
  
  let data=JSON.parse(localStorage.getItem("movies"));
  
  function appendMovies(data){
      let data_div=document.getElementById("img_loader")
      data_div.innerHTML=null;
      data_div.id="movies";
      
      data.forEach(function(el){
          let div=document.createElement("div");
  
          let p_name=document.createElement("p");
          p_name.innerHTML=`Name:${el.name}`;
  
          
          let p_rating=document.createElement("p");
          p_rating.innerHTML=`Rating:${el.Rating}`;
  
          let img=document.createElement("img");
          img.id="poster";
          img.src=el.img;
  
          div.append(img,p_name,p_rating);
          data_div.append(div)
      })
  
  }
  //appendMovies(data);

  //for loader
let get_data_promise=new Promise(function(resolve,reject){
    setTimeout(function(){
        let movies=data;

        if(data !=null){
            resolve(movies);
        }else{
            reject("error")
        }
    },5000);
});
//console.log(get_data_promise)

get_data_promise.then(function(res){
    appendMovies(res);
}).catch(function(err){
    console.log("err")
});