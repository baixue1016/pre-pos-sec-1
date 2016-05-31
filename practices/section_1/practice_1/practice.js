function collect_same_elements(collection_a, collection_b) {
  var arr1 = [];
  var arr2 = [];
  var arr3 = [];

  for(var i in collection_a){
    arr1.push(collection_a[i]);
  }

  for(var j in collection_b){
    arr2.push(collection_b[j]);
  }

  for(var k = 0; k < arr1.length; k++){
    for(var g = 0; g < arr2.length; g++){
      if(arr1[k] == arr2[g] ){
        arr3.push( arr2[g]);
      }
    }
  }
  return arr3;
}

module.exports = collect_same_elements;
