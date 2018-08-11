
#if/else

$num = 2 

if($num -eq 1) {
        Clear-Host 
        "IF Branch"
} elseif($num -eq 2){

        "Else if Branch"

} else {
    "Else Branch"
}


@"
    if you want to do mutliple checks do a switch statement....
"@

$x = 2 

switch ($x) {
    1 { 
        "hit the 1 statement"
        break 
      }
    2 { 
        "hit the 2 statement!!!!"
        break
      }
    default { "This is the default statement!!!!"}
}


# switch works with a collections, looping and executing for each match
# but you cannot use the break statement....
switch (3,1,2,42) {
    1 { "One"}
    2 {"Two"}
    3 { "Three"}
    Default { "The default answer!!!!"}
}


# if matching a string can use and you want to match exactly use the -casesensitive 


switch -CaseSensitive ("test"){
    "Test" { " does it match"; break }
    default {"Does not match any"}
}



# can also match -Wildcard switch...


switch -Wildcard ("PluralSight"){
    "plural*" {"anything with plural"}
    default { " nothing matched"}
}



# looping....


#while 

$i = 1
while($i -le 5){
    "`$i = $i"
    $i += 1
}



# do while is the same as any language...
$i = 1
do {
    "`$i = $i"
    $i++
} while ($i -le 5)



# for-loop is same as well....

for ($f = 0; $f -le 10; $f++) {
    "`$f = $f"
}



# using the foreach is the same as well...
$ar = 1..15
foreach ($item in $ar){
    "`$item = $item"
}



# use loop labels to break a certain loop....


:outsideloop foreach ($item in 1..3) {
    "`$outsideloop = $item"
    foreach ($inside in 4..6){
        "`$inside = $inside"
        break outsideloop
    }
}


# a script is a stand alone object...

#script block..
{ "this is a script but does not execute.. "; Clear-Host }


& { Clear-Host; "This Script block will execute because we have the & sign in front..."}


# lets store a script block in a varible...

$var = { Clear-Host; "script block in a variable... var..."}

$var 

# to execute the block lets use the & sign...

& $var # this will execute the script block....