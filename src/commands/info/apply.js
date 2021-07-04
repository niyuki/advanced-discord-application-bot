const { MessageEmbed } = require('discord.js');
const config = require('../../setting.json')
const { MessageButton, MessageMenuOption,MessageMenu, MessageActionRow } = require('discord-buttons')
const moment = require('moment')
module.exports = {
    name: 'apply',
    description: 'Post your application',
    async run(client, message, args){
    let accept = new MessageButton()
    .setLabel('✅ Accept')
    .setStyle('green')
    .setID('accept')
    let deny = new MessageButton()
    .setLabel('❌ Deny')
    .setStyle('red')
    .setID('deny')

    let invite = new MessageButton()
    .setLabel('📧 Invite')
    .setStyle('blurple')
    .setID('invite')
    let chat = new MessageButton()
    .setLabel('💬 Chat')
    .setStyle('blurple')
    .setID('chat')
    let voice = new MessageButton()
    .setLabel('🎙 Voice')
    .setStyle('blurple')
    .setID('voice')
    let register = new MessageButton()
    .setLabel('⏺ Register')
    .setStyle('blurple')
    .setID('register')
    let niyukibundy = new MessageEmbed().setTitle(message.member.displayName, message.author.displayAvatarURL).setColor("f6f6f6").setTimestamp().setFooter(await client.translate(`Do not use this command as a test/troll because the information you type is sent to the channel integrated by the bot. If you do not use it correctly, it will be done as necessary and you will be punished.`, message));
    let niyukibundy2 = new MessageEmbed().setTitle(message.member.displayName, message.author.displayAvatarURL).setColor("f6f6f6").setTimestamp()
    if (!message.member.roles.cache.has(config.tag.tagrol) && config.tag.needed === true) { 
            message.channel.send(await client.translate(`To be staff you have to need the role <@&${config.tag.tagrol}>`, messaage)).then(x => x.delete({timeout: 7500})); 
    }
    let authroized = message.guild.roles.cache.get(config.application.authorized)
    let member =  message.member;
    const reactionFilter = (reaction) => {
        return [config.basarili].includes(reaction.emoji.name) && authorized.id;
      }
    let kanal = config.channellist.applicationchannel;
    if (!kanal.includes(message.channel.id)) { 
        message.react(config.emojis.crossemojireact)
        message.reply(await client.translate(`You can only use this command in: <#${config.channellist.applicationchannel}>`, message)).then(x => x.delete({timeout: 10000})); 
    } else {
try {
    message.author.send(`${message.author}`, {embed: niyukibundy.setDescription(await client.translate(`Hey, to become Staff can you tell me your Name and your Age?`, message))}).then(async m => {
        message.react(config.emojis.tickemojireact);
        message.member.roles.add(config.application.role)
        let awaitMessage = await m.channel.awaitMessages(x => x.author.id == message.author.id, { max: 1, time: 60000 });
        if (!awaitMessage.size) return message.channel.send(member+await client.translate(`Application got cancelled because you did not answer in time. ${config.emojis.crossemoji}`, message)).then(m.delete());
        let niyukibundyxd = awaitMessage.first();
        m.edit(`${message.author}`, {embed: niyukibundy.setDescription(await client.translate(`Sunucuya ne gibi katkılarda bulunabilirsin /invite/chat/voice/register/)`, message))}).then(async z => {
            let awaitMessage1 = await z.channel.awaitMessages(x => x.author.id == message.author.id, { max: 1, time: 60000 });
            if (!awaitMessage1.size) return message.channel.send(member+await client.translate(`Application got cancelled because you did not answer in time.`, message)).then(z.delete());
            let niyukibundy1 = awaitMessage1.first();
            z.edit(`${message.author}`, {embed: niyukibundy.setDescription(await client.translate(`How much active can you be during a day? (chat/voice) `, message))}).then(async b => {
    
                let awaitMessage31 = await b.channel.awaitMessages(x => x.author.id == message.author.id, { max: 1, time: 60000 });
                if (!awaitMessage31.size) return message.channel.send(member+await client.translate(` Application got cancelled because you did not answer in time. ${config.emojis.crossemoji}`, message)).then(b.delete());
                let niyukibundy31 = awaitMessage31.first();
                b.edit(`${message.author}`, {embed: niyukibundy.setDescription(await client.translate(`In what servers were you a staff before?`, message))})
    

                let awaitMessage2 = await b.channel.awaitMessages(x => x.author.id == message.author.id, { max: 1, time: 60000 });
                if (!awaitMessage2.size) return message.channel.send(member+await client.translate(`Application got cancelled because you did not answer in time. ${config.emojis.crossemoji}`, message)).then(b.delete());
                let niyukibundy2 = awaitMessage2.first();
                b.edit(`${message.author}`, {embed: niyukibundy.setTitle(config.emojis.tickemoji).setDescription(await client.translate(`The questions have been answered successfully and I will send a message to you stating that they have been accepted/rejected.`, message))}).then(x => x.delete({timeout: 15000}))
    
                let kanal = message.guild.channels.cache.get(config.channellist.applicationlog);
                kanal.send(`<@&${config.application.authorized}> `, {embed: niyukibundy.setFooter(await client.translate('Click on Accept or Deny for the application above', message)).setDescription(await client.translate(`\`•\` Applicant : ${message.author} - (\`${message.author.id}\`)\n \`•\` Application Time: (\`${moment().locale(config.panel.language)}\`)\n **___User answers to questions :___ **\n\`•\` Name and Age : \`${niyukibundyxd.content}\`\n \`•\` What contributions can you make to our server?: \`${niyukibundy1.content}\`\n \`•\` Daily Activity : \`${niyukibundy31.content}\`\n \`•\` Authorized History : \`${niyukibundy2.content}\``, message)), buttons: [accept, deny]}).then(x => x.delete({timeout:1000*60*60*1}))
                
                client.on('clickButton', async (button) => {
                    let result = new MessageEmbed()
                        .setFooter('Niyuki x Ted Bundy')
                        .setTimestamp()
                        .setAuthor(message.author.username, message.author.displayAvatarURL)
                    if(button.clicker.member.roles.cache.get(config.application.authorized) || button.clicker.member.hasPermission(8)) {
                  if (button.id === 'deny') {
                    accept.setDisabled(true)
                    const select1 = new MessageMenuOption()
      .setLabel(`Reason 1`)
      .setDescription(`Too young`)
      .setEmoji(`👶`)
      .setValue(`r1`);

    const select2 = new MessageMenuOption()
      .setLabel(`Reason 2`)
      .setDescription(`Not enough experience`)
      .setEmoji(`👨‍🎓`)
      .setValue(`r2`);

    const select3 = new MessageMenuOption()
      .setLabel(`Reason 3`)
      .setDescription(`Not enough activity`)
      .setEmoji(`⏰`)
      .setValue(`r3`);

    const select4 = new MessageMenuOption()
      .setLabel(`Reason 4`)
      .setDescription(`Troll or Fake`)
      .setEmoji(`🤡`)
      .setValue(`r4`);

    const OMG = new MessageMenu()
    .setID(`niyukiispog`)
    .setPlaceholder(await client.translate(`Choose one reason or i will stab you and haunt you 👻`, message))
    .addOption(select1)
    .addOption(select2)
    .addOption(select3)
    .addOption(select4)

    const Rowwwww = new MessageActionRow().addComponent(OMG);

    await button.channel.send(`Reason for Deny`, {
      components: [Rowwwww],
    });
    client.on('clickMenu', async(menu) => {
      let Reason = ""
        if(menu.clicker.id !== button.clicker.member.id) return
        if(menu.values[0] === 'r1') {
          await menu.reply.defer({ ephemeral: true })
          await menu.channel.send(await client.translate(`Application denied. I informed the applicant. Reason is: Too young`, message))
          Reason = "Too young"
        }
      
        if(menu.values[0] === 'r2') {
          await menu.reply.defer({ ephemeral: true })
          await menu.channel.send(await client.translate(`Application denied. I informed the applicant. Reason is: Not enough experience`, message))
          Reason = "Not enough experience"
        }
      
        if(menu.values[0] === 'r3') {
          await menu.reply.defer()
          await menu.channel.send(await client.translate(`Application denied. I informed the applicant. Reason is: Not enough activity`, message))
          Reason = "Not enough activity"
        }
      
        if(menu.values[0] === 'r4') {
          await menu.reply.defer({ ephemeral: true })
          await menu.channel.send(await client.translate(`Application denied. I informed the applicant. Reason: Troll or Fake`, message))
          Reason = "Troll or Fake"
        }
        message.author.send(await client.translate(`Application denied. Reach ${button.clicker.member} for more details - \`ID: ${button.clicker.member.id}\` \`Reason: ${Reason}\` `, message))
        message.guild.channels.cache.get(config.channellist.acceptreject).send(result.setColor('4a0000').setDescription(await client.translate(`__Application Denied__ \n**Denied Applicant:** ${message.author} - \`${message.author.id}\` \n**Denying Authorized:** ${button.clicker.member} - \`${button.clicker.member.id}\` \n \`Reason: ${Reason}\` `, message))).then(x => x.react(config.emojis.crossemojireact))

    })
               } else if (button.id === 'accept') {
                      deny.setDisabled(true)
                    message.member.roles.remove(config.application.role)
                    await button.reply.edit(await client.translate(`Application accepted, I informed the applicant. \n Decide below which Staff roles you want to give him`, message), {buttons: [invite, chat, register, voice]})
                    message.author.send(await client.translate(`__Application Accepted__  You can get detailed information by contacting ${button.clicker.member} - \`ID: ${button.clicker.member.id}\``, message))
                    message.guild.channels.cache.get(config.channellist.acceptreject).send(result.setColor('53ff00').setDescription(await client.translate(`__Application Accepted__ \n**Accepted Applicant:** ${message.author} - \`${message.author.id}\` \n**You can get detailed information by contacting:** ${button.clicker.member} - \`${button.clicker.member.id}\``, message))).then(x => x.react(config.emojis.tickemojireact))
                    
                    client.on('clickButton', async (button) => {
                        if (button.id === 'invite') {
                                await message.member.roles.add(config.application.invitestaff)
                                await button.think(true);
                                await button.reply.edit(await client.translate("Succesfully added Invite Staff Roles to user! (To remove it you have to do this manually due to Module Errors)", message) +config.emojis.tickemoji)
                                message.author.send(await client.translate('Congratulations! You received the Invite Staff Roles, Get on your work chop chop!', message))
                            }
                            if (button.id === 'chat') {
                                  await message.member.roles.add(config.application.chatstaff)
                                  await button.think(true);
                                  await button.reply.edit(await client.translate("Succesfully added Chat Staff Roles to user! (To remove it you have to do this manually due to Module Errors)", message) +config.emojis.tickemoji)
                                  message.author.send(await client.translate('You received the Chat Staff Roles, Get on your work chop chop!', message))
                            }
                            if (button.id === 'voice') {
                                  await message.member.roles.add(config.application.voicestaff)
                                  await button.think(true);
                                  await button.reply.edit(await client.translate("Succesfully added Voice Staff Roles to user! (To remove it you have to do this manually due to Module Errors)", message) +config.emojis.tickemoji)
                                  message.author.send(await client.translate('You received the Voice Staff Roles, Get on your work chop chop!', message))
                            }
                            if (button.id === 'register') {
                                  await message.member.roles.add(config.application.registerstaff)
                                  await button.think(true);
                                  await button.reply.edit(await client.translate("Succesfully added Register Staff Roles to user! (To remove it you have to do this manually due to Module Errors)", message) +config.emojis.tickemoji)
                                  message.author.send(await client.translate('You received the Register Staff Roles, Get on your work chop chop!', message))
                            } 
                    })
                }
                } else {
                    await button.think(true);
                    setTimeout(() => {
                        button.reply.edit("You do not have enough permission! Or You are the applier :flushed:")
                    }, 3500);
                }
                })
            })
        })
    })
} catch (err) {
    console.error(err);
    message.react(config.emojis.crossemojireact);
}

}}}
