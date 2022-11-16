# REACT DATA FETCHING PATTERNS

## INTRODUCTION
* This is a guide for different data fetching patterns in React 
* With the release of React v18, ``Suspense`` API is officially available for use (no longer experimental). This allows for a component to hold off rendering until data is loaded, while in the meantime showing the fallback component to the user.
* We discuss the following patterns in this guide:
  * React UseEffect & UseState hook
  * React Custom Hook using Context API
  * Redux
  * useSWR from ``swr`` library
  * React Query library

## Libraries & Data source
* To illustrate the different data fetching patterns above, the following API data source is used: 
  ```
  https://randomuser.me/api/?results=20
  ```