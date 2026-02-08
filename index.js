require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000


// data...
const githubData = {
        "login": "ShubhamSingh3102",
        "id": 186625084,
        "node_id": "U_kgDOCx-sPA",
        "avatar_url": "https://avatars.githubusercontent.com/u/186625084?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/ShubhamSingh3102",
        "html_url": "https://github.com/ShubhamSingh3102",
        "followers_url": "https://api.github.com/users/ShubhamSingh3102/followers",
        "following_url": "https://api.github.com/users/ShubhamSingh3102/following{/other_user}",
        "gists_url": "https://api.github.com/users/ShubhamSingh3102/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/ShubhamSingh3102/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/ShubhamSingh3102/subscriptions",
        "organizations_url": "https://api.github.com/users/ShubhamSingh3102/orgs",
        "repos_url": "https://api.github.com/users/ShubhamSingh3102/repos",
        "events_url": "https://api.github.com/users/ShubhamSingh3102/events{/privacy}",
        "received_events_url": "https://api.github.com/users/ShubhamSingh3102/received_events",
        "type": "User",
        "user_view_type": "public",
        "site_admin": false,
        "name": null,
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio":null,
        "twitter_username": null,
        "public_repos": 7,
        "public_gists": 0,
        "followers": 0,
        "following": 2,
        "created_at": "2024-10-28T18:08:34Z",
        "updated_at": "2025-01-24T18:48:49Z"
      }


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) => {
    res.send('shubhamdotcom')
})

app.get('/login',(req,res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube',(req,res) => {
    res.send("<h2>Chai aur code</h2>")
})

app.get('/github',(req,res) => {
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
