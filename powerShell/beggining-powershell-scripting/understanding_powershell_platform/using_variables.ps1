

# all variables start with $

$mark = "mark"

# print value 
$mark 

#Variables have types ...
$mark.GetType()

# PowerShell is built on top of the .Net framework!!!!



# members are available to use when needed...
$mark | Get-Member


#Types are mutable!


# But as well variables can be strongly typed when needed!

# can add [Sytem.dataType] -> [System.Int32]$myInt = 50

# can add a shortcut of [int]

'''

    -eq
    -ne -> Not equal to
    -lt -> less than
    -gt -> greater than 
    -le -> less than or equal to
    -ge -> Greater than or equal to 

    -in -> See if value is in the array

    -notin -> See if a value is missing from an array

    -Like -> Like patter matching wild card
    -NotLike -> Not Like
    -Match -> Matches based on the regular expressions

    as supports ++ and -- supports in pre unary and post unary form 

    when comparing whatever is on the left will be converted to the datatype on the left for example

    42 -eq "042"

    "042" gets converted to int 

''' 

'''

    Built in variables....


    $false or $true or $Null 




    $pwd -> Current Directory path....


    $Home -> which is the users Home directory...



    # info about a users scripting environment
    $host 



    # Process ID....
    $PID


    #info about the current version of PowerShell...
    $PSVersionTable



    #Current Object....
    $_


'''


'''

    Get-Variable # shows all variables...

    Clear contents of a variable 

    Clear-Variable -Name -name....




    if you want to wipe out a variable do....

    Remove-Variable -Name -name...



'''





