const experss = require('express')
const app = experss()
const admin = require("./data/admin_login.json")
const svip = require("./data/svip_login.json")
const vip = require("./data/vip_login.json")

// 权限列表
const admin_permisson = require("./data/admin_permisson.json")
const svip_permisson = require("./data/svip_permisson.json")
const vip_permisson = require("./data/vip_permisson.json")
const url = require('url')
app.get('/login', (req, res) => {
    const user = url.parse(req.url, true).query.user
    if (user === 'admin') {
        res.send(admin)
    } else if (user == 'svip') {
        res.send(svip)
    } else {
        res.send(vip)
    }
})

app.get('/permission', (req, res) => {
    const user = url.parse(req.url, true).query.user
    if (user === 'admin') {
        res.send(admin_permisson)
    } else if (user == 'svip') {
        res.send(svip_permisson)
    } else {
        res.send(vip_permisson)
    }
})

app.listen(3300, () => {
    console.log('服务器运行在 3300 端口')
})