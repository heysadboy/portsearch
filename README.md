# Xeneta Market Rate Viewer

## Overview
This project displays the market rates based on the selected source port and destination port.\
You can see the information label for the range of dates between which data is available.\
You can select specific type of market position depicted by plot line to see in the graph.

## Demo
You can find the deployed version on netlfiy [here](https://tender-stonebraker-365be1.netlify.app/)

## Tools Used
- React with TypeScript
- Redux for state management along with react-redux and redux-thunk
- D3 for generating the graph
- Semantic UI for component styling
- Jest for testing

## Project Structure
You can find the components in the `components` directory.\
It is single page app with no routing. The main page is stored in `view`.\
Files related to the state management are stored in `redux`.\
`types` folder stores the necessary interfaces and enums for use throughout the project. 

## Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\


### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


