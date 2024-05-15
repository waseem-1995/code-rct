let data=JSON.parse(localStorage.getItem("cart"))||[]
let total=data.reduce(function(acc,el,i){
    return acc + Number(el.price)
},0)

function appendCart(){
    let container=document.getElementById("items")
    container.innerHTML=null;
    data.forEach(function(el,index){
        let div=document.createElement("div");
        div.setAttribute("class","item")
        let p_name=document.createElement("p")
        p_name.innerHTML=`Name:${el.title}`;


        let p_price=document.createElement("p");
        p_price.innerHTML=`Year:${el.price}`;

        let img=document.createElement("img");
        img.src=el.image

        let btn=document.createElement("button")
        btn.innerText="remove";
        btn.setAttribute("class","remove")
        btn.addEventListener("click",function(){
            
            deleteItem(index)
            
        })

        div.append(img,p_name,p_price,btn);
        container.append(div)
    })
}
appendCart()
function deleteItem(index){
    data.splice(index,1)
    localStorage.setItem("cart", JSON.stringify(data));
    let count=document.getElementById("cart_count")
    count.innerText=data.length
    appendCart()
}

function order(){
    let name=document.getElementById("name").value
    alert(`${name},your order is successful`)
}







// let cartTotal=()=>{
//     let cart=JSON.parse(localStorage.getItem("cart"))||[]
//     let count=document.getElementById("cart_count")
//     count.innerText=cart.length
// }

// let main=()=>{
//     let cart=JSON.parse(localStorage.getItem("cart"))||[]
//     append(cart)
//     cartTotal()
// }


// let item=(el)=>{
//     let{title,image,price,id}=el;
//          let div=document.createElement("div");
//          div.setAttribute("class","item")
//          let p_name=document.createElement("p")
//          p_name.innerText=title;
 
 
//          let p_price=document.createElement("p");
//          p_price.innerText=price;
 
//          let img=document.createElement("img");
//          img.src=image
 
//          let btn=document.createElement("button")
//          btn.innerText="Remove";
//          btn.setAttribute("class","remove")
//          btn.onclick=()=>{  
//              removeItem(id);
//          }
 
//          div.append(img,p_name,p_price,btn);
//          return div;
//  }
 
//  let append=(data)=>{
//      let container=document.getElementById("items");
//      container.innerHTML=null;
//      data.forEach((el)=>{
//          container.append(item(el))
//      });
//  };

//  let removeItem=(item_id)=>{
//     let cart=JSON.parse(localStorage.getItem("cart"));
//     cart=cart.filter(({id})=>id !==item_id);

//     localStorage.setItem("cart",JSON.stringify(cart))
//     append(cart);
//     cartTotal();
//  }

//  let order=()=>{
//     let name=document.getElementById("name").value
//     alert(`${name},your order is successful`)
//  }
// main()