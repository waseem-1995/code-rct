const url="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-users"


const getUsersData = async () => {
  try {
    let response = await fetch(url)
   let data = await response.json();
   return data
   //console.log(data.data)
   
  } catch (err) {
  return err
  }

};

function splitData(...x){
  console.log(x)
  const [data,totalPages]=x
  const[data1,data2,...data3]=data
  return {
    totalPages,
    data1,
    data2,
    data3
  }
}


// donot change the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getUsersData,
    splitData,
  };
}
