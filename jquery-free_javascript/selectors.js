

/*

    $('#datepicker) -> selecting by Id
    $('input') -> selecting by Tagname
    $('.date') -> selecting by class 
    $('input.date') -> using some sort of css advanced selector...

*/


let selectingById = document.getElementById('roow')
let selectingTag = document.getElementsByTagName('input')
let selectingClass = document.getElementsByClassName('date')
let querySelector = document.querySelectorAll('div.date')


// Example of using the jquery Each method

$('input.date').each(function(index,element){
    $(element).text("Hello: " + index)
})


// but how can we do this nativly????

document.querySelectorAll('input.date').slice().forEach((element, index) => {
    element.innerText = "Hello " + index
})

// native option 2....

let nodes = document.querySelectorAll('input.date');

[].forEach.call(nodes, function(element, index){
    element.innerText = "Hello " + index 
})

// Native option 3 making a helper function...


function $(selector){
    return [].slice.call(document.querySelectorAll(selector))
}


$("input.date").forEach(function(element, index){
    element.innerText = "Hello : " + index
})

/*
        getting a group of elements from the dom
*/

// in jQuery 

$('div.date').eq(3)
$('div.date').get(3)
$('div.date')[3]

// Nativly in JavaScript...

/*

    Get the .item() in JavaScript...

*/


let elements = document.querySelectorAll('div.date')
let element = elements.item(3)


// getting the first and last nativly in JavaScript

// getting all dates....

let dates = document.querySelectorAll('input.dates')
dates[0]


// or you can use the querySelector() method which only gets the first 
// match anyways...

let first = document.querySelector('div.dates')


// getting the last option as well some tricks...

dates[dates.length-1]

// a little bit different method is 

let last = [].pop.call(dates)


// How to know what type of element it is....

$('#widget').is('input.date')

// but nativly in JavaScript...
document.getElementById('widget').matches('input.date')

/*

        How to filter in jQuery, make sure 

*/

//  Translate this into JavaScript....
let dates = $('div.date')
dates.filter("[pattern]")

dates.filter(function(index){
    return !!$(this).val().length
})


// first I must get the dates and then translate into []

dates = [].slice.call(document.querySelectorAll('div.date')).filter((ele) => {
    return !!ele.value.length
})



// How to use the .find in jQuery...

$('#main').find('input.date')


// but in javascript...

document.getElementById('main').querySelectorAll('input.date')

// now how to find all child nodes over a list of nodes....


let divs = document.querySelectorAll('div'), inputs = [];

[].forEach.call(divs, function(div){
    inputs = inputs.concat([].slice.call(div.querySelectorAll('p')));
})


// Next and previous in jQuery...

let element = $('#widget'), prev = element.prev(), next = element.next();


// in Native JavaScript you can use the previousElementSibling

let element = document.getElementById('widget'), 
prev = element.previousElementSibling, 
next = element.nextElementSibling;

