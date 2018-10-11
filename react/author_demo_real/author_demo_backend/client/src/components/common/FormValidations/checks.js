
let moreThan3Chars = (value, field) => value.length > 3 ?
    true : {type:'moreThan3Chars',msg:`${field} Should be more than 3 Chars`} 

let lessThan20Chars = (value, field) => value.length < 20 ? 
   true : {type:'lessThan20Chars',msg:`${field} Should be less than 20 Chars`}
   
let shouldOnlyContainLetters = (value, field) => value.toLowerCase().match(/^[a-z]{1,}$/) ?
    true :{type:'containOnlyLetters', msg:`${field} Shold only contian letters a-z`}
   
let IsValidTwitterHandler = (handle) => handle.match(/^@.{3,}/) ? 
   true :{type:'validTwitterHandler', msg:'Invalid twitter handle'}

let clone = (obj) => (JSON.parse(JSON.stringify(obj)))


let validate = (field, obj, fn) => {
    let newFormObj = clone(obj);
    let input = obj[field]
    input.errors = {}
    which(field).forEach(fn => {
        let output = fn(input.value, field)
        if(output !== true){
            input.errors[output.type] = output.msg 
        }
    })
    let should = Object.keys(input.errors).length>0 ? true : false 
    input.shouldShowError = should
    newFormObj[field] = input 
   fn()
}

let validateAddAuthor = (field, obj, fn) => {
    let newFormObj = clone(obj);
    let input = obj[field]
    input.errors = {}
    which(field).forEach(fn => {
        let output = fn(input.value, field)
        if(output !== true){
            input.errors[output.type] = output.msg 
        }
    })
    let should = Object.keys(input.errors).length>0
    && input.dirty && input.hasChanged ? true : false 
    input.shouldShowError = should
    newFormObj[field] = input 
   fn()
}



let which = (field) => {
    let errorsToCheck = []
    switch(field){
         case 'twitterHandler' :
             errorsToCheck = [moreThan3Chars, IsValidTwitterHandler]
             break 
         case 'firstName' : 
             errorsToCheck = [moreThan3Chars, 
                                 lessThan20Chars, 
                                 shouldOnlyContainLetters]
             break 
         case 'lastName' :
                 errorsToCheck = [moreThan3Chars, 
                                 lessThan20Chars, 
                                 shouldOnlyContainLetters]
             break 
         default :
                     // nothing here
             break 
    }
    return errorsToCheck
 }



let formObj = () => {
    return {   
        twitterHandler:{ 
            value:'', touched:null, dirty:null, 
            shouldShowError:false, 
            hasChanged:false, errors:{}
        },
        firstName:{ 
            value:'', touched:null, dirty:null, 
            shouldShowError:false,
            hasChanged:false, errors:{}
        },
        lastName:{
         value:'', touched:null, dirty:null,
         shouldShowError:false,
         hasChanged:false, errors:{}
        }, 
    }
}




   export { moreThan3Chars,
            lessThan20Chars,
            shouldOnlyContainLetters,
            IsValidTwitterHandler, validate, validateAddAuthor,
            clone, formObj, which }