open System 
    let formMin (arr:List<int>) =
        arr |> List.sort 
            |> List.distinct
            |> String.Concat
            |> Convert.ToInt32 