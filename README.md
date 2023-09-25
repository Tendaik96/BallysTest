# Bally’s Node.js Coding Test

#### Aim
Create a Node.js service that utilises GitHub APIs to allow the client to query GitHub
repositories by name. Create a middleware here and pass through any
responses from GitHub to achieve this goal. Your API should also provide the repository’s
number of open issues, number of forks etc.


## 🛠 Backend Techstack
`NodeJs`, `Express`, `Nodemon`, `ts-node`, `Jest`


## What is Middleware?
Middleware is a software component or function that sits between the client and the server to process incoming requests and responses. It can modify and augment the request and response objects, execute code, end the request-response cycle, or call the next middleware in the stack.

## tsconfig.json & jest.config.ts file
The tsconfig.json file configures how TypeScript code is compiled into JavaScript. It specifies compiler settings, file inclusions/exclusions, type definitions, and more. It enables customization, strict type checking, and efficient compilation, enhancing the development process. jest.config is a file for customizing Jest test settings, making testing setup consistent and easy to manage.


## Instructions

### 🎫 Ticket 1 - Starter files
1. Select a location, on your computer, to place your project and initialize by npm init. Check Node version on computer.
2. `Install Octokit` according to the node version available. See link below: 
    -   https://github.com/octokit/octokit.js/#readme
3. Create a `personal access token`. This project uses a `Fine-grained` personal access token as it offers several security advantages over classic personal access tokens. The personal access token is used for authenticating requests to the GitHub API. (see link below on how the token was created)
    -   https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#fine-grained-personal-access-tokens

4. Install `dotenv` package to store token, and then Install all the other required packages listed below. in the script section, be sure to add a dev entry, This will enable you to start the express server using `nodemon` by running `npm run dev` in the terminal. In your `.gitignore` file add `node_modules` and `.env` as you don't want all of those files being pushed up to GitHub.

    #### Ensure all these packages have been installed
            - Express.js (npm i express)
            - Dotenv (npm i dotenv)
            - TS-node (npm i ts-node)
            - Nodemon (npm i nodemon --save-dev)
            - Types for express (npm i @types/express --save-dev)

5. Create a `models` folder and create a `octokit.ts` file.
6. Create an async function and incorporate the `Search Respositories` api. Ensure parameters and variables have the correct static types (typescript).

    - The function should:
        - take in a single argument, `name` (string)
        - request and return data using octokit function
        - console.log's and return any error if data failed to be retrieved.

7. following a similar layout, create functions which cater to 'Search Respository by ID' and 'Search for readme by Respository ID', using the links below
    - https://api.github.com/repositories/{Id}
    - https://api.github.com/repositories/{Id}/readme
8. Test each function to ensure that data is being passed through.
9. The following files must be in the root of your project:

    - `app.ts` 
    - `.gitignore` 
    - `tsconfig.json`
    - `.env`
    - `jest.config.ts` -- To prevent errors in the terminal, create this file when you are ready to test with Jest.

### 🎫 Ticket 2 - Creating routes
1. Create a `routes` folder, inside create 3 files: `getReadme.ts`, `searchById.ts` and `searchByName.ts`
2. Starting with searchByName.ts, import `express`, `Request` and `Response` from express, and import `searchByName` function from octokit file. Write a request handler to return the correct response and perform the correct action when a `GET` request is received to `/api/repositories/:name` (see api reference section for further details).
3. Ensure all variables and parameters are correctly statically typed.
4. export your router and import it in `app.ts`.

    💡 test out the route handler by sending an HTTP GET request via Postman. Don't forget to start the server beforehand `npm run dev`. See `Postman endpoints test` section for URL.

    💡 This endpoint will respond with a array of objects (repositories) that have the same name or include the name you have searched.

4. Repeat the process from step 2 onwards for `getReadme.ts` and `searchById.ts` files, and incorporated corresponding logic for their request handlers, see Api reference section.


### 🥇 You've finished!

- 🔍 Take another look at your code and see if you can refactor anything. <br>
- 📮 If you do make any changes while refactoring make sure to re-test your routes using Postman.


## API Reference

| HTTP   | Path                   | Response Body                                                             | Status code | Description                |
| :----- | :-------------------   | :-------------------------------------------------------------------------| :---------- | :----------------------    |
| GET    | api/repositories/:name    | An array of object(s) of repositories of/containing a specific name    | 200         | Get repositories by name   |
| GET    | api/repositoryDetails/:id | An object containing the details of a specific repository              | 200         | Get repository by ID       |
| GET    | api/getreadme/:id         | An object containing details for the readme of a specific repository   | 200         | Get repository readme by ID|

## Postman endpoints test
    - www.localhost:3000/api/repositories/:name
    - www.localhost:3000/api/repositoryDetails/:id
    - www.localhost:3000/api/getreadme/:id

Please see postmanApiDoc.md file for details on API tests.

## Testing Framework
The testing framework used to test the api was Jest. SuperTest, within Jest, was used  for evaluating your HTTP endpoints and APIs, it was employed to send HTTP requests, and Jest was used to formulate assertions regarding the responses. to num a test enter: `npm test` in the command line.

#### Here are the results:
 `PASS`  testing/routes.test.ts
 -  `√` Get /repositories/:name request (1369 ms)
 -  `√` Get /repositories/:name, response to invalid search (19ms)  
 -  `√` Get /repositoryDetails/:id request (382ms)                             
 -  `√` Get /repositoryDetails/:id, response to invalid search (303 ms)
 -  `√` Get /getreadme/:id request (386 ms)
 -  `√` Get /getreadme/:id, response to invalid search (333 ms)

Test Suites: 1 passed, 1 total
Tests:       `6 passed`, 6 total
Snapshots:   0 total
Time:        4.289 s
Ran all test suites.

## Conclusion
The Bally's Node.js Coding Test successfully achieved its goal by creating a Node.js service using GitHub APIs, enhanced by middleware. The techstack included NodeJs, Express, Nodemon, ts-node, and Jest, with configuration handled by tsconfig.json. Jest, coupled with SuperTest, served as the testing framework, ensuring reliable HTTP endpoint evaluations. Overall, the project demonstrated efficient API integration and rigorous testing for GitHub repository queries.

## Resources used:
- https://docs.github.com/en/rest?apiVersion=2022-11-28
- https://docs.github.com/en/rest/search/search?apiVersion=2022-11-28
- https://jestjs.io/docs/ecmascript-modules
- https://jestjs.io/docs/configuration
- https://jestjs.io/docs/getting-started
- https://stackoverflow.com/questions/66997288/jest-tests-leaking-due-to-improper-teardown 


## Author

- Tendai Karuwo

