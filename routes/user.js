const body = require('body/any')

module.exports = (req, res) => {
  body(req, res, (err, params) => {
    if (err) console.error(err)
    console.log(params)
  })
}
