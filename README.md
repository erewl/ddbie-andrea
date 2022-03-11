# Gatsby Lander

This is an experimental starter built using [gatsby-theme-codebushi](https://github.com/codebushi/gatsby-theme-codebushi), a theme which uses [Tailwind CSS](https://tailwindcss.com/).

Check out https://codebushi.com/gatsby-starters-and-themes/ for more Gatsby starters and templates.

## Preview

https://erewl.github.io/ddbie-andrea/

## Installation

Prerequisites: `node` and `yarn`

First install dependencies with:
```
yarn 
```

Start local development server with:
```
yarn start
```
Server is available at `localhost:8000`

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
This builds the website locally and pushes it to the `gh-pages` branch in this repository. Within a few minute a new release is being deployed and can be found at: https://erewl.github.io/ddbie-andrea/

## Notes

In `src/data/content-data.js` you find a JSON-object with the texts that are rendered in the page.

`index.js` is the main page, which contains most of the content.
