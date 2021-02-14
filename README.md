# Smart Anaaj

Smart Anaaj is a web application to display shop items and add them to the cart.
Deployed at [Smart Anaaj](anaaj.netlify.app)

## Project Breakdown

The application fetches the data from [https://smartanaaj.com/wp-json/wc/v3/](). These API related states and data is managed by a [context](https://github.com/jayeshbhole/anaaj/blob/master/src/context/ApiContext.js).

The context is consumed by shop components as per their requirement.

Following routes are avaiable in the app:

-   /
-   /shop
-   /product/:id/:name

## Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
