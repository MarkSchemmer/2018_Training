

$stirng1 = "It can be double quotes..."

$string2 = 'can be in single quotes as well...'



$blockexample = @"


    a block quote or string ....


"@


# also you can run a sql statement from a block quote in sql .......

$items = (Get-ChildItem).Count

$loc = Get-Location     # gets current location or file path.....


$loc


$str = "There are $items in $loc"



#string formatting - C# like syntax is supported!
[string]::Format("There are {0} items", $items)


# PowerShell shortcut.....
$shortcut = "There are {0} items. " -f $items




@"

    When formatting numbers 

        {0:N0}   -> N says it's a number, 0 after the N says how many deciaml places...


        {0,8:N0}  the 0,8 says


"@


# creating an empty array 

$array = @()


$array += 1
$array += 2


# then you can index in and change values ....


# hashes....

$hash = @{
    "Key" = "Value";
    "PowerShell" = "powerShell.com"
}


$hash.Key

$hash.PowerShell

# creating a new value 
$hash.PluralSight = "pluralSight.com"

# creation is a little different but access is the same as JSON....



# can remove by key...

$hash.Remove("Key") # example....


# Contains goes by Key .....

$hash.Contains("Key")



# or can use the ContainsValue()...


$hash.ContainsValue("Value")

$has




