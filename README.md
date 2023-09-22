# Bally’s Node.js Coding Test

#### Aim
Create a Node.js service that utilises GitHub APIs to allow the client to query GitHub
repositories by name. Create a middleware here and pass through any
responses from GitHub to achieve this goal. Your API should also provide the repository’s
number of open issues, number of forks etc.


## 🛠 Backend Techstack
NodeJs, Express, Nodemon, Morgan


## What is Middleware?
Middleware is a software component or function that sits between the client and the server to process incoming requests and responses. It can modify and augment the request and response objects, execute code, end the request-response cycle, or call the next middleware in the stack.


## Instructions
1. Check Node version on computer.
2. Install Octokit in accordance to the node version available. See link below: 
    -   https://github.com/octokit/octokit.js/#readme
3. Create a personal Access token. This project uses a Fine-grained personal access token as it has several security advantages over personal access tokens (classic). (see link below on how the token was created)
    -   https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#fine-grained-personal-access-tokens

4. Install dotenv package to store token, and then Install all the other required packages listed below.
5. Create a models file and create a octokit.ts file.
6. Create an async function and incorporate the 'Search Respositories' api. Ensure parameters and variables have the correct static types (typescript).
7. following a similar layout, create functions which cater to 'Search Respository by ID' and 'Search for readme by Respository ID', using the links below
    - https://api.github.com/repositories/{Id}
    - https://api.github.com/repositories/{Id}/readme
8. Test each function to ensure that data is being passed through.


# Ensure all these packages have been installed
- Express.js (npm i express)
- Dotenv (npm i dotenv)
- TS-node (npm i ts-node)
- Nodemon (npm i nodemon --save-dev)
- Types for express (npm i @types/express --save-dev)


## API Reference

```http
  GET /api/repositories/:name
  GET /api/repositoryDetails/:id
  GET /api/getreadme/:id
```

| HTTP   | Path                   | Response Body                               | Status code | Description                |
| :----- | :-------------------   | :-----------------------------------        | :---------- | :----------------------    |
| GET    | /repositories/:name    | An array of repositories of a specific name | 200         | Get repositories by name   |
| GET    | /repositoryDetails/:id | An object of specific repository objects    | 200         | Get repository by ID       |
| GET    | /getreadme/:id         | An object of specific readme objects        | 200         | Get repository readme by ID|


## Resources used:
- https://docs.github.com/en/rest?apiVersion=2022-11-28
- https://docs.github.com/en/rest/search/search?apiVersion=2022-11-28



## Author

- Tendai Karuwo

