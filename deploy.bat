@echo off
echo ========================================
echo   部署到 GitHub Pages
echo ========================================
echo.

REM 构建项目
echo [1/3] 正在构建项目...
cd web-portfolio
call npm run build
if %errorlevel% neq 0 (
    echo 构建失败！
    pause
    exit /b 1
)

REM 复制 dist 到根目录
echo.
echo [2/3] 复制 dist 到根目录...
cd ..
xcopy /E /I /Y web-portfolio\dist dist
if %errorlevel% neq 0 (
    echo 复制失败！
    pause
    exit /b 1
)

REM 提交并推送
echo.
echo [3/3] 提交并推送到 GitHub...
git add dist
git commit -m "Update site"
git push

echo.
echo ========================================
echo   部署完成！
echo   访问: https://crybaby90.github.io/WebCreater/
echo ========================================
pause
