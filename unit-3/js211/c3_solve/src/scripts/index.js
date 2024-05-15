
 
 let addtoWallet = () => {
    
   let amount = document.getElementById("amount").value;
   let walletmoney = JSON.parse(localStorage.getItem("amount"));
 
   let totalAmount=Number(amount) + Number(walletmoney);
   console.log(totalAmount);

   document.getElementById("wallet").innerText=totalAmount
 
   localStorage.setItem("amount", JSON.stringify(totalAmount));
 
   //window.location.reload()
 };

 
 //localStorage.getItem("price");