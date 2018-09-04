module Program =
open System 
open Fuchu
 
[<EntryPoint>] 
let main args = 
    let exitCode = Tests.defaultMainThisAssembly args 

    Console.WriteLine("Press any Key")
    Console.ReadLine () |> ignore 

    exitCode 
