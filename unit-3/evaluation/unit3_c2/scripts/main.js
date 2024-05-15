function signup(n,e,a,w){
    this.name=n;
    this.email=e;
    this.address=a;
    this.wallet=w;
}
 
function submit(e){
    e.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let address=document.getElementById("address").value;
    let wallet=document.getElementById("amount").value;
    
   let s1=new signup(name,email,address,wallet)
    let data=JSON.parse(localStorage.getItem("user"))||[]
    data.push(s1)
    localStorage.setItem("user",JSON.stringify(data))

}
