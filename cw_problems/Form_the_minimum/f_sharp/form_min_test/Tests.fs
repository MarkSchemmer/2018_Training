module Tests

open System
open Xunit
open Fuchu 

let myFormMin (arr:List<int>) =
    arr |> List.sort 
        |> List.distinct
        |> String.Concat
        |> Convert.ToInt32 

let rand = Random()

let RandomTests expected actual = Assert.Equal("expected===actual?", expected, actual)

type _testCases = {expected:int; actual:int}
let mutable (testCaseList: _testCases list) = []

let randomGenerator() = 
    for x in 1..100 do 
        let many = [1..rand.Next(5,10)]
        let actual = myFormMin(many)
        let expected = myFormMin(many)
        testCaseList <- {expected=expected;actual=actual}::testCaseList
    testCaseList

[<Tests>]
let suite = 
    testList "solution" [
        testCase "demo test 1" <| 
            fun _ -> Assert.Equal("[1;3;1]=13", myFormMin([1;3;1]), 13)
        testCase "Test [4;7;5;7]=457" <| 
            fun _ -> Assert.Equal("[4;7;5;7]=457", myFormMin([4;7;5;7]), 457)
        testCase "Test [4;8;1;4]=148" <|
            fun _ -> Assert.Equal("Test [4;8;1;4]=148", myFormMin([4;8;1;4]), 148)
        testCase "Test [5;7;9;5;7]=579" <| 
            fun _ -> Assert.Equal("[5;7;9;5;7]=579", myFormMin([5;7;9;5;7]), 579)
        testCase "Test [6;7;8;7;6;6;]=678" <|
            fun _ -> Assert.Equal("[6;7;8;7;6;6;]=678", myFormMin([6;7;8;7;6;6;]), 678)
        testCase "Test [5;6;9;9;7;6;4]=45679" <|
            fun _ -> Assert.Equal("[5;6;9;9;7;6;4]=45679", myFormMin([5;6;9;9;7;6;4]) ,45679)
        testCase "Test [1;9;1;3;7;4;6;6;7]=134679" <|
            fun _ -> Assert.Equal("[1;9;1;3;7;4;6;6;7]=134679", myFormMin([1;9;1;3;7;4;6;6;7]), 134679)
        testCase "Test [3;6;5;5;9;8;7;6;3;5;9]=356789" <|
            fun _ -> Assert.Equal("[3;6;5;5;9;8;7;6;3;5;9]=356789", myFormMin([3;6;5;5;9;8;7;6;3;5;9]), 356789)
        testCase "random tests" <| (fun _ -> 
                                            for i in randomGenerator() do 
                                                RandomTests i.expected i.actual)
    ]