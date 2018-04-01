const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (bot, message, args) => {
    const pingEmbed = new Discord.RichEmbed()
    .setColor('#ffffff')
    .addField("🏓 Pong!", `${Date.now() - message.createdTimestamp} ms`)


    message.channel.send(pingEmbed);
}
