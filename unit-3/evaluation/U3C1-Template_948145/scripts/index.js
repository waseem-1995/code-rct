//store the products array in localstorage as "data"

function nikeproducts(b,n,p,i){
    this.product_brand=b;
    this.product_name=n;
    this.product_price=p;
    this.product_image=i;

}
function storedata(e){
    e.preventDefault();
    let form=document.getElementById("product_form");
    let brand=form.product_brand.value;
    let name=form.product_name.value;
    let price=form.product_price.value;
    let image=form.product_image.value

   // console.log(brand,name,price,image)
   let p1=new nikeproducts(brand,name,price,image);
   console.log(p1)

  let nikedata=JSON.parse(localStorage.getItem("data"))||[];
  nikedata.push(p1)
  localStorage.setItem("data",JSON.stringify(nikedata));
  
}
