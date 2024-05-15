//let data=JSON.parse(localStorage.getItem("mobile_data"))||[];
//append(data)
function append(data) {
  let mobile=document.getElementById("mobile_list");
  mobile.innerHTML=null;
    data.forEach((el,index)=>{
        let image=document.createElement("img");
        image.src=el.image;
        let brand=document.createElement("p");
        brand.textContent=el.brand;
        let name=document.createElement("p");
        name.textContent=el.name;
        let price=document.createElement("p");
        price.textContent=el.price;
        console.log(el.price)
        let remove=document.createElement("button");
        //remove.innerText="REMOVE";
        //remove.setAttribute("class","remove");
        remove.addEventListener("click",function(){
            remove(index)
        });
        let box=document.createElement("div");
        //box.setAttribute("class","mobile");
        box.append(name,brand,price,image);
        mobile.append(box);
    })
}


function remove(index) {
  // logic to remove the mobiles data on selected index
  let data=JSON.parse(localStorage.getItem("mobile_data"))
  data.splice(index,1);
  localStorage.setItem("mobile_data",JSON.stringify(data));
  append(data)
 
}

function sortLowToHigh() {
  // sort the list of mobiles in ascendning order of price
  let data=JSON.parse(localStorage.getItem("mobile_data"))||[];
  console.log(data)
  data.sort((a,b)=>{
    return a.price-b.price
  });
  console.log(data)
  append(data)
  
}

function sortHighToLow() {
  // sort the list of mobiles in descending order of the price
  let data=JSON.parse(localStorage.getItem("mobile_data"))||[];
  data.sort((a,b)=>{
    return b.price-a.price
  });
  append(data)
}




// do not change this
if (typeof exports !== "undefined") {
  module.exports = {
    append,
    remove,
    sortLowToHigh,
    sortHighToLow,
  };
}
