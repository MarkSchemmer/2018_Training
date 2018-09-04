namespace form_min
open System 
module PigLatin =
    let toPigLatin (str:string) = 
        let vowels = set ['a';'i';'o';'u'] 
        let firstChar = str.[0]
        if vowels.Contains(Char.ToLower firstChar) then 
            str + "yay"
        else  
            str.[1..] + Char.ToString(firstChar) + "ay"


    let formMin (arr:List<int>) =
            arr |> List.sort 
                |> List.distinct
                |> String.Concat
                |> Convert.ToInt32 
    let test = formMin [5;7;5;9;7]


