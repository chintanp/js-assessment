exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
	var k;
	
	if (this == null) {
		throw new TypeError('"this" is null or not defined');
	}
	
	var o = Object(arr);
	
	var len = o.length >>> 0;
	
	if (len === 0) {
		return -1;
	}
	
	var n = 0;
	
	while (n < len) {
		if(o[n] === item ) {
			return n;
		}
		n++;
	}
	return -1;
  },

  sum : function(arr) {
	  var len = arr.length >>> 0;
	  var sum = 0;
	  for (var i = 0; i < len; i++) {
		  sum = sum + arr[i];
	  }
	  return sum;
  },

  remove : function(arr, item) {
	  var len = arr.length >>> 0;
	  var i = 0;
	  var newArr = [];
	  
	  while (i < len) {
		  if (arr[i] === item) {
			  i++;
			  continue;
		  }
		  newArr.push(arr[i]) ;
		  i++;
	  }

	  return newArr;
  },

  removeWithoutCopy : function(arr, item) {
	  var i = 0;
	  
	  while (i < arr.length) {
		  if (arr[i] === item) {
			  arr.splice(i, 1);
			  i = 0;
		  }
		  i++;
	  }
	  
	  return arr;
  },

  append : function(arr, item) {
	  arr.push(item);
	  return arr;
  },

  truncate : function(arr) {
	  arr.pop();
	  return arr;
  },

  prepend : function(arr, item) {
	  var newArray = [];
	  newArray.push(item);
	  var len = arr.length;
	  for (var i = 0; i < len; i++) {
		  newArray.push(arr[i]);
	  }
	  return newArray;
  },

  curtail : function(arr) {
	  arr.splice(0,1);
	  return arr;
  },

  concat : function(arr1, arr2) {
	  var newArray = [];
	  var len1 = arr1.length;
	  var len2 = arr2.length;
	  
	  for (var i = 0; i < len1; i++) {
		  newArray.push(arr1[i]);
	  }
	  for (var j = 0; j < len2; j++) {
		  newArray.push(arr2[j]);
	  }
	  return newArray;
  },

  insert : function(arr, item, index) {
	  var newArray = [];
	  var len = arr.length;
	  
	  for (var i = 0; i < len; i++) {
		  if (i === index) {
			  newArray.push(item);
			  newArray.push(arr[i]);
		  } else {
			  newArray.push(arr[i]);
		  }
	  }
	  return newArray;
  },

  count : function(arr, item) {
	  var count = 0; 
	  var len = arr.length;
	  
	  for (var i = 0; i < len; i++) {
		  if (arr[i] === item) {
			  count++;
		  }
	  }
	  return count;
  },

  duplicates : function(arr) {
	  var dupes = [];
	  var len = arr.length;
	  
	  for (var i = 1; i < len; i++) {
		  for (var j = 0; j < i; j++) {
			  if (arr[j] === arr[i]) {
				  if(this.indexOf(dupes, arr[i]) === -1) {
					  dupes.push(arr[i]);
				  }
			  }
		  }
	  }
	  return dupes;
  },

  square : function(arr) {
	  var newArray = [];
	  var len = arr.length;
	  
	  for (var i = 0; i < len; i++) {
		  newArray.push(arr[i] * arr[i]);
	  }
	  return newArray;
  },

  findAllOccurrences : function(arr, target) {
	  var indices = [];
	  var len = arr.length;
	  
	  for (var i = 0; i < len; i++) {
		  if (arr[i] === target) {
			  indices.push(i);
		  }
	  }
	  return indices;
  }
};
