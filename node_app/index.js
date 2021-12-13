const express = require('express')
const fs = require('fs')
const http = require('http')
const https = require('https')
const privateKey = fs.readFileSync('/etc/letsencrypt/live/justin-thoms.com/privkey.pem')
const certificate = fs.readFileSync('/etc/letsencrypt/live/justin-thoms.com/fullchain.pem')
const { lookup } = require('geoip-lite')
const app = express()
const httpApp = express()
const credentials = {key: privateKey, cert: certificate}
app.use(express.static('public'))
app.get('/', (req, res) => {
  var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
  ip = ip.replace(/^.*:/, '')
  // console.log(lookup(ip))
  // addToFile(ip)
  res.sendFile('index.html')
})
app.get('/justin', (req, res) => {
  res.sendFile('justin.html', {root: './public/'})
})

function addToFile(ip){
  const fileData = fs.readFileSync('ip_list.txt').toString();
  if (!fileData.includes(ip)) fs.appendFile('ip_list.txt', ip + '\n', (err) => { if (err) throw err })
}

httpApp.get('*', (req, res) => { res.redirect('https://' + req.headers.host + req.url); })

httpServer = http.createServer(httpApp)
httpsServer = https.createServer(credentials, app)
httpServer.listen(80)
httpsServer.listen(443)
