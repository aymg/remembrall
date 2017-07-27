# Remembrall

#### Never forget to add the ticket to the start of your commits

A dev dependency to guarantee that you always add list the ticket in your commits.

## Usage

#### Per project
Install it as a dev dependency.

```bash
git init
npm i remembrall --save-dev
```

#### Globally
Install it as a global package and hook into any project.

```bash
npm i remembrall -g
cd my-project

remembrall install
```

Then go about your daily routine worry free 🎉
```
git checkout feature/FAD-1234

# make some changes

git add -A && git commit -m "cool stuffs"
# the commit message becomes "FAD-1234 cool stuffs"
````

#### Other git magic
* [giddy](https://github.com/captainsafia/giddy) - A CLI wrapper around git for an improved developer experience
* [gitplus](https://github.com/SparkPost/gitplus) - Generic tools and instructions for making it easier to work with git as a team.