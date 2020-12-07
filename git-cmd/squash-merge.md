Another way to squash all your commits is to reset the index to master:
```bash
git checkout yourBranch
git reset $(git merge-base master yourBranch)
git add -A
git commit -m "one commit on yourBranch"
```
