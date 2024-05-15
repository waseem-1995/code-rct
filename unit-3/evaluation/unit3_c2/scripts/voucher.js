async function getData(){
    
        
    let res= await fetch(`https://masai-vouchers-api.herokuapp.com/api/vouchers`);
    let data=await res.json();
   let actual_data=data[0].vouchers

   console.log(actual_data)
   append(actual_data)

}
getData()

let wallet=JSON.parse(localStorage.getItem("user"))||[]

 function append(data){
 console.log(data)
 let data_div=document.getElementById("voucher_list")
 data_div.innerHTML=null;

  data.forEach(function(el){
      let div=document.createElement("div");
      div.setAttribute("class","voucher")

      let name=document.createElement("p")
        name.innerHTML=el.name


      let price=document.createElement("p");
      price.innerHTML=el.price

      let img=document.createElement("img");
     img.src=el.image

     let btn=document.createElement("button")
     btn.innerText="Buy";
     btn.setAttribute("class","buy_voucher")
            btn.addEventListener("click",function(){
                
                        data.push(el)
                        
                        
                        localStorage.setItem("purchase", JSON.stringify(data));
                        //let data=JSON.parse(localStorage.getItem("items"))||[]
                //let count=document.getElementById("item_count")
                //count.innerText=data.length;
        
       
            })

         div.append(img,name,price,btn);
         data_div.append(div)
    })
}
