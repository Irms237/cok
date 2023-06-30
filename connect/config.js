const fs = require('fs')
const chalk = require('chalk')

// ganti aja gpp
global.ownerName = "Lexxy OFC"
global.ownerNumber = "6285879151598"
global.botName = "Botzz MD"
global.developerNumber = ["6285868200968","6285789004732"]

// waktu delay
global.waktuDelayBug = 2000 // berarti delay bug nya 2 detik

// jumlah batas maksimal bug
global.max_bug_emoji = 100 // berarti batas maksimal 30× spam
global.max_bug_attack = 100 // berarti batas maksimal 20× spam

// sesuai selera kalo mau kirim bug banyak ganti aja
// siap terima resiko rawan banned wa botnya okeyy
// recommended dari saya dibawah 30 selebihnya ytta

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})