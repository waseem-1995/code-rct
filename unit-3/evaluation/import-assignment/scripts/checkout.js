import navbar from "../components/navbar.js";

let nav=document.getElementById("navbar")
nav.innerHTML=navbar()



let data=JSON.parse(localStorage.getItem("cart"))||[]
let total=data.reduce(function(acc,el,i){
    return acc + Number(el.price)
},0)
//console.log(total)
document.querySelector("#total").innerText=total



function main(n,a){
    this.name=n;
    this.address=a;
}

function checkout(){
let name=document.getElementById("name").value;
let address=document.getElementById("adres").value;

let u1=new main(name,address)

if(u1.name && u1.address){
    alert(`${u1.name} your order is succefull`)
}
else{
    alert("please fill the deatail")
}

}