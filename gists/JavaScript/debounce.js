

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


var myEfficientFn = debounce(function() {
	// All the taxing stuff you do
}, 250);

window.addEventListener('resize', myEfficientFn);


/*

The function above will only fire once every quarter
 of a second instead of as quickly as it's triggered;
  an incredible performance boost in some cases.

I'm often asked what rate should be used when debouncing, 
and it's an impossible question to answer because it depends
 on the task.  The best way to know is testing different
  rates yourself and seeing where you notice a slowdown 
  -- if you notice it, so will your users!

*/