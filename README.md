# Event Feed

A platform for Ohio State students to keep up with the various happenings around campus.

## 🛠️ Getting Started

> [!IMPORTANT]
> This project uses...
> * `node 22` as runtime. 
> * `npm` as package manager.
> * `vite` as bundler.
> * (Later `vitest` as testing framework.)
> * `biome` as formatter/linter.

1. Setup Node.js 22 via `nvm`.

> https://nodejs.org/en/download/package-manager

2. Clone the repository, and `cd` to the directory.

```bash
git clone https://github.com/devosu/event-feed.git

cd event-feed
```

3. List all the remote branches, find the one you are responsible for, and create a local copy of the branch. Make sure your branch is up to date with main.

```bash
# Update your local main branch.
git switch main
git pull origin main

# Fetch all remote branch info. 
git fetch origin

# List all available branches.
git branch -a

# Switch to and create a local copy of the remote feature branch.
git switch --track origin/Feature/NameOfTheFeature

# Make sure your local branch is up-to-date with main.
git merge main
```

4. Install the dependencies, and start the development server.

```bash
npm install

npm run dev
```

5. You are now ready to contribute! 

> [!NOTE]
>
> Remember to create a [**Pull Request**](https://github.com/devosu/event-feed/pulls) and request code review when merging to main.

## 🛡️ License

[MIT](https://choosealicense.com/licenses/mit/)

## 💖 Community

### Contributors

<a href="https://github.com/devosu/event-feed/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=devosu/event-feed" />
</a>

Made with [contrib.rocks](https://contrib.rocks).

### Activities

![Alt](https://repobeats.axiom.co/api/embed/3e06dedb0246fa2246c695deef9c9219e9e539cb.svg "Repobeats analytics image")
