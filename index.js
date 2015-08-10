const http = require('http')
const ecstatic = require('ecstatic')
const st = ecstatic({
  root: 'static',
  gzip: 'true'
})

const router = require('patterns')()
router.add('GET /', require('./routes/index.js'))
router.add('POST /user', require('./routes/user.js'))

http.createServer((req, res) => {
  const m = router.match(`${req.method} ${req.url}`)
  if (!m) {
    st(req, res)
    return
  }
  const fn = m.value
  fn(req, res)
}).listen(9090, () => {
  console.log('server is running at http://localhost:9090')
})
