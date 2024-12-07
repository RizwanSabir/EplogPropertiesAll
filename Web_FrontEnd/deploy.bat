@echo off
REM Navigate to the project directory
cd /d "D:\Cubic Project\code\Eplog\dist"

REM Initialize git repository 
git init

REM Configure git-ftp
git config git-ftp.url ftp://affinix.co/
git config git-ftp.user rizwan@affinix.co
git config git-ftp.password Pakistan@786

REM Add and commit changes
git add .
git commit -m "Changes made on %date% at %time%"

REM Initialize git-ftp
git ftp init

REM Push new data after deleting existing server files
git ftp push --delete

echo Deployment complete!
pause
