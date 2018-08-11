

# basic module ...

function out1 () {
    Write-Output 'One33'
}

function out2 () {
    Write-Output 'Two'
}

# if you create a variable it will be scoped to module...
$scopedToModule = "I'm scoped only to this module"


# if you want a global variable then use $Global like so below

$Global:scopedGlobal = "I'm a global variable...."



# a better solution is to use a script level variable and wrap in a function

$Script:scopedToScript = "I'm scoped to a function...."


function Get-ScopedScript (){
    return $Script:scopedToScript
}

