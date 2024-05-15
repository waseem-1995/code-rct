function getData(event){
    event.preventDefault()
    let form=document.getElementById("product_data")
     let brand=document.getElementById("product_brand").value;
     let name=document.getElementById("product_name").value;
     let price=+document.getElementById("product_price").value;
     let image=document.getElementById("product_image").value;
  
  
     brand.value="",
     name.value="",
     price.value="",
     image.value="",
      addData(name, brand, price, image)  
  }

  function addData(name, brand, price, image) {
    let p= {
      name,
      brand,
      price,
      image,
     };
  
     let Pdata=JSON.parse(localStorage.getItem("data"))||[];
     Pdata.push(p)
     //console.log(data)
     localStorage.setItem("data",JSON.stringify(Pdata))
    
  }

//   function nikeproducts(n,b,p,i){
//     this.product_name=n;
//     this.product_brand=b;
//     this.product_price=p;
//     this.product_image=i;

// }
// function storedata(e){
//     e.preventDefault();
//     let form=document.getElementById("product_data");
//     let name=form.product_name.value;
//     let brand=form.product_brand.value;
//     let price=form.product_price.value;
//     let image=form.product_image.value

//    // console.log(brand,name,price,image)
//    let p1=new nikeproducts(name,brand,price,image);
//    console.log(p1)

//   let nikedata=JSON.parse(localStorage.getItem("data"))||[];
//   nikedata.push(p1)
//   localStorage.setItem("data",JSON.stringify(nikedata));
  
// }
