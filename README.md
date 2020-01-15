# TRASH

Welcome to the offical GitHub repository for the TRASH website, located at [_https://trash.app_](https://trash.app/)

If you’d like to make edits to the website, please read this README thoroughly. It will provide you will all the tools you need to get running.

## *Table of Contents*

  - [**Getting Started**](#getting-started)
  - [**Contributing**](#contributing)
  - [**Troubleshooting**](#troubleshooting)

---

### **Getting Started**

If you’ve never used Jekyll before, we’ll need to get you up-to-speed.

#### Step 1

The site uses [Jekyll](https://jekyllrb.com/), so you'll need to make sure that you have a few tools installed. First, let’s make sure you have Xcode Command Line Tools installed. In your terminal, type the following command:

```sh
xcode-select --install
```

Next, make sure you have at least Ruby 2.4.0 installed on your machine. For details on how to do this, please see [this guide.](https://jekyllrb.com/docs/installation/)

Finally, we'll install the Jekyll gem:

```sh
gem install jekyll
```

#### Step 2

In your Terminal and clone the repository with the following command:

```sh
git clone https://<your username>:<your password>@github.com/TRASH-INC/trash-inc.github.io.git
```
If you have SSH setup with github use:
```sh
git clone git@github.com:TRASH-INC/trash-inc.github.io.git
```

Next, you'll `cd` into the cloned `trash-inc.github.io` folder using the command:

```sh
cd trash-inc.github.io
```

#### Step 3

Since Jekyll uses [Bundler](https://bundler.io), we need to make sure that the gems listed in our [Gemfile](/blob/master/Gemfile) we need are installed. to do that, run the command:

```sh
bundle install
```

Once that's complete, you can run the site's local server with the command:

```sh
bundle exec jekyll serve --watch --incremental --livereload
```

This will generate a URL that will allow you to see changes as you make them live. Any changes you make will automagically refresh in the browser. ☺️

---

### **Contributing**

If you have quick edits you need to make, first make sure you have the most updated files to work with:

```sh
git pull origin master
```

Then, create a new branch:

```sh
git checkout -b <name of your branch>
```

Make your changes to the files necessary.

Next, push your changes to your remote branch:

```sh
git push origin <name of your branch>
```

You can then go to the [TRASH website repository](https://github.com/TRASH-INC/trash-inc.github.io) and submit a pull request so that your changes can be checked over (it isn’t a good idea to make changes directly to `master` since the `master` branch is directly connected to our App Store app).

Once you get approval, you can merge your branch into `master`.

---

### **Troubleshooting**

If you're having trouble setting this up, please post a message in the [#engineering](https://app.slack.com/client/T6DMJDJ4R/CHQETFH60) or [#design](https://app.slack.com/client/T6DMJDJ4R/CHRUSE9RC) channel in Slack.
