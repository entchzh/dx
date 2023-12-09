const token = "token github_pat_????????????????????????????????????????????????????????";
const text = "ㅎㅎ";
fetch("https://api.github.com/repos/1top10000/dx/contents/db.json", {
    method: "GET",
    headers: {
        Authorization: token
    }
}).then(response => response.json()).then(res => callback(res))
function callback(res) {
    fetch("https://api.github.com/repos/1top10000/dx/contents/db.json", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        },
        body: JSON.stringify({
            owner: '1top10000',
            repo: 'dx',
            path: 'dx/db.json',
            message: 'my commit message',
            content: window.btoa(unescape(encodeURIComponent(text))),
            sha: res.sha,
            committer: {
                name: '1top10000',
                email: 'sexesoso.t.tn12345@gmail.com'
            }
        })
    }).then(() => {
        //
    });
}
