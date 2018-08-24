// bind and unbind...



// getting a element and adding a event...


document.getElementById('save').addEventListener('click', () => {})// for 1 element...


// for many elements...

let buttons = document.querySelectorAll('button'), callback = () => {}

[].forEach.call(buttons, () => {
    buttons.addEventListener('click', callback)
})


// How to unbind

// Target and which...

// which ... 