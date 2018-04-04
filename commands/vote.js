const send = require('quick.hook');
const Discord = require('discord.js');

exports.run = async (bot, message, args, tools) => {

    //if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You must have the permission **Manage Messages** to use this command.");

    //let split = '|';

    if(!args[0]) { 
        
        return message.channel.send("**Announce an announcment with a title, and a description!** ium announce <title> <description>");

    }

    let poll = args.join(" ");
    
    message.delete();

    let announceEmbed = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .setTimestamp()
    .setTitle(poll)

    let m = await message.channel.send(announceEmbed);
    await m.react(`✅`);
    await m.react(`❌`);
    
}

module.exports.help = {
    name: "vote"
  }