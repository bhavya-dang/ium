const send = require('quick.hook');
const Discord = require('discord.js');

exports.run = (bot, message, args, tools) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You must have the permission **Manage Messages** to use this command.");

    let split = '|';

    if(!args[0]) { 
        
        return message.channel.send("**Announce an announcment with a title, and a description!** ium announce <title> <description>");

    }

    args = args.join(' ').split(split);

    for (var i = 0; i < args.length; i++) args[i] = args[0].trim();

    if(args[2]) args[2] = parseInt(`0x${args[2]}`);

    let option = {
        title: args[0] || 'Announcment',
        embedColor: args[2] || 0xffffff,
        icon: `https://cdn.discordapp.com/attachments/416294137118195742/430094358381854720/avatar.png`
    }

    const embed = new Discord.RichEmbed()
        .setColor(option.embedColor)
        .setTitle(option.title)

    if(option.message) embed.setDescription(option.message);

    message.delete();

    let announceEmbed = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .setTimestamp()
    .setTitle(option.title)

    message.channel.send(announceEmbed);
    
}