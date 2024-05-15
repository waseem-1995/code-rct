function append(){
    let nikedata=JSON.parse(localStorage.getItem("data"))||[];

    let container=document.getElementById("products_data")
    products_data.innerHTML=null;

    nikedata.forEach(function(el,index){
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.product_image;

        let p=document.createElement("p");
        p.innerText=el.product_name;

        let product_brand=document.createElement("p");
        product_brand.innerText=el. product_brand;

        let product_price=document.createElement("p");
        product_price.innerText=el. product_price;

        let btn=document.createElement("button");
        btn.innerText="“Remove Product"
        btn.setAttribute("id","remove_product")
        btn.addEventListener("click",function(){
            remove(index)
        })

        div.append(img,p,product_brand,product_price,btn)
        container.append(div)

    })
}
append();

function remove(index){
    let nikedata=JSON.parse(localStorage.getItem("data"))||[];
    let newData=nikedata.filter(function(el,i){
        if(i==index){
            let trash=JSON.parse(localStorage.getItem("trash"))||[]
            trash.push(el);

            localStorage.setItem("trash",JSON.stringify(trash));
        }else{
            return i !== index;
        }
    })
    localStorage.setItem("data",JSON.stringify(newData));
    append();
 }
