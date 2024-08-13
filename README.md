# iTunes Search App

## Introduction
This is a full-stack web application that allows users to search for content in the iTunes Store and Apple Books Store. Users can also create a list of their favorite items.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/benmuza85/iTunes-app.git
    ```
2. Install dependencies for both server and client:
    ```bash
    npm install
    cd client
    npm install
    ```

## Running the App

1. Start the backend server:
    ```bash
    npm start
    ```
2. Start the frontend server:
    ```bash
    cd client
    npm start
    ```

## Security

- Helmet is used to secure the Express app by setting various HTTP headers.
- API keys are securely stored and not exposed in the client-side code.

## Deployed App

- [Link to the deployed app on Heroku](https://my-itunes-app-81d9e77b6d0d.herokuapp.com/);
-[Link to the github repo](https://github.com/benmuza85/iTunes-app)

