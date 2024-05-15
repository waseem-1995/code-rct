let page=1;
async function getData(){
    let res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=10&page=1`)
    let items=await res.json();
    let actual_data=items.data
    console.log(actual_data)
    append(actual_data)
}
getData()


let data=JSON.parse(localStorage.getItem("cart"))||[]
let count=document.getElementById("cart_count")
count.innerText=data.length
//console.log(data)
function append(items){
    console.log(items)
    let data_div=document.getElementById("main_items")
    //data_div.innerHTML=null;

    items.forEach(function(el){
        let div=document.createElement("div");
        div.setAttribute("class","item")
        let p_name=document.createElement("p")
        p_name.innerHTML=`Name:${el.title}`;


        let p_price=document.createElement("p");
        p_price.innerHTML=`Year:${el.price}`;

        let img=document.createElement("img");
        img.src=el.image

        let btn=document.createElement("button")
        btn.innerText="Add to cart";
        btn.setAttribute("class","add_to_cart")
        btn.addEventListener("click",function(){
            
            data.push(el)
            
            
            localStorage.setItem("cart", JSON.stringify(data));
            //let data=JSON.parse(localStorage.getItem("items"))||[]
//let count=document.getElementById("item_count")
count.innerText=data.length;
            
           
        })

        div.append(img,p_name,p_price,btn);
        data_div.append(div)
    })
}

let previous=()=>{
    if(page===1){
        return
    }
    page--;
    getData(page)
}

let next=()=>{
    if(page===10){
        return
    }
    page++;
    getData(page)
};
