const Snoowrap = require('snoowrap')
const dotenv = require('dotenv').config()

const r = new Snoowrap({
    userAgent: process.env.REDDIT_USER_AGENT,
    clientId: process.env.REDDIT_CLIENT_ID,
    clientSecret: process.env.REDDIT_CLIENT_SECRET,
    refreshToken: process.env.REDDIT_REFRESH_TOKEN
})

function getMemes(subreddit = 'memes') {
    return r.getHot().map(post => post.title)
}

export { getMemes }