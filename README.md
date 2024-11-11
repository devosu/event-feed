# Event Feed

A platform for Ohio State students to keep up with the various happenings around campus.

## 🛠️ Getting Started

> [!NOTE]
> This project uses...
>
> * [`Git`](https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F) as version manager.
> * [`GitHub`](https://www.geeksforgeeks.org/what-is-github-and-how-to-use-it/) for code hosting and collaboration.
> * [`node 22`](https://www.geeksforgeeks.org/node-js-introduction/) as dev server runtime.
> * [`npm`](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager) as package manager.
> * [`vite`](https://vite.dev/) as website bundler.
> * (Later [`vitest`](https://vitest.dev/) as testing framework.)
> * [`biome`](https://biomejs.dev/) as formatter/linter.
> * [`husky`](https://typicode.github.io/husky/) for git hooks and automation.

### Step 1. Set Up Node.js 22

> https://nodejs.org/en/download/package-manager

Download and install Node.js version 22 from official website, choosing via the node version manager (nvm) option. Example screenshot for Linux users:

![Node.js 22 setup example for Linux screenshot](/docs/screenshots/Node.js%2022%20setup%20via%20nvm.png)

To verify successful `node 22` setup, check the currently installed version in your terminal:

```bash
node --version
```

### Step 2. Set Up Git

> https://git-scm.com/downloads

To verify successful `git` setup, check the currently installed version in your terminal:

```bash
git --version
```

You are now ready to clone the repository, using your terminal:

```bash
git clone https://github.com/devosu/event-feed.git
```

Make sure to switch to the cloned repository directory (`cd`) in your terminal to move on to the next step:

```bash
cd event-feed
```

### Step 3. Set Up Collaboration

Using `git`, in your terminal:

1. list all the remote branches,
2. find the feature branch you are responsible for,
3. create your local copy of the branch,
4. make sure your branch is up to date with main.

```bash
# Update your local main branch.
git switch main
git pull origin main

# Fetch all remote branch info. 
git fetch origin

# List all available branches.
git branch -a

# Switch to and create a local copy of the remote feature branch.
git switch --track origin/Feature/YourFeature

# Make sure your local branch is up-to-date with main.
git merge main
```

> [!NOTE]
>
> Remember to create a [**Pull Request**](https://github.com/devosu/event-feed/pulls) and request code review when merging to main.

### Step 4. Set Up Firebase

Install the dependencies using `npm` in your terminal:

```bash
npm install
```

Then start the development server **for the first time** in your terminal:

```bash
npm run dev
```

Your terminal should output something like this: 

```bash
$ npm run dev

> event-feed@0.1.0 dev
> vite

Re-optimizing dependencies because lockfile has changed

  VITE v5.4.6  ready in 651 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

If you copy and paste the `localhost` url into your browser, you might find that you are seeting blank screen instead of default project screen.

Example of black screen with Firebase error:

![Example of blank screen with Firebase error screenshot](/docs/screenshots/Blank%20screen%20with%20Firebase%20error.png)

Example of default project screen:

![Example of default project screen screenshot](/docs/screenshots/Default%20project%20screen.png)

This is because we have not yet set up Firebase, our backend and database framework.

> [!IMPORTANT]
>
> Please let @KemingHe know to add your Gmail to the Firebase project and give you access.

Open [Firebase Console](https://console.firebase.google.com) in your browser and look for the `DEV OSU Event Feed` project card:

> https://console.firebase.google.com

![DEV OSU Event Feed Firebase project card screenshot](/docs/screenshots/Firebase%20project%20card.png)

Once inside, navigate to the `Event Feed App` to find the Firebase credentials needed for this project to work. Make sure to click on the gear icon to access the app page.

![Find and click on the "Event Feed App" tab in the project (screenshot)](/docs/screenshots/Find%20and%20click%20on%20the%20Event%20Feed%20App%20tab%20in%20the%20project.png)

![Click on the gear icon to see app credentials](/docs/screenshots/Click%20on%20the%20gear%20icon%20to%20see%20app%20credentials.png)

Scroll down on the app page to find the Firebase credentials:

![Firebase credentials page pt1 screenshot](/docs/screenshots/Firebase%20crendentials%20page%20pt1.png)

![Firebase credentials page pt2 screenshot](/docs/screenshots/Firebase%20crendentials%20page%20pt2.png)

> [!WARNING]
>
> **NEVER** hard-code credentials into the project, we will follow best security practice and use a local `.env` setup instead. Read carefully:

In your terminal, create a copy of the existing `.env.example` file and name it `.env`. This new file is local to your device and should **NEVER** be shared.

```bash
cp .env.example .env
```

Don't copy the quotes `"`, populate your local `.env` file with all the necessary credentials:

```bash
# This is correct.
VITE_FIREBASE_API_KEY=some-key

# This is INCORRECT!
VITE_FIREBASE_API_KEY = "some-key"
```

Your `.env` file should look something like this in the end:

```bash
VITE_FIREBASE_API_KEY=some-key
VITE_FIREBASE_AUTH_DOMAIN=some-auth-domain
VITE_FIREBASE_PROJECT_ID=some-project-id
VITE_FIREBASE_STORAGE_BUCKET=some-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=some-sender-id
VITE_FIREBASE_APP_ID=some-app-id
```

Now when you run `npm run dev`, you should see the default project screen. *Congrates on setting up Firebase!*

### Step 5. Contribute

You are now ready to contribute to Event Feed!

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
