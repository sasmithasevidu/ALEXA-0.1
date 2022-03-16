//copyright by ChamodKeshan
// උස්සන එකාට කෙලවියන්!! තුක් තුක්🤮...
//Queen-Alexa 2022 | Kavindya-X




let amazone = require('../events');
let {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
let axios = require('axios');
let Config = require('../config');

let desc = "Download in playstore"
let need = "\n\n*Type playstore Apk pkg name*\n\n"
let down = "\n\n*Downloading Apk*\n\n"
let up = "\n\n*Uploading*\n\n"
let eror = "\n\n*Can't find apk*\n\n"

let hi = Config.WORKTYPE == 'public' ? false: true

    Amazone.useCmd({ pattern: 'apk ?(.*)', fromMe: hi, desc: desc,  deleteCommand: false}, async (message, match) => {

        const pkg = match[1]
    
        if (!pkg) return await message.client.sendMessage(message.jid,need,MessageType.text)
        await message.client.sendMessage(message.jid,down,MessageType.text);
        await axios
          .get(`https://api.lolhuman.xyz/api/apkdownloader?apikey=411776707c9e94db8b656048&package=${encodeURIComponent(pkg)}`)
          .then(async (response) => {
            const {
              apk_link,
            } = response.data.result
    
            var APKDATA = await axios.get(apk_link, {responseType: 'arraybuffer'})
    
            await message.sendMessage(Buffer.from(APKDATA.data), MessageType.document, {filename: 'this_is_your_application', mimetype: 'application/vnd.android.package-archive', quoted: message.data})
          })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,eror,MessageType.text, {quoted: message.data}),
        )
      },
    );
