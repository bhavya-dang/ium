const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating avatar...");
    if(!message.guild.iconURL) return msg.edit("No icon found!");
    let target = message.mentions.users.first();

    let avatarEmbed = new Discord.RichEmbed()
    .setTitle(`${target}'s avatar`)
    .setColor("#FFFFFF")
    .setImage(message.guild.iconURL)
    .setDescription("[Icon URL link]("+message.guild.iconURL+")");

    message.channel.send(avatarEmbed)
    msg.delete();

}