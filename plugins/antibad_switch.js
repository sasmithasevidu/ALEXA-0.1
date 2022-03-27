/* Copyright (C) 2021 kavindya-x/-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - Kavindya-X
*/

const Neotro = require('../events');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;

   var l_dsc = ''
    var alr_on = ''
    var alr_off = ''
    var THERI_on = ''
    var THERI_off = ''
   
    if (config.LANG == 'EN') {
        l_dsc = 'safe mode on block spm,X links And Bad Word'
        alr_on = '♻safe mode is already open!'
        alr_off = '♻safe mos3 is currently closed!'
        THERI_on = '*🔰bad Mode Successfuly On*'
        THERI_off = '*⚠bad Mode Successfuly Off⛊*'
    }
   
    if (config.LANG == 'SI') {
        l_dsc = '*එය අසභ්‍ය වචන සබැඳි සමූහයේ අවහිර කරයි*'
        alr_on = '👾කලින්ම ක්‍රියාත්මකයි.'
        alr_off = '👾කලින්ම ක්‍රියාවිරහිත කර ඇත.'
        THERI_on = '👩‍🦰◉Andibad Mode◉ සාර්තකව ක්‍රියාත්මක විය '
        THERI_off = '👩‍🦰Antibad MODE සාර්තකව අක්‍රිය විය'
    }
    if (config.LANG == 'ML') {
        l_dsc = 'chilla theri vilichaal spot kick. -bot owner command'
        alr_on = 'Antilink is already open!'
        alr_off = 'Antilink is currently closed!'
        THERI_on = '*👩‍🦰* \n\n'
        THERI_off = '*👩‍🦰* \n\n'
    }
   
    Neotro.addCommand({pattern: 'bad ?(.*)', fromMe: true, desc: l_dsc, usage: '.bad on / off' }, (async (message, match) => {
        if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ANTI_BAD']: 'false'
                    } 
                });
                await message.sendMessage(THERI_off)
        } else if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ANTI_BAD']: 'true'
                    } 
                });
                await message.sendMessage(THERI_on)
        }
    }));
