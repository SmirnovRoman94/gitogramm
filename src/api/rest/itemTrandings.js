import { makeRequest } from "../request";

export const getTrandings = (owner, repo) => {
    console.log(owner, repo)
    const params = new URLSearchParams();
    params.append('accept', 'application/vnd.github.v3.html+json')

    return makeRequest({
        url: `/repos/${owner}/${repo}/readme`,
        headers: {
            'accept' : 'application/vnd.github.v3.html+json'
        }
    })
}