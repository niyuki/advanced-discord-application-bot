const client = require('../../index');
const config = require('../../setting.json')

client.on('ready', async(message) => {
    //--------------LOG IF BOT IS ONLINE
    let log = await client.translate(`${client.user.tag} BOT is here!`, message)
    console.log(log)
    console.log('<==============================================>')
    console.log('🔥 Niyuki 💖 Ted Bundy 🔥')
    console.log('<==============================================>')

    //--------JOIN VOICE CHANNEL
    client.channels.cache.get(config.channellist.voicechannel).join()

    //--------BOT PRESENCE STATUS
    client.user.setPresence({ activity: { name: 'Niyuki x Ted Bundy' , type: 'STREAMING', url:'https://github.com/niyuki'}, status: 'dnd'/*online, idle, dnd, invisible */ })
    //.then(console.log)
      .catch(console.error);  
})