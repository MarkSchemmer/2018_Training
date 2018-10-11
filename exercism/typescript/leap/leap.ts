let isLeapYear = (year:number) => year%4===0&&year%100!==0?true:year%400===0?true:false; 

export default isLeapYear