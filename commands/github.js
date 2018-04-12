const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    let githubEmbed = new Discord.RichEmbed()
    .setColor('#ffffff ')
    .addField("ium's github", "https://github.com/tetra-dev/ium")

    return message.channel.send(githubEmbed);
}

module.exports.help = {
    name: "github"
  }
