const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    let devEmbed = new Discord.RichEmbed()
    .setColor('#ffffff ')
    .addField("Made by:", "<@275831434772742144>")

    message.channel.send(devEmbed);
}

module.exports.help = {
    name: "dev"
  }