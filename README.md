# trash-inc.github.io
TRASH github page

<b> FYI: </b>
* An alterantive to all of this is to use <b>GitHub Desktop</b> or to edit and commit using the browser GitHub file editor.
* To develop locally follow the *Requirements* and *Step 4* from these instructions:
https://help.github.com/en/articles/setting-up-your-github-pages-site-locally-with-jekyll


If you already have your Github account configured locally, skip the next section: 

### Follow these instructions to set up your GitHub account locally:

1. Install git using homebrew
```
brew install git 
```

2. Go to your home directory 
```
cd ~/
```

3. Run the following command
```
ssh-keygen -t rsa
```

4. When prompted to enter filename, press enter to use the default filename. When prompted to enter passphrase, also press enter for no passphrase. 

5. This creates an ssh key. Run the following command to copy it
```
pbcopy < ~/.ssh/id_rsa.pub
```

6. Log in to GitHub and go to your profile: https://github.com/settings/profile. <br>

7. Select <b>'SSH and GPG keys'</b>, then select <b>'New SSH Key'</b>, and paste the key.<br>

8. Click <b>'Add SSH Key'</b> <br>

### Cloning the website repo:

You can now clone the website repo locally by running: <br>
```
git@github.com:TRASH-INC/trash-inc.github.io.git
```

### To edit locally and deploy your changes:


1. Navigate to the repo location
```
cd trash-inc.github.io
```
2. Check if there are changes in the remote that you do not have locally
```
git status 
```
3. If there are, pull those changes 
```
git pull
```
4. Change your files locally 
5. Add any new files
```
git add .
```
6. Commit your changes with a commit message explaining the changes 
```
git commit -m "this is my commit message"
```
7. Deploy to master
```
git push origin master 
```

### Some notes:

To check what's happening at any point in time: 
```
git status 
```

To create a new branch:

```
git checkout -b newbranchname
```

To switch to a branch: 
```
git checkout branchname
```

To switch back to master: 
```
git checkout master
```





