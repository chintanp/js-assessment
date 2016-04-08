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
	  var newArray = [item];
  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {

  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
