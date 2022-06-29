require("dotenv").config();


const Bot = require("./src/struct/Bot");

require('http').createServer((req, res) => res.end(`
 |-----------------------------------------|
 |              Informations               |
 |-----------------------------------------|
 |• Alive: 24/7                            |
 |-----------------------------------------|
 |• Author: Atreya#2401                    |
 |-----------------------------------------|
 |• Server: https://discord.gg/gU7XAxTpX5  |
 |-----------------------------------------|
 |• Github: https://github.com/diwasatreya |
 |-----------------------------------------|
 |• License: Apache License 2.0            |
 |-----------------------------------------|
`)).listen(3000)

const client = new Bot();


(async () => await client.start("OTA0MDc1MTA5MDk3MTY0ODky.GROhJe.xnu0SLcN6Edr0vkbNXTWTn-s_xQ7WcLczkoVWU"))();
