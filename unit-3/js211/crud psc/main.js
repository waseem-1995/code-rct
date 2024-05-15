const url="https://server-3jjd.onrender.com/inventory"

window.onload=()=>{
    getData()
}
let getData = async () =>{
    let res=await fetch(url);
    res=await res.json();
    renderDom(res)
};
//getData()
// create usercard a div for user and return that div

let AddProduct= async(e)=>{
    e.preventDefault();
    let form=document.getElementById("product_form");

    let name=form.name
    let brand=form.brand;
    let price= form.price;
    let image=form.image;

    let product={
         id:Date.now()+name.value,
         name:name.value,
          brand:brand.value,
          price:+price.value,
          image:image.value,

    }
    console.log(product)

    let res=await fetch(url,{
        method:"POST",
        body:JSON.stringify(product),
        headers:{
            "Content-Type":"application/json",
        },
    });

   form.reset()
    
}


let usercard = ({name,brand,price,image,id}) => {
    let div = document.createElement("div");

    let n = document.createElement("h3");
    n.innerText = name;

    let b = document.createElement("p");
    b.innerText =brand;

    let p = document.createElement("p");
    p.innerText =price;

    let i = document.createElement("img");
    i.setAttribute("class","image")
    i.src =image;

    let remove_btn=document.createElement("button");
    remove_btn.innerText="Remove";
    remove_btn.onclick=()=>{
       deleteproduct(id)
    };

    let update_btn=document.createElement("button");
    update_btn.innerText="Update Price";
    update_btn.onclick=()=>{
       updateprice(id)
    };

    div.append(n,b,p,i,remove_btn,update_btn);
    return div
};



//get the container and append all users there
let renderDom = (data) => {
    let container = document.getElementById("container");
    container.innerHTML=null;
    data.forEach((el)=>{
        let card=usercard(el)
        container.append(card);
    });
}


let deleteproduct=async(id)=>{
    let res=await fetch(`${url}/${id}`,{
        method:"DELETE",
    });

    getData();
}


let updateprice=async(id)=>{
    let newprice =prompt("Enter New Price");
   
    let data={price: +newprice} 
    let res=await fetch(`${url}/${id}`,{
        method:"PATCH",
        body:JSON.stringify(data),
        headers:{
            "content-Type":"application/json",
        },
    });
    getData();
}


let sortLTH = async() =>{
    //sort on basis of acending order on basis of duration
    let res=await fetch(`${url}?_sort=price&_order=asc`);
    res= await res.json();
    console.log(res)
    renderDom(res);
}

let sortHTL = async() =>{
    let res=await fetch(`${url}?_sort=price&_order=desc`);
    res= await res.json();
    renderDom(res);
}

let fiLTER = async() =>{
    //on basis of status
    let res=await fetch(`${url}?status=true`);
    res= await res.json();
    renderDom(res);
}

let greaterThan = async() =>{
    //greater than 50
    let res=await fetch(`${url}?price_gte=51`);
    res= await res.json();
    renderDom(res);
}

let lessThan = async() =>{
    //less than 50
    let res=await fetch(`${url}?price_lte=49`);
    res= await res.json();
    renderDom(res);
}
