@echo off
rem A batch script to add, commit, and push all changes.

echo.
echo Staging all changes...
git add .

echo.
rem Prompt for a commit message
set /p commit_message="Enter commit message (or press Enter for 'Update content'): "

rem If the message is empty, provide a default one
if "%commit_message%"=="" set commit_message=Update content

echo.
echo Committing with message: "%commit_message%"
git commit -m "%commit_message%"

rem Check if commit was successful
if errorlevel 1 (
    echo Commit failed. Aborting push.
    pause
    exit /b
)

echo.
echo Pushing to origin main...
git push origin main

echo.
echo --- Push complete! ---
pause
