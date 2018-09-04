
open System 
let toPigLatin (str:string) = 
    let vowels = set ['a';'i';'o';'u'] 
    let firstChar = str.[0]
    if vowels.Contains(Char.ToLower firstChar) then 
        str + "yay"
    else  
        str.[1..] + Char.ToString(firstChar) + "ay"

toPigLatin("Mark")

            