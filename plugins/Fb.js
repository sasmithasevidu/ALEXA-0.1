const amazone = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');
const tenu = require('../hatzu');
const Language = require('../language');
const Lang = Language.getString('amazone');
const YTV_DESC = "Facebook Video Downloader V2 ."
const YT_NEED = "*need word!.*"
const DWLOAD_VID = "*🎭Downloading Your Video...*"
const YTV_UP = "*🚀Uploading Your Video...*"
const NO_RESULT = "*🌀can't Find Anything...*"
const tk = Config.WORKTYPE == 'public' ? false : true
let handler = async (m, { conn, command, text }) => {
    if (!text) throw 'Masukkan Link\n\nContoh: .fb https://facebook.com/xxxxxx'
m.reply('*Tunggu Sebentar...*')
conn.sendFile(m.chat,res.medias[1].url, 'fb.mp4', `Tittle: ${res.tittle}
Link Video: ${res.url}
`, m)

}
handler.help = ['fb <url>', 'facebook <url>']
handler.tags = ['downloader']
handler.command = /^fb|facebook$/i


module.exports = handler
