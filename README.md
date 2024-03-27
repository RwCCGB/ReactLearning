# ReactLearning

REACT LEARNING APP
V0.0.4 
        -By Matt Norris

------

Small demo React app that will retrieve and display data from an open API source (https://jsonplaceholder.typicode.com/posts).  Built in VS Code.  The message in the response is hidden initially but can be viewed with the Show/Hide button, there is also "like" functionality for each row that will increment with each click (note: not saved).  To run the spinner there is a delay implemented so that it is visible, otherwise the table will populate too and it can't be seen.

Requirements:
    1. Create a React application​ *
    2. Implement a component that fetches data from the endpoint and displays it.​ *
    3. Display the fetched data in a visually appealing format, such as a list or cards. *​
        a. You may use any CSS library​ *
    4. Ensure error handling for API calls. *​
    5. Implement a “loading” indicator while fetching data. *​
    6. Include any tests you think should be included.​ - TBC
    7. Include a README.md file explaining how to run the application locally and any additional notes about your implementation.​ *
    8. Your solution should be in a git repository and show your full commit history. *

------

Required:
    1. Set proxy settings
        npm config set proxy http://forward_proxy:8080
        npm config set https-proxy http://forward_proxy:8080
    2. Install react/react dom and next
        npm install react@latest react-dom@latest next@latest
    3. Install spinners
        npm install spinners-react
    4. Install Jest for unit testing
        npm install --save-dev babel-jest @babel/preset-env @babel/preset-react react-test-renderer
    5. To run locally, using Terminal run the below and then navigate to http://localhost:3000 
        npm run dev 
    6. Keep fingers crossed.

------

Known Issue(s)
    1. "Show All Messages" requires two clicks initially


TODO: 
    1. Unit Testing
    2. Add env config values for API urls
    3. Move items to seperate components, table.js is doing far too much!
    4. Pagination of table, 100 rows is too long.
