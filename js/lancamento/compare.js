//car
let carArr = [];

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i]._nome  === carClass._nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {

    if(carClass instanceof Car){
        if(el.checked && carArr.length < 2){
          //add elements to array max 2
          carArr.push(carClass);
        } else if(el.checked && carArr.length == 2){
          //uncheck checkbox
          el.click();
        }else {
          //get element index
          let index = GetCarArrPosition(carArr, carClass);
          //remove element by index
          if(index > -1) carArr.splice(index, 1);
        }

    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if(carArr.length !== 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {

  //get array of tds
  const tag = 'td';
  let arrayTdIds = tdIds(tag);

  //features values
  let carsFeaturesValues = arrayCarFeaturesValues(carArr);

  //rearrange Array
  let arrayFeatures = rearrangedArray(carsFeaturesValues);

  //insert carValues into tds
  insertValuesIntoTds(arrayTdIds, arrayFeatures);
}
