const { Collection, Client, Discord } = require('discord.js');
const client = new Client({
    disableMention: 'everyone'
});
require('discord-buttons')(client);
const translate = require('@iamtraction/google-translate')
const path = require('path')
const fs = require('fs')
const config = require('./setting.json');
module.exports = client;
client.commands = new Collection();
client.prefix = config.panel.prefix;
client.aliases = new Collection();
client.categories = fs.readdirSync(path.resolve('src/commands'));
["command"].forEach(handler => {
    require(path.resolve(`src/handlers/${handler}`))(client);
}); 

//----------------------TRANSLATE THE WHOLE BOT FOR YOU---------------//

client.translate = async(text) => {
    const lang = config.panel.language ? config.panel.language : 'en'
    const translated = await translate(text, {from: 'en', to: lang});
    return translated.text;
}

//---------------------------SELFDEAF & SELFMUTE
client.on('voiceStateUpdate', async (___, newState) => {
    //---SELFDEAF
    if(
        newState.member.user.bot &&
        newState.channelID &&
        newState.member.user.id == client.user.id && !newState.selfDeaf
    ) return newState.setSelfDeaf(true);
    //---SELFMUTE
    if(
        newState.member.user.bot &&
        newState.channelID &&
        newState.member.user.id == client.user.id && !newState.selfMute
    ) return newState.setSelfMute(true);
})

//---------BOT LOGIN
client.login(config.panel.token);
