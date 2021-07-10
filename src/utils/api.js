const axios = require('axios')

export function getMemes(subreddit = 'memes') {
    return axios.get(`https://www.reddit.com/r/${subreddit}/hot.json`)
}