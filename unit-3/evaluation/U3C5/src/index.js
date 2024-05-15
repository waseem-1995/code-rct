// display the listing cards
function displayCards(data) {
  let mainContainer = document.querySelector("#container");
  let rolepage=document.querySelector(".rolepage");
  // map through the data and append each acrd to the main container
   data.forEach(function(ele){
    mainContainer.append(rolepage)
   })
  
 
  return mainContainer;
}

// filter by role
function filterByRole(data) {
  
  let selected=document.querySelector("#change-role").value;

      return ele.data==selected
  
   
   
}

// search by language
function searchByLanguage(data) {
  let input=document.getElementById("search-input")
  let searchBtn = document.getElementById("search-btn")
  searchBtn.onclick = () => {
    
        
};
}
window.onload = function (data) {
  // on load display data
  // add click and chnage events for search button and input
  searchBtn.onclick = () => {
    
        
};
};

if (typeof exports !== "undefined") {
  module.exports = {
    displayCards,
    filterByRole,
    searchByLanguage,
  };
}
