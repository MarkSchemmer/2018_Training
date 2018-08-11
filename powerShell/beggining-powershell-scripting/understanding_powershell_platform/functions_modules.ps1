
# basic functions....


function Show-HelloWorld() {
    Clear-Host 
    "Hello world"
} 

# when you want to call or use this function 
# just type Helloworld and it will execute the function...


# when creating a functioin you must use a approved verb by powerShell...


# if you would like a list of approved verbs use the Get-Verb command to get a list of verbs..

Show-HelloWorld
Get-Verb

# example of using a function with parameters...
function Get-FullName ($first, $last) {
    Clear-Host;
    Write-Host("$first $last");
}

# note when calling a function with parameters It's the same as in F#
# see below for example but not () or commas , just a space 

Get-FullName "mark" "schemmer"


# when passing into parameters it copys the parameter ... the original value will still be retained...

# use the [ref] keyword to effect the variable outside of the function....
# but using the [ref] will turn the variable into a object 
# thus requiring the .Value syntax!!!



@"

    Writting a function that can be piped is known as writting a advanced function...
    an example of that would be..... I will write a small function for getting .ps1 files...
"@


function Get-Ps1Files () {
    begin {
            $files = @()
     }

    process {
            if($_.Name -like "*.ps1") {
                $files += $_
            }
     }

    end { 
            return $files
    }
}


$BigPs1String = Get-ChildItem | Get-Ps1Files



# writing an advanced function with a param block and parameter decorators...

function Get-Value () {
    [cmdletBinding()]
    param (
        [Parameter(Mandatory = $true, HelpMessage = " Please enter a value for one")] 
        [int] $one,
        [Parameter( Mandatory = $true, HelpMessage = " Please enter a value for two ")]
        [int] $two
    )

    begin { }

    process { return $one * $two }

    end { }
}

