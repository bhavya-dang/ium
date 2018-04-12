const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    const serverEmbed = new Discord.RichEmbed()
    .setColor('#ffffff')
    .setAuthor("ium's commands", "https://ium-bot.github.io/ium.jpg")
    .setColor('#000000')
    .setDescription("Prefix: `ium ` | All commands can be found here: https://ium-bot.github.io/commands")
    .addField("Moderation", "`ban` `clear` `kick` `mute` `poll` `unmute`")
    .addField("Info", "`about` `developer` `discord` `github` `ping` `server` `stats` `user`")
    .addField("Utils", "`announce` `avatar` `date` `define` `hastebin` `help` `lmgtfy` `ping` `profile` `shorten` `translate` `vote` `weather`")
    .addField("Fun", "`8ball` `bond` `choose` `clap` `dog` `level` `profile` `rate` `reverse` `say` `scale` `wave`")
    .addField("Economy", "`balance` `pay`")
    .addField("Math", "`divide` `exponent` `minus` `sqrt` `times`")
    .setFooter("Type ium dmhelp for more info on commands.");

    return message.channel.send(serverEmbed);
}

module.exports.help = {
    name: "help"
  }
