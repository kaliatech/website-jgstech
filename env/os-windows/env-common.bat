@echo off

SET PROJECT_HOME=C:\Projects\misc\website-jgstechnical-2


SET PATH=C:\Develop\nodejs;%PATH%
SET PATH=%APPDATA%\npm;%PATH%
SET PATH=%PROJECT_HOME%\node_modules\.bin;%PATH%

SET PATH=%PATH%;C:\Cygwin64\bin
SET PATH=%PATH%;C:\Program Files\Git\bin

cd %PROJECT_HOME%