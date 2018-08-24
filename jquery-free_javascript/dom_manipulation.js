// Dom manipulation...


// jQuery with adding class or removing class...

let widget = $('#widget')

widget.addClass('active')
widget.removeClass('active')
widget.toggleClass('active')
widget.hasClass('active')

// Now to have these things nativly...

widget = document.getElementById('widget')

widget.className // will give a string of classess....

// adding a class..

widget.className += ' newClassName'


// removing a class 

widget.className = widget
                    .className.split(' ')
                    .filter(x => x !== 'className')
                    .join(' ')

// an example of hasClass....

let hasClass = widget.className.includes('className') // should return a boolean if that does nto work 

hasClass = widget.className.split(' ').indexOf('className') >= 0 // should work on later browsers... 

// possible could write a  extension for the prototype of String



// getting the text and html of elements in Native JavaScript....


widget = document.querySelector('widget')

widget.innerText // getter returns text
widget.innerText = 'some other text' // setter


widget.innerHtml  // getter and return <input type="checkbox" /> ... the html element basically...
widget.innerHtml = "<input type='checkbox' />" // setter and can set html...



// creating elements and appending or preapending

/*
        1. create element
        2. add content
        3. then insertbefore or after
*/

let pdDiv = document.createElement('div')
pdDiv.innerText = 'vanilla JavaScript'

 // inserting before element but it's still inside of the element that was created...
document.getElementById('vanilla').insertBefore(pdDiv)

// insert element after all elements of the element that was created...
document.getElementById('vanilla').appendChild(pdDiv) 

// could easily create method to help with this...


// How to remove items from an element...

widget = document.getElementById('widget')

widget.innerHtml = "" // way 1

while(widget.lastChild){
    widget.removeChild(widget.lastChild)
} // way 2 ....


widget.parentNode.removeChild(widget) // way 3....

// when reading form elements you'll have to read and set the elements 

let search = document.getElementById('search')

search.value // getter
search.value = 'some other value' // setter



