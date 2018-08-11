

# can add more commands through the use of modules...


Get-Command  # retrieves all commands in powershell....


Get-Command -verb #specifies verbs

Get-Comand -noun #specifies nouns 

# Get-Help takes 1 command the cmd-let you want to know more about 
# can add -examples which gives examples of using Get-Command
# can add -Online which will give the Microsoft documentation of that command online 
Get-Help Get-Command #Get-Help -> can be used to explain a command 



# Dealing with Aliases....


Get-Alias dir # Get-Alias takes a argument of alias and that show the 



Get-Help Get-Alias -examples 


# getting aliases for a cmdlet
Get-Alias -Definition Get-ChildItem



# pipelining in PowerShell


Get-Alias -Definition Set-Location # but what I learned from this command is that I can  use many aliases as well 


Set-Location "D:/My_Files"


# piping commands.... with the | 

# in PowerShell everything is a .Net object... 

# the $_ is the current object in the Pipe....


# mb, kb, gb

Get-ChildItem | Where-Object { $_.Length -gt 10kb }

cd 'C:\Users\Mark James Schemmer\'


Get-ChildItem | 
    Where-Object { $_.Length -gt 10kb } | 
    Sort-Object Length


    # format table...


    Get-ChildItem | 
    Where-Object { $_.Length -gt 10kb } | 
    Sort-Object Length | 
    Format-Table -Property Name, Length -AutoSize



    # select-object, creates a new object from the objects flowing into it....


   $objects =  Get-ChildItem | 
                    Select-Object Name, Length | 
                    Format-Table Name, Length


$objects



# Out-GridView ?????


Get-ChildItem | Out-GridView


#   -PassThru  will take the selection of the Out-GridView and pass that through the pipe....
# can as well use the -OutputMode Single or -OutputMode Multiple which determines how many things I can select!!!!

# add title as well to the GridView....

# -OutVariable -name which will pass the result to a variable....


# Format-Table will return text... formatted

# is better to use Select-Object to modify and return a new object....


#Providers!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


Get-PSProvider 


Get-PSDrive


$IsThisHere = "Hello World"


Get-ChildItem | Where-Object { $_.Name -eq "IsThisHere" }