# Gatsby Lander

This is an experimental starter built using [gatsby-theme-codebushi](https://github.com/codebushi/gatsby-theme-codebushi), a theme which uses [Tailwind CSS](https://tailwindcss.com/).

Check out https://codebushi.com/gatsby-starters-and-themes/ for more Gatsby starters and templates.

## Preview

https://erewl.github.io/ddbie-andrea/

## Installation

Prerequisites: `node`, `yarn` and an editor such as Visual Studio Code (VS Code)

First install dependencies with:
```
yarn 
```

Start local development server with:
```
yarn start
```
Server is available at `localhost:8000`

If you make changes in the app (and save your changes in your editor), the app get rerendered and automagically displays your changes! Have fun!

## Deploy local version to github-pages

To ensure no changes are lost, first commit your changes to the main-branch
```
git add .
git commit -m "Some meaningful comment about your changes"
git push 
```

And then you can run
```
yarn ghdeploy
```
This builds the website locally and pushes it to the `gh-pages` branch in this repository. Within a few minutes a new release is being deployed and can be found at: https://erewl.github.io/ddbie-andrea/

## Notes

In `src/data/content-data.js` you find a JSON-object with the texts that are rendered in the page.

`src/pages/index.js` is the main page, which contains most of the content.
