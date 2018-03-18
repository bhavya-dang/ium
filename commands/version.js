const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    let serverIcon = message.guild.iconURL;
    let serverEmbed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor('#ffffff')
    .setThumbnail(serverIcon)
    .addField("Current Version", "0.0.1")
    .addField("Made with", "discord.js v11.3 \nnpm v11.3.2 \nnode.js v8.10.0")
    
    message.channel.send(serverEmbed);
}
