let Pdata=JSON.parse(localStorage.getItem("data"))||[];

function append(){

   
    let container=document.getElementById("container")
    container.innerHTML=null;

    Pdata.forEach(function(el,index){
        let div=document.createElement("div");
        div.setAttribute("class","card")
        let img=document.createElement("img");
        img.src=el.product_image;

        let p=document.createElement("p");
        p.innerText=el.product_name;

        let product_brand=document.createElement("p");
        product_brand.innerText=el. product_brand;

        let product_price=document.createElement("h3");
        h3.setAttribute("class","price")
        product_price.innerText=el. product_price;

        let btn=document.createElement("button");
        btn.innerText="Remove Product"
        btn.setAttribute("class","remove")

        btn.addEventListener("click",function(){
            deleteItem(index)
        });

        div.append(img,p,product_brand,product_price,btn)
        container.append(div)

    })
}
append()

function deleteItem(index){
    Pdata.splice(index,1);
    
    localStorage.setItem("data",JSON.stringify(Pdata));

    append()
   
 }