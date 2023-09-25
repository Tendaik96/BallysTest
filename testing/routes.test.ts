import app from '../app';
import { expect, test, jest } from "@jest/globals";
import request from "supertest";

jest.useRealTimers();

test("Get /repositories/:name request", async () => {

  const searchName = 'Dictionary';
  const response = await request(app).get(`/api/repositories/${searchName}`);
  //console.log(response.body);

  // check the outer most level of the response object (shape)
  expect(response.status).toEqual(200);
  expect(response.body).toStrictEqual({success: true, payload: expect.any(Object)});
  
  // check the contents of object and assert if it is as expected
  let repos = response.body.payload.items;
  repos.forEach((repo : object)=>
    expect(repo).toHaveProperty('id'))
  repos.forEach((repo : object)=>
    expect(repo).toHaveProperty('name'))
  repos.forEach((repo : object)=>
    expect(repo).toHaveProperty('open_issues'))
  repos.forEach((repo : object)=>
    expect(repo).toHaveProperty('forks'))
  
});

test("Get /repositories/:name, response to invalid search", async () => {
  const invalidSearchName = 'ir8ygep98%';
  const response = await request(app).get(`/api/repositories/${invalidSearchName}`);

  // check the outer most level of the response object (shape)
  let repos = response.body.payload;
    expect(repos).toEqual(undefined) 
  
});


test("Get /repositoryDetails/:id request", async () => {

  const id = '537661223';
  const response = await request(app).get(`/api/repositoryDetails/${id}`);
  //console.log(response.body);

  // check the outer most level of the response object (shape)
  expect(response.status).toEqual(200);
  expect(response.body).toStrictEqual({
    success: true,
    payload: expect.any(Object),
  });
  
  // check the contents of object and assert if it is as expected
    let repo = response.body.payload;
    expect(repo).toEqual({
        id: 537661223,
        node_id: 'R_kgDOIAwPJw',
        name: 'cinemate',
        full_name: 'ShubhamSarda/cinemate',
        private: false,
        owner: {
          login: 'ShubhamSarda',
          id: 28341072,
          node_id: 'MDQ6VXNlcjI4MzQxMDcy',
          avatar_url: 'https://avatars.githubusercontent.com/u/28341072?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/ShubhamSarda',
          html_url: 'https://github.com/ShubhamSarda',
          followers_url: 'https://api.github.com/users/ShubhamSarda/followers',
          following_url: 'https://api.github.com/users/ShubhamSarda/following{/other_user}',
          gists_url: 'https://api.github.com/users/ShubhamSarda/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/ShubhamSarda/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/ShubhamSarda/subscriptions',
          organizations_url: 'https://api.github.com/users/ShubhamSarda/orgs',
          repos_url: 'https://api.github.com/users/ShubhamSarda/repos',
          events_url: 'https://api.github.com/users/ShubhamSarda/events{/privacy}',
          received_events_url: 'https://api.github.com/users/ShubhamSarda/received_events',
          type: 'User',
          site_admin: false
        },
        html_url: 'https://github.com/ShubhamSarda/cinemate',
        description: 'Movie information web-application built with React, Tailwind CSS, TMDB API and deployed on Netlify',
        fork: false,
        url: 'https://api.github.com/repos/ShubhamSarda/cinemate',
        forks_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/forks',
        keys_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/keys{/key_id}',
        collaborators_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/teams',
        hooks_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/hooks',
        issue_events_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/issues/events{/number}',
        events_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/events',
        assignees_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/assignees{/user}',
        branches_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/branches{/branch}',
        tags_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/tags',
        blobs_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/git/blobs{/sha}',
        git_tags_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/git/tags{/sha}',
        git_refs_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/git/refs{/sha}',
        trees_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/git/trees{/sha}',
        statuses_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/statuses/{sha}',
        languages_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/languages',
        stargazers_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/stargazers',
        contributors_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/contributors',
        subscribers_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/subscribers',
        subscription_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/subscription',
        commits_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/commits{/sha}',
        git_commits_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/git/commits{/sha}',
        comments_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/comments{/number}',
        issue_comment_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/issues/comments{/number}',
        contents_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/contents/{+path}',
        compare_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/merges',
        archive_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/{archive_format}{/ref}',
        downloads_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/downloads',
        issues_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/issues{/number}',
        pulls_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/pulls{/number}',
        milestones_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/milestones{/number}',
        notifications_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/notifications{?since,all,participating}',
        labels_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/labels{/name}',
        releases_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/releases{/id}',
        deployments_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/deployments',
        created_at: '2022-09-17T00:52:10Z',
        updated_at: '2023-09-07T02:36:08Z',
        pushed_at: '2023-01-09T10:20:42Z',
        git_url: 'git://github.com/ShubhamSarda/cinemate.git',
        ssh_url: 'git@github.com:ShubhamSarda/cinemate.git',
        clone_url: 'https://github.com/ShubhamSarda/cinemate.git',
        svn_url: 'https://github.com/ShubhamSarda/cinemate',
        homepage: 'https://cinemate-ul.netlify.app/',
        size: 1652,
        stargazers_count: 6,
        watchers_count: 6,
        language: 'JavaScript',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 10,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [ 'netlify', 'react', 'tailwindcss', 'tmdb-api' ],
        visibility: 'public',
        forks: 10,
        open_issues: 0,
        watchers: 6,
        default_branch: 'main',
        temp_clone_token: null,
        network_count: 10,
        subscribers_count: 1
      }) 
  
 
});

test("Get /repositoryDetails/:id, response to invalid search", async () => {

  const id = 'fodn%3231';
  const response = await request(app).get(`/api/repositoryDetails/${id}`);
  //console.log(response.body);
  
  // check the contents of object and assert if it is as expected
    let repo = response.body.payload;
    expect(repo).toEqual("Not Found") 
});


test("Get /getreadme/:id request", async () => {

  const id = '537661223';
  const response = await request(app).get(`/api/getreadme/${id}`);
  //console.log(response.body);

  // check the outer most level of the response object (shape)
  expect(response.status).toEqual(200);
  expect(response.body).toStrictEqual({
    success: true,
    payload: expect.any(Object),
  });
  
  // check the contents of object and assert if it is as expected
    let repo = response.body.payload;
  expect(repo).toEqual({
    name: 'README.md',
      path: 'README.md',
      sha: '58beeaccd87e230076cab531b8f418f40b6d1aeb',
      size: 3359,
      url: 'https://api.github.com/repos/ShubhamSarda/cinemate/contents/README.md?ref=main',
      html_url: 'https://github.com/ShubhamSarda/cinemate/blob/main/README.md',
      git_url: 'https://api.github.com/repos/ShubhamSarda/cinemate/git/blobs/58beeaccd87e230076cab531b8f418f40b6d1aeb',
      download_url: 'https://raw.githubusercontent.com/ShubhamSarda/cinemate/main/README.md',
      type: 'file',
      content: 'IyBHZXR0aW5nIFN0YXJ0ZWQgd2l0aCBDcmVhdGUgUmVhY3QgQXBwCgpUaGlz\n' +
        'IHByb2plY3Qgd2FzIGJvb3RzdHJhcHBlZCB3aXRoIFtDcmVhdGUgUmVhY3Qg\n' +
        'QXBwXShodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svY3JlYXRlLXJlYWN0\n' +
        'LWFwcCkuCgojIyBBdmFpbGFibGUgU2NyaXB0cwoKSW4gdGhlIHByb2plY3Qg\n' +
        'ZGlyZWN0b3J5LCB5b3UgY2FuIHJ1bjoKCiMjIyBgbnBtIHN0YXJ0YAoKUnVu\n' +
        'cyB0aGUgYXBwIGluIHRoZSBkZXZlbG9wbWVudCBtb2RlLlwKT3BlbiBbaHR0\n' +
        'cDovL2xvY2FsaG9zdDozMDAwXShodHRwOi8vbG9jYWxob3N0OjMwMDApIHRv\n' +
        'IHZpZXcgaXQgaW4geW91ciBicm93c2VyLgoKVGhlIHBhZ2Ugd2lsbCByZWxv\n' +
        'YWQgd2hlbiB5b3UgbWFrZSBjaGFuZ2VzLlwKWW91IG1heSBhbHNvIHNlZSBh\n' +
        'bnkgbGludCBlcnJvcnMgaW4gdGhlIGNvbnNvbGUuCgojIyMgYG5wbSB0ZXN0\n' +
        'YAoKTGF1bmNoZXMgdGhlIHRlc3QgcnVubmVyIGluIHRoZSBpbnRlcmFjdGl2\n' +
        'ZSB3YXRjaCBtb2RlLlwKU2VlIHRoZSBzZWN0aW9uIGFib3V0IFtydW5uaW5n\n' +
        'IHRlc3RzXShodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9jcmVhdGUtcmVh\n' +
        'Y3QtYXBwL2RvY3MvcnVubmluZy10ZXN0cykgZm9yIG1vcmUgaW5mb3JtYXRp\n' +
        'b24uCgojIyMgYG5wbSBydW4gYnVpbGRgCgpCdWlsZHMgdGhlIGFwcCBmb3Ig\n' +
        'cHJvZHVjdGlvbiB0byB0aGUgYGJ1aWxkYCBmb2xkZXIuXApJdCBjb3JyZWN0\n' +
        'bHkgYnVuZGxlcyBSZWFjdCBpbiBwcm9kdWN0aW9uIG1vZGUgYW5kIG9wdGlt\n' +
        'aXplcyB0aGUgYnVpbGQgZm9yIHRoZSBiZXN0IHBlcmZvcm1hbmNlLgoKVGhl\n' +
        'IGJ1aWxkIGlzIG1pbmlmaWVkIGFuZCB0aGUgZmlsZW5hbWVzIGluY2x1ZGUg\n' +
        'dGhlIGhhc2hlcy5cCllvdXIgYXBwIGlzIHJlYWR5IHRvIGJlIGRlcGxveWVk\n' +
        'IQoKU2VlIHRoZSBzZWN0aW9uIGFib3V0IFtkZXBsb3ltZW50XShodHRwczov\n' +
        'L2ZhY2Vib29rLmdpdGh1Yi5pby9jcmVhdGUtcmVhY3QtYXBwL2RvY3MvZGVw\n' +
        'bG95bWVudCkgZm9yIG1vcmUgaW5mb3JtYXRpb24uCgojIyMgYG5wbSBydW4g\n' +
        'ZWplY3RgCgoqKk5vdGU6IHRoaXMgaXMgYSBvbmUtd2F5IG9wZXJhdGlvbi4g\n' +
        'T25jZSB5b3UgYGVqZWN0YCwgeW91IGNhbid0IGdvIGJhY2shKioKCklmIHlv\n' +
        'dSBhcmVuJ3Qgc2F0aXNmaWVkIHdpdGggdGhlIGJ1aWxkIHRvb2wgYW5kIGNv\n' +
        'bmZpZ3VyYXRpb24gY2hvaWNlcywgeW91IGNhbiBgZWplY3RgIGF0IGFueSB0\n' +
        'aW1lLiBUaGlzIGNvbW1hbmQgd2lsbCByZW1vdmUgdGhlIHNpbmdsZSBidWls\n' +
        'ZCBkZXBlbmRlbmN5IGZyb20geW91ciBwcm9qZWN0LgoKSW5zdGVhZCwgaXQg\n' +
        'd2lsbCBjb3B5IGFsbCB0aGUgY29uZmlndXJhdGlvbiBmaWxlcyBhbmQgdGhl\n' +
        'IHRyYW5zaXRpdmUgZGVwZW5kZW5jaWVzICh3ZWJwYWNrLCBCYWJlbCwgRVNM\n' +
        'aW50LCBldGMpIHJpZ2h0IGludG8geW91ciBwcm9qZWN0IHNvIHlvdSBoYXZl\n' +
        'IGZ1bGwgY29udHJvbCBvdmVyIHRoZW0uIEFsbCBvZiB0aGUgY29tbWFuZHMg\n' +
        'ZXhjZXB0IGBlamVjdGAgd2lsbCBzdGlsbCB3b3JrLCBidXQgdGhleSB3aWxs\n' +
        'IHBvaW50IHRvIHRoZSBjb3BpZWQgc2NyaXB0cyBzbyB5b3UgY2FuIHR3ZWFr\n' +
        'IHRoZW0uIEF0IHRoaXMgcG9pbnQgeW91J3JlIG9uIHlvdXIgb3duLgoKWW91\n' +
        'IGRvbid0IGhhdmUgdG8gZXZlciB1c2UgYGVqZWN0YC4gVGhlIGN1cmF0ZWQg\n' +
        'ZmVhdHVyZSBzZXQgaXMgc3VpdGFibGUgZm9yIHNtYWxsIGFuZCBtaWRkbGUg\n' +
        'ZGVwbG95bWVudHMsIGFuZCB5b3Ugc2hvdWxkbid0IGZlZWwgb2JsaWdhdGVk\n' +
        'IHRvIHVzZSB0aGlzIGZlYXR1cmUuIEhvd2V2ZXIgd2UgdW5kZXJzdGFuZCB0\n' +
        'aGF0IHRoaXMgdG9vbCB3b3VsZG4ndCBiZSB1c2VmdWwgaWYgeW91IGNvdWxk\n' +
        'bid0IGN1c3RvbWl6ZSBpdCB3aGVuIHlvdSBhcmUgcmVhZHkgZm9yIGl0LgoK\n' +
        'IyMgTGVhcm4gTW9yZQoKWW91IGNhbiBsZWFybiBtb3JlIGluIHRoZSBbQ3Jl\n' +
        'YXRlIFJlYWN0IEFwcCBkb2N1bWVudGF0aW9uXShodHRwczovL2ZhY2Vib29r\n' +
        'LmdpdGh1Yi5pby9jcmVhdGUtcmVhY3QtYXBwL2RvY3MvZ2V0dGluZy1zdGFy\n' +
        'dGVkKS4KClRvIGxlYXJuIFJlYWN0LCBjaGVjayBvdXQgdGhlIFtSZWFjdCBk\n' +
        'b2N1bWVudGF0aW9uXShodHRwczovL3JlYWN0anMub3JnLykuCgojIyMgQ29k\n' +
        'ZSBTcGxpdHRpbmcKClRoaXMgc2VjdGlvbiBoYXMgbW92ZWQgaGVyZTogW2h0\n' +
        'dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL2NyZWF0ZS1yZWFjdC1hcHAvZG9j\n' +
        'cy9jb2RlLXNwbGl0dGluZ10oaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8v\n' +
        'Y3JlYXRlLXJlYWN0LWFwcC9kb2NzL2NvZGUtc3BsaXR0aW5nKQoKIyMjIEFu\n' +
        'YWx5emluZyB0aGUgQnVuZGxlIFNpemUKClRoaXMgc2VjdGlvbiBoYXMgbW92\n' +
        'ZWQgaGVyZTogW2h0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL2NyZWF0ZS1y\n' +
        'ZWFjdC1hcHAvZG9jcy9hbmFseXppbmctdGhlLWJ1bmRsZS1zaXplXShodHRw\n' +
        'czovL2ZhY2Vib29rLmdpdGh1Yi5pby9jcmVhdGUtcmVhY3QtYXBwL2RvY3Mv\n' +
        'YW5hbHl6aW5nLXRoZS1idW5kbGUtc2l6ZSkKCiMjIyBNYWtpbmcgYSBQcm9n\n' +
        'cmVzc2l2ZSBXZWIgQXBwCgpUaGlzIHNlY3Rpb24gaGFzIG1vdmVkIGhlcmU6\n' +
        'IFtodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9jcmVhdGUtcmVhY3QtYXBw\n' +
        'L2RvY3MvbWFraW5nLWEtcHJvZ3Jlc3NpdmUtd2ViLWFwcF0oaHR0cHM6Ly9m\n' +
        'YWNlYm9vay5naXRodWIuaW8vY3JlYXRlLXJlYWN0LWFwcC9kb2NzL21ha2lu\n' +
        'Zy1hLXByb2dyZXNzaXZlLXdlYi1hcHApCgojIyMgQWR2YW5jZWQgQ29uZmln\n' +
        'dXJhdGlvbgoKVGhpcyBzZWN0aW9uIGhhcyBtb3ZlZCBoZXJlOiBbaHR0cHM6\n' +
        'Ly9mYWNlYm9vay5naXRodWIuaW8vY3JlYXRlLXJlYWN0LWFwcC9kb2NzL2Fk\n' +
        'dmFuY2VkLWNvbmZpZ3VyYXRpb25dKGh0dHBzOi8vZmFjZWJvb2suZ2l0aHVi\n' +
        'LmlvL2NyZWF0ZS1yZWFjdC1hcHAvZG9jcy9hZHZhbmNlZC1jb25maWd1cmF0\n' +
        'aW9uKQoKIyMjIERlcGxveW1lbnQKClRoaXMgc2VjdGlvbiBoYXMgbW92ZWQg\n' +
        'aGVyZTogW2h0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL2NyZWF0ZS1yZWFj\n' +
        'dC1hcHAvZG9jcy9kZXBsb3ltZW50XShodHRwczovL2ZhY2Vib29rLmdpdGh1\n' +
        'Yi5pby9jcmVhdGUtcmVhY3QtYXBwL2RvY3MvZGVwbG95bWVudCkKCiMjIyBg\n' +
        'bnBtIHJ1biBidWlsZGAgZmFpbHMgdG8gbWluaWZ5CgpUaGlzIHNlY3Rpb24g\n' +
        'aGFzIG1vdmVkIGhlcmU6IFtodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9j\n' +
        'cmVhdGUtcmVhY3QtYXBwL2RvY3MvdHJvdWJsZXNob290aW5nI25wbS1ydW4t\n' +
        'YnVpbGQtZmFpbHMtdG8tbWluaWZ5XShodHRwczovL2ZhY2Vib29rLmdpdGh1\n' +
        'Yi5pby9jcmVhdGUtcmVhY3QtYXBwL2RvY3MvdHJvdWJsZXNob290aW5nI25w\n' +
        'bS1ydW4tYnVpbGQtZmFpbHMtdG8tbWluaWZ5KQo=\n',
      encoding: 'base64',
      _links: {
        self: 'https://api.github.com/repos/ShubhamSarda/cinemate/contents/README.md?ref=main',
        git: 'https://api.github.com/repos/ShubhamSarda/cinemate/git/blobs/58beeaccd87e230076cab531b8f418f40b6d1aeb',
        html: 'https://github.com/ShubhamSarda/cinemate/blob/main/README.md'
      }
    }) 
  
 
});

test("Get /getreadme/:id, response to invalid search", async () => {

  const id = 'fodn%3231';
  const response = await request(app).get(`/api/getreadme/${id}`);
  //console.log(response.body);
  
  // check the contents of object and assert if it is as expected
    let readme = response.body.payload;
    expect(readme).toEqual("Not Found") 
}); 


/*    PASS  testing/routes.test.ts
  √ Get /repositories/:name request (1369 ms)
  √ Get /repositories/:name, response to invalid search (19 ms)                                                                                                            
  √ Get /repositoryDetails/:id request (382 ms)                                                                                                                                                           
  √ Get /repositoryDetails/:id, response to invalid search (303 ms)
  √ Get /getreadme/:id request (386 ms)
  √ Get /getreadme/:id, response to invalid search (333 ms)

Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        4.289 s
Ran all test suites. */