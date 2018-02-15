function arr2D(rows,cols) {
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = new Array(cols);
  }

  return arr;
}

function fill2D(arr,value){
	for(var i=0;i<arr.length;i++){
		arr[i].fill(value);
	}
	return arr;
}
