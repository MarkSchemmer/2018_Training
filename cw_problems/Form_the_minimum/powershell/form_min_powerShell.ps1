# Notes about the problem...


@"
        Task
        Given a list of digits, return the smallest number that could 
        be formed from these digits, using the digits only once ( ignore duplicates). 

        Notes :
        Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

        Input >> Output Examples
        1- minValue ({1, 3, 1})  ==> return (13)
        Explanation:
        (13) is the minimum number could be formed from {1, 3, 1} , Without duplications 

        2- minValue({5, 7, 5, 9, 7})  ==> return (579)
        Explanation:
        (579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications 

        3- minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
        Explanation:
        (134679) is the minimum number could 
        be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications 



        there are two ways of solving this problem sorting
        and then all possible combinations with the comparision of which
        one is least greatest!
"@

# this is the winning solution
function Get-MinValue([int[]]$values) {
    $unique = $values | Select-Object -Unique 
    $sorted = $unique | Sort-Object
    return [int]::parse(-join $sorted)
}

function Get-MinValue_2([int[]]$values) {
    $unique = $values | Select-Object -Unique | Sort-Object 
    return [int]::parse(-join $unique)
}




# the next way is to attempt to use dynamic programming ... 
# that will be a little harder though...
# basically get all the combinations possible loop through and 
# get the smallest value!

