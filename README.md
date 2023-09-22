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

## Project instructions
1. Check Node version on computer
2. Install Octokit in accordance to the node version available 
3. Create a personal Access token. This project uses a Fine-grained personal access token as it has several security advantages over personal access tokens (classic). (see link below on how the token was created)

https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#fine-grained-personal-access-tokens

4. install dotenv package to store token
5. follow the octokit instructions at: https://docs.github.com/en/rest/quickstart?apiVersion=2022-11-28
6. Install Express Framework

# Packages to download
- Express.js (npm i express)

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
- https://stackoverflow.com/questions/8527597/how-do-i-ignore-files-in-a-directory-in-git



## Author

- Tendai Karuwo

