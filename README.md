# Netflix GPT

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

## Features

- Login/Sign Up
  - Sign In /Sign up Form
  - redirect to Browse Page
- Browse (after authentication)
  - Header
  - Main Movie
    - Tailer in Background
    - Title & Description
    - MovieSuggestions
      - MovieLists \* N
- NetflixGPT
  - Search Bar
  - Movie Suggestions

## Project Setup

- Before starting the project please add .env file and add following variables in to it.

  -     REACT_APP_GEMINI_API_KEY
  -     REACT_APP_TMDB_API_KEY
  -     REACT_APP_FIREBASE_API_KEY
  -     REACT_APP_FIREBASE_AUTH_DOMAIN
  -     REACT_APP_FIREBASE_PROJECT_ID
  -     REACT_APP_FIREBASE_STORAGE_BUCKET
  -     REACT_APP_FIREBASE_MESSAGEING_SENDER_ID
  -     REACT_APP_FIREBASE_APP_ID
  -     REACT_APP_FIREBASE_MEASUREMENT_ID
