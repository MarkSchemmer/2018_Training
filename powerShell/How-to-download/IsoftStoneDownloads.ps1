

# $path should be path to downloads file.....
# C:\Users\Mark James Schemmer\Downloads\

# https://dl.google.com/tag/s/appguid%3D%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D%26iid%3D%7B67481A4A-0924-D489-49C7-E44F813AC52D%7D%26lang%3Den%26browser%3D4%26usagestats%3D1%26appname%3DGoogle%2520Chrome%26needsadmin%3Dprefers%26ap%3Dx64-stable-statsdef_1%26brand%3DCHBD%26installdataindex%3Dempty/update2/installers/ChromeSetup.exe


# example of the path you should put in....
# need to add 

@"

.SYNOPSIS
.DESCRIPTION
.PARAMETER <Parameter-Name>
.EXAMPLE
.NOTES
.LINK

"@

# will put all executables there...
# then will download each one....
$Path = "C:\Users\Mark James Schemmer\Desktop\testsHere"

function Get-DownLoads ($Path) {

    $chromeFile = $Path + "\ChromeDownload.exe"
    $chromeDownLoadUrl = "https://dl.google.com/tag/s/appguid%3D%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D%26iid%3D%7B67481A4A-0924-D489-49C7-E44F813AC52D%7D%26lang%3Den%26browser%3D4%26usagestats%3D1%26appname%3DGoogle%2520Chrome%26needsadmin%3Dprefers%26ap%3Dx64-stable-statsdef_1%26brand%3DCHBD%26installdataindex%3Dempty/update2/installers/ChromeSetup.exe"

    Invoke-WebRequest $chromeDownLoadUrl -OutFile $chromeFile

    Invoke-Item $chromeFile

    $GitFile = $Path + "\GitDownLoad.exe"
    $GitDownLoadUrl = "https://github-production-release-asset-2e65be.s3.amazonaws.com/23216272/c0b82e3e-7623-11e8-93a5-b72bebbce542?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20180731%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20180731T162637Z&X-Amz-Expires=300&X-Amz-Signature=2a35e4c6e8724af6da6ac3beda95cba6c825e9e5abfa03483e05f6dd922e2069&X-Amz-SignedHeaders=host&actor_id=18133440&response-content-disposition=attachment%3B%20filename%3DGit-2.18.0-64-bit.exe&response-content-type=application%2Foctet-stream"
       
    Invoke-WebRequest $GitDownLoadUrl -OutFile $GitFile

    Invoke-Item $GitFile

    $vsocdeFile = $Path + "\Vscode.exe"
    $vscodeDownLoadUrl = "https://az764295.vo.msecnd.net/stable/1dfc5e557209371715f655691b1235b6b26a06be/VSCodeSetup-x64-1.25.1.exe"
   
    Invoke-WebRequest $vscodeDownLoadUrl -OutFile $vsocdeFile

    Invoke-Item $vsocdeFile
   
   
    $postFile = $Path + "\PostmanDownload.exe"
    $postDownLoadUrl = "https://dl.pstmn.io/download/latest/win64"

    Invoke-WebRequest $postDownLoadUrl -OutFile $postFile

    Invoke-Item $postFile


    $nodeFile = $Path + "\NodeDownload.exe"
    $nodeDownLoadUrl = "https://nodejs.org/dist/v8.11.3/node-v8.11.3-x64.msi"

    Invoke-WebRequest $nodeDownLoadUrl -OutFile $nodeFile

    Invoke-Item $nodeFile


    $mySQLFile = $Path + "\MySQLWorkBench.exe"
    $mySQLDownLoadUrl = "https://cdn.mysql.com//Downloads/MySQLGUITools/mysql-workbench-community-8.0.12-winx64.msi" 
    
    Invoke-WebRequest $mySQLDownLoadUrl -OutFile $mySQLFile

    Invoke-Item $mySQLFile
    
    $SQLiteFile = $Path + "\DbBrowserSQLite.exe" 
    $SQLiteDownLoadUrl = "https://github-production-release-asset-2e65be.s3.amazonaws.com/19416551/b73e003e-9e1c-11e7-9a47-4717867fc398?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20180731%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20180731T165711Z&X-Amz-Expires=300&X-Amz-Signature=395b3763debe458bd84b7841cb370c2c1cab21f87bcf77dc7e75a67bcb6c8254&X-Amz-SignedHeaders=host&actor_id=18133440&response-content-disposition=attachment%3B%20filename%3DDB.Browser.for.SQLite-3.10.1-win64.exe&response-content-type=application%2Foctet-stream"


    Invoke-WebRequest $SQLiteDownLoadUrl -OutFile $SQLiteFile

    Invoke-Item $SQLiteFile


    $DbBeaverFile = $Path+"\DbBeaver.exe"
    $DbBeaverDownLoadUrl = "https://dbeaver.io/files/dbeaver-ce-latest-x86_64-setup.exe"

    Invoke-WebRequest $DbBeaverDownLoadUrl -OutFile $DbBeaverFile

    Invoke-Item $DbBeaverFile


    npm install -g @angular/cli --save
    npm install -g react --save
    npm install -g express --save 
    npm install -g body-parser --save
    npm install -g path --save
    npm install -g mongoose --save
    npm install -g typescript --save
    npm install -g tslint --save
    npm install -g jasmine --save
    npm install -g karma --save 
  
}

