# Git Submodules

## `.gitmodules` config

Scaffolded repositories are defined as git submodules in `.gitmodules` file in the root.

```
[submodule "template/architecture-decision-records"]
	path = template/architecture-decision-records
	url = https://github.com/skyisuniverse/architecture-decision-records
[submodule "template/simulation-tool"]
	path = template/simulation-tool
	url = https://github.com/skyisuniverse/simulation-tool
```

## How to add repo as a git submodule 

To add a repository as a submodule, run:

```bash
git submodule add <github-url> <path>
```

e.g.:

```bash
git submodule add https://github.com/skyisuniverse/simulation-tool template/simulation-tool
```

this will register a repo in `.gitmodules` file.

## How to commit the submodule configuration

Stage and commit the new .gitmodules file along with the submodule references:

```bash
git add .gitmodules template/
git commit -m "Add architecture-decision-records and simulation-tool as submodules"
```

## Useful Commands for Managing All Submodules at Once

Once set up, you can run Git commands across all submodules from the root `create-adr-app` directory:

### Pull the latest changes for all submodules

```bash
git submodule update --remote --merge
```

### Run any arbitrary Git command across every submodule

```bash
git submodule foreach 'git status'
git submodule foreach 'git pull origin main'
```

### Clone create-adr-app in the future with submodules included

```bash
git clone --recurse-submodules https://github.com/skyisuniverse/create-adr-app
```
