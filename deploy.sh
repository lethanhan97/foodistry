cd "../lethanhan97.github.io"
git remote add origin https://github.com/lethanhan97/lethanhan97.github.io.git
git add .
git commit -m "deploy"
git branch -M main
git pull origin main --allow-unrelated-histories
git push --set-upstream origin main