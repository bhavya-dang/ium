const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    let devEmbed = new Discord.RichEmbed()
    .setColor('#ffffff ')
    .addField("ium's trello", "https://trello.com/b/3kvrAbIV/ium")

    message.channel.send(devEmbed);
}

module.exports.help = {
    name: "trello"
  }