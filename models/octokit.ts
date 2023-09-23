import { Octokit } from "octokit";

// an instance of Octokit with your token
const octokit = new Octokit({
    auth: process.env.GithubToken,
  });

export async function searchRepositorys(name : string) {
  try {
    const response = await octokit.request("GET /search/repositories", {
        q: name,
        headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    //console.log("Results:", response.data);
    return response.data

  } catch (error : any) {
    console.error("Error searching repositories:", error.message);
    return error.message
  }
}
//Test function
//searchRepositorys("CineMate");


export async function getRepositoryById(repositoryId : string) {
  try {
    const response = await octokit.request(
      `https://api.github.com/repositories/${repositoryId}`,
      {
        headers: { "X-GitHub-Api-Version": "2022-11-28" },
      }
    );
    console.log("Results:", response.data);
    return response.data;
  } catch (error : any) {
    console.error("Error searching repositories:", error.message);
    return error.message
  }
}
//Test function
//getRepositoryById("1");



export async function getReadme(repositoryId : string) {
  try {
    const response = await octokit.request(
      `https://api.github.com/repositories/${repositoryId}/readme`,
      {
        headers: { "X-GitHub-Api-Version": "2022-11-28" },
      }
    );
    console.log("Results:", response.data);
    return response.data;
  } catch (error : any) {
    console.error("Error searching repositories:", error.message);
    return error.message
  }
}
//Test function
//getReadme("607102746");
