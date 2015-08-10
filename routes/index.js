const view = require('../views.js')
const cookie = require('cookie')
const has = require('has')

const level = require('levelup')
const accountdown = require('accountdown')
const db = level('db', {
  valueEncoding: 'json'
})

const users = accountdown(db, {
  login: {
    basic: require('accountdown-basic')
  }
})
const sessions = {}

module.exports = (req, res, params) => {
  const cookies = cookie.parse(req.headers.cookies || '')
  if (cookies.session && has(sessions, cookies.session)) {
    users.get(sessions[cookies.session], (err, user) => {
      if (err) console.error(err)
      res.end(view.index() + 'auth!')
    })
  } else res.end(view.index() + 'no auth!')
}
