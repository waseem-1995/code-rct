function MyArray(){
    let arr=Object.create(MyArray.prototype)
  Object.defineProperty(arr,"length",{
    value:0,
    enumerable:false,
    writable:true,
  });
  for(key in arguments){
    arr[key]=arguments[key]
    arr.length++
  }
  return arr
  
}

MyArray.prototype.push = function(el){
    this[this.length]=el;
    this.length++;
    return this.length
}

MyArray.prototype.pop = function(){
    this.length--;
    var popelement=this[this.length]
    delete this[this.length];
    return this.popelement
}

MyArray.prototype.map = function(callback){
    const resultArray=[];
  for(let index=0;index<this.length;index++){
    resultArray.push(callback(this[index],index,this));
  }
  return resultArray
}

MyArray.prototype.filter = function(cb){
    let result=[]
    for(let i=0;i<this.length;i++){
      if(cb(this[i])){
        result.push(this[i])
      }
    }
    return result
  
}

MyArray.prototype.reduce = function(){
  
}

export default MyArray