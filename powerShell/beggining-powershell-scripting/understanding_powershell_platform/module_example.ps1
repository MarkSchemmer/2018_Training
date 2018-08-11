
$ModuleLocation = 'D:\My_Files\courses\2018_training\powerShell\beggining-powershell-scripting\understanding_powershell_platform\demo\'
$ModuleName = 'ps1-module-simple'


$module = "$($ModuleLocation)$($ModuleName).psm1"

Import-Module -force $module



# Show a list of modules in memory...
Get-Module



out1


Get-ScopedScript


# you can remove a module from memory 

Remove-Module $module