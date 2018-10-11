// leap.js

let isLeap = (year) => year%4===0&&year%100!==0?true:year%400===0?true:false  


module.exports = { isLeap : isLeap }