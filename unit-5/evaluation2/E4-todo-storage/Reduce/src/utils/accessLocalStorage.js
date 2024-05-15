//to load/access some data from local storage
function LoadData(key) {
  try {
    let temp = localStorage.getItem(key);
    temp = JSON.parse(temp);
    return temp;
  } catch (e) {
    return undefined;
  }
}

//to save some data from local storage

function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export { LoadData, saveData };
