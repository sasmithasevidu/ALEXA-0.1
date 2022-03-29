const Ktb = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
const tk = Config.WORKTYPE == 'public' ? false : true
Ktb.addCommand({ pattern: 'git ?(.*)', fromMe: tk, desc: 'owner number' }, (async (message, match) => {

//coded by saidali
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:Queen Alexa [OWNER]\n' // full name
            + 'ORG:Queen Alexa;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=94786825798:+94 786825798\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "Chamod Keshan [Queen Alexa OWNER]", vcard: vcard}, MessageType.contact)
}))
