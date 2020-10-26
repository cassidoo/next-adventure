![Next Adventure](ghbanner.png)

<p align="center">
  A spooky, crowdsourced, mad-lib, Choose Your Own Adventure story <br/> built with Next.js, XState, Hasura, and Netlify Forms + Functions.
  <br /><br />
  <a href="https://app.netlify.com/sites/next-adventure/deploys"><img src="https://api.netlify.com/api/v1/badges/f15231a7-3768-4634-a80c-f9d52ce062bf/deploy-status" alt="Netlify Status" /></a>
</p>

[![Netlify Status](https://api.netlify.com/api/v1/badges/f15231a7-3768-4634-a80c-f9d52ce062bf/deploy-status)](https://app.netlify.com/sites/next-adventure/deploys)

## What is this?

This is a project that uses [Next.js](https://nextjs.org/), [XState](https://xstate.js.org/), [Hasura](https://hasura.io/), [Netlify Forms](https://www.netlify.com/products/forms/?utm_source=github&utm_medium=nextadventureforms-cs&utm_campaign=devex), and [next-on-netlify](https://github.com/netlify/next-on-netlify).

The "story" side of the app is a state machine that pulls a random character from the database and populates their data to make a "Choose your own Adventure" style story. The other side of the app is character submission, in which folks can send their characters to the story database, and their character may be randomly pulled from the database!

## Installation options

**Option one:** One-click deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cassidoo/next-adventure&utm_source=github&utm_medium=adventure-cs&utm_campaign=devex)

(If you click this button, it will clone this repo to your account, and sets that repo up immediately for deployment on Netlify)

**Option two:** Manual clone

1. Clone this repo: `git clone https://github.com/cassidoo/next-adventure.git`
2. Navigate to the directory and run `npm install` then `npm run dev`
3. Make your changes
4. Connect to [Netlify](https://url.netlify.com/BJVNu53Pv) manually (the `netlify.toml` file is the one you'll need to make sure stays intact to make sure the export is done and pointed to the right stuff)

## Running the application

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

There are fallbacks in place if not, but if you would like to set up your own characters in the story, you'll need to set up your own Hasura database!
