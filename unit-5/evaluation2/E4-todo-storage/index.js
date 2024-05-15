
let a=[1,2,3,4,5];
let b=[3,4,5];

let ans=[...a]; 

for(let i=0; i<b.length; i++){

    if(!ans.includes(b[i])){
        ans.push(b[i])
    }
}

console.log(ans);
console.log("a");
async function wait(){

   function x(){
    setTimeout(()=>{
        return  console.log("b");
     },1000)
  }

  let y= await x();

  console.log(y);
  
   
    
    
} 
 wait()
//console.log(x);
