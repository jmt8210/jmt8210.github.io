const express = require('express')
const fs = require('fs')
const http = require('http')
const https = require('https')
const privateKey = fs.readFileSync('/etc/letsencrypt/live/justin-thoms.com/privkey.pem')
const certificate = fs.readFileSync('/etc/letsencrypt/live/justin-thoms.com/fullchain.pem')
const { lookup } = require('geoip-lite')
const app = express()
const credentials = {key: privateKey, cert: certificate}
app.use(express.static('public'))
app.get('/', (req, res) => {
  var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
  ip = ip.replace(/^.*:/, '')
  console.log(lookup(ip))
  addToFile(ip)
  res.sendFile('index.html')
})
app.get('/justin', (req, res) => {
  var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
  ip = ip.replace(/^.*:/, '')
  console.log(lookup(ip))
  addToFile(ip)
  // res.send('Hello! Your IP is ' + ip)
  res.sendFile('justin.html', {root: './public/'})
})

// https.createServer({ key: fs.readFileSync('key.pem'), cert: fs.readFileSync('cert.pem') }, app).listen(httpsPort)

function addToFile(ip){
  const fileData = fs.readFileSync('ip_list.txt').toString();
  if (!fileData.includes(ip)) fs.appendFile('ip_list.txt', ip + '\n', (err) => { if (err) throw err })
}
httpServer = http.createServer(app)
httpsServer = https.createServer(credentials, app)
httpServer.listen(80)
httpsServer.listen(443)
