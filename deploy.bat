@echo off
echo ========================================
echo   部署到 GitHub Pages
echo ========================================
echo.

REM 构建项目
echo [1/2] 正在构建项目...
cd web-portfolio
call npm run build
if %errorlevel% neq 0 (
    echo 构建失败！
    pause
    exit /b 1
)

REM 复制到根目录
echo.
echo [2/2] 复制文件到根目录...
cd ..
del /Q index.html vite.svg 2>nul
rmdir /Q /S assets 2>nul
copy /Y web-portfolio\dist\index.html .
xcopy /E /I /Y web-portfolio\dist\assets assets
copy /Y web-portfolio\dist\vite.svg .

REM 提交并推送
echo.
echo 提交并推送到 GitHub...
git add assets index.html vite.svg
git commit -m "Update site"
git push

echo.
echo ========================================
echo   部署完成！
echo   访问: https://crybaby90.github.io/WebCreater/
echo ========================================
pause
