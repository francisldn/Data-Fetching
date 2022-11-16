# Fetching data with ``React Query`` library

## Overview
* React Query library is used for managing server state and fetch external data 
* ``useQuery`` hook will return ``data``, ``isLoading``, ``isError`` and ``error`` upon execution of the data fetching function
* Similar to ``swr``, ``useQuery`` also provides the option to use React.Suspense while waiting for data loading, ie: ``{ suspense: true }``
* A custom hook is created which fetches data using ``useQuery`` hook. Other React components can then access the data easily without prop-drilling

## How to Run
1. To run the app, first install the dependencies from the root folder:
```
npm install
```
2. Start the app
```
npm start
```

## Tech Stacks & Data
* Create-React-App with TypeScript
* TailwindCSS
* API data source: https://randomuser.me/api/
