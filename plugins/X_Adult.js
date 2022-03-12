/*
Copyright (C) 2021 KAVINDYA-X   ,  lanka whatsapp bot owner
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
kavindya -  chamod. keshan (v 1.0.0 avalable)

// 😡 ආවද Code එක උස්සන්න තිරිසනො  😖


const Ramiya = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const { fetchJson } = require('../Fetcher')
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('scrapers');
const Xdesc = "*ALEXA XNXX වීඩියෝ බාගත කරයි.*"
const XN_NEED = "😏 *Please Enter XNXX URL*\n 🎥 *Example* : _.xnx https://www.xnxx.com/video-zgvf7ee/home_fuck_"
//const XH_NEED = "😏 *Enter XHAMSTER URL*\n 🎥 *Example* : _.xhx https://www_"
const DWLOAD_VID = "🤫 *Alexa Downloading Your Video...*"
const YTV_UP = "🔞 *Alexa Uploading Your Video...*"
const NO_RESULT = "*🤯 Oops Video Not Found...*"
const Need = "😏 *Enter Some Words.*"
const Searching = "🔞 _*Alexa Searching Xnxx Adult Videos...*_"
//const XHSearching = "🔞 _*Alexa Searching Xhamster Adult Videos...*_"
const credit = "* Powered BY Alexa*" 
let tp1 = Config.WORKTYPE == 'public' ? false : true
let tp2 = Config.WORKTYPE == 'public' ? true : false
const notworking = "Not working \n don't try again"

	// -------------------------------------X-N-X-X--S-E-A-R-C-H------------------------------------------------------------------------
	
Ramiya.addCommand({ pattern: 'getxnx ?(.*)', fromMe: tp1 , dontAddCommandList:true}, async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Need,MessageType.text);    
	     /*   await message.client.sendMessage(message.jid,Searching,MessageType.text);

			var url = `https://zenzapi.xyz/api/xnxx/search?query=${match[1]}&apikey=f55909b302`
			
			const header = `*◄━━━━━━⦁⦁◯⦁⦁━━━━━━►*
 *Alexa XNXX SEARCH* 
◄━━━━━━⦁⦁◯⦁⦁━━━━━━►`
			
      Diana_result = await fetchJson(`${url}`)
                      Diana_result = Diana_result.result
                      content = ""
                      for (var x of Diana_result) {
                          content += `🪀 *Title* : ${x.title}\n`
                      //  content += `Info : ${x.info}\n`
                          content += `🔗 *Link* : ${x.url}\n\n`
                      }

      await message.client.sendMessage(message.jid,notworking,MessageType.text, {quoted: message.data});
	  
    })
	
Ramiya.addCommand({ pattern: 'getxnx ?(.*)', fromMe: tp2 ,dontAddCommandList:true}, async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Need,MessageType.text);    
	    /*     await message.client.sendMessage(message.jid,Searching,MessageType.text);

			var url = `https://zenzapi.xyz/api/xnxx/search?query=${match[1]}&apikey=f55909b302`
			
			const header = `*◄━━━━━━⦁⦁◯⦁⦁━━━━━━►*
 *Alexa XNXX SEARCH*
◄━━━━━━⦁⦁◯⦁⦁━━━━━━►`
			
      Diana_result = await fetchJson(`${url}`)
                      Diana_result = Diana_result.result
                      content = ""
                      for (var x of Diana_result) {
                          content += `🪀 *Title* : ${x.title}\n`
                      //  content += `Info : ${x.info}\n`
                          content += `🔗 *Link* : ${x.url}\n\n`
                      }

      await message.client.sendMessage(message.jid,notworking,MessageType.text, {quoted: message.data});
	  
    })


Ramiya.addCommand({ pattern: 'xnx ?(.*)', fromMe: tp2 , dontAddCommandList:true}, async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Need,MessageType.text);    
	     /*   await message.client.sendMessage(message.jid,Searching,MessageType.text);

			var url = `https://zenzapi.xyz/api/xnxx/search?query=${match[1]}&apikey=f55909b302`
			
			const header = `*◄━━━━━━⦁⦁◯⦁⦁━━━━━━►*
 *Alexa XNXX SEARCH* 
◄━━━━━━⦁⦁◯⦁⦁━━━━━━►`
			
      Diana_result = await fetchJson(`${url}`)
                      Diana_result = Diana_result.result
                      content = ""
                      for (var x of Diana_result) {
                          content += `🪀 *Title* : ${x.title}\n`
                      //  content += `Info : ${x.info}\n`
                          content += `🔗 *Link* : ${x.url}\n\n`
                      }

      await message.client.sendMessage(message.jid,notworking,MessageType.text, {quoted: message.data});
	  
    })

Ramiya.addCommand({ pattern: 'xnx ?(.*)', fromMe: tp1 , dontAddCommandList:true}, async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Need,MessageType.text);    
	     /*   await message.client.sendMessage(message.jid,Searching,MessageType.text);

			var url = `https://zenzapi.xyz/api/xnxx/search?query=${match[1]}&apikey=f55909b302`
			
			const header = `*◄━━━━━━⦁⦁◯⦁⦁━━━━━━►*
 *Alexa XNXX SEARCH* 
◄━━━━━━⦁⦁◯⦁⦁━━━━━━►`
			
      Diana_result = await fetchJson(`${url}`)
                      Diana_result = Diana_result.result
                      content = ""
                      for (var x of Diana_result) {
                          content += `🪀 *Title* : ${x.title}\n`
                      //  content += `Info : ${x.info}\n`
                          content += `🔗 *Link* : ${x.url}\n\n`
                      }
  await message.client.sendMessage(message.jid,notworking,MessageType.text, {quoted: message.data});
	  
    })
*/
