function insertValuesIntoTds(tdArray, valuesArray){
  for(let i = 0; i < tdArray.length; i++){
    let tdId = document.getElementById(tdArray[i]);
    if(i < carArr.length){
      tdId.innerHTML = "<img src='"+valuesArray[i]+"' style='width:150px;' alt='carImage'/>";
    } else {
      tdId.innerHTML = valuesArray[i];
    }
  }
}


function tdIds(tag){
  let queryArray = document.querySelectorAll(tag);
  let arrIds = [];
  for(let i = 0; i < queryArray.length; i++){
    let element = queryArray[i].id;
    //remove empty string
    if (element != "") arrIds.push(element);
  }
  return arrIds;
}
