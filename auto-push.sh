echo "Enter commit messages="
read commit

git add .
git commit -m "$commit"

git push origin votey

echo "push successfully"