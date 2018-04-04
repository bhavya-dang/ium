const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    let serverEmbed = new Discord.RichEmbed()
    .setColor('#ffffff ')
    .addField("Word", "ium")
    .addField("Type", "*suffix*")
    .addField("1st Definiton", "Forming nouns adopted unchanged from Latin (such as alluvium ) or based on Latin or Greek words (such as euphonium ).")
    .addField("2nd Definiton", "Forming names of metallic elements.")

    message.channel.send(serverEmbed);
}

module.exports.help = {
    name: "ium"
  }