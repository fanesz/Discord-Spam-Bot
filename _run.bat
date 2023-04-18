@echo off
IF EXIST "./package-lock.json" GOTO found
IF NOT EXIST "./package-lock.json" GOTO notfound

:found
start cmd /k "node main.js & pause & exit"
GOTO end

:notfound
cd /D "%~dp0"
start cmd /k "npm init -y & npm i discord.js-selfbot-v13@latest & node main.js & pause & exit"
GOTO end

:end
