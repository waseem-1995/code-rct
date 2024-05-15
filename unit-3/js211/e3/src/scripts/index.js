// Store the wallet amount to your local storage with key "amount"
 // Store the wallet amount to your local storage with key "amount"

 let moneywaleet = JSON.parse(localStorage.getItem("amount"));
 let display_amount = document.getElementById("wallet");
 
 
 
 
 
 // waleetmoney
 
 if (moneywaleet == 0) {
 
   display_amount.innerHTML = 0;
 
 } else {
 
   display_amount.innerHTML = moneywaleet;
 
 }
 
 
 
 // waleetamount
 
 let addmoney = () => {
    
   let amountwaleet = document.querySelector("#amount").value;
 
   total_val=Number(amountwaleet)+Number(moneywaleet);
 
   localStorage.setItem("amount", JSON.stringify(total_val));
 
   window.location.reload()
 };