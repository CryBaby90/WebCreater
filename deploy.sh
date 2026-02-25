#!/bin/bash
echo "========================================"
echo "   部署到 GitHub Pages"
echo "========================================"
echo ""

# 构建项目
echo "[1/2] 正在构建项目..."
cd web-portfolio
npm run build

# 复制到根目录
echo ""
echo "[2/2] 复制文件到根目录..."
cd ..
rm -rf assets index.html vite.svg 2>/dev/null
cp -f web-portfolio/dist/index.html .
cp -rf web-portfolio/dist/assets .
cp -f web-portfolio/dist/vite.svg .

# 提交推送
echo ""
echo "提交并推送到 GitHub..."
git add assets index.html vite.svg
git commit -m "Update site"
git push

echo ""
echo "========================================"
echo "   部署完成！"
echo "   访问: https://crybaby90.github.io/WebCreater/"
echo "========================================"
