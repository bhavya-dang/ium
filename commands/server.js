const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    let serverIcon = message.guild.iconURL;
    let serverEmbed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor('#000000')
    .setThumbnail(serverIcon)
    .addField("Server Name", message.guild.name)
    .addField("Owned By", message.guild.owner)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Members", message.guild.memberCount)
    .addField("Region", message.guild.region);
    
    message.channel.send(serverEmbed);
}
