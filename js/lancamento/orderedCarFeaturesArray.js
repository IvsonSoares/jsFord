
//divide array and reorder it in pairs
function rearrangedArray(array){
  let newArray = []
  let arrayDividedByElements = array.length/carArr.length;
  for(let i = 0; i < arrayDividedByElements; i++){
    newArray.push(array[i]);
    for(let j = arrayDividedByElements; j < array.length; j = j + arrayDividedByElements){
      newArray.push(array[i + j]);
    }
  }
  return newArray;
}

//make one big array with all cars features
function arrayCarFeaturesValues(array){
  var arrayCarFeatures = []
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array[i].getCarFeaturesArray().length; j++){
        arrayCarFeatures.push(array[i].getCarFeaturesArray()[j]);
      }
    }
    return arrayCarFeatures;
}
