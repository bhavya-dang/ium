const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    const serverEmbed = new Discord.RichEmbed()
    .setColor('#ffffff')
    .addField("Commands", "Prefix: **ium **")
    .addField("Info", "discord, invite, server, info, ping, help, dev, version, define, avatar, weather")
    .addField("Moderation", "ban, kick, mute, report, addrole, removerole")
    .addField("Fun", "dog, 8ball, choose, say, scale, search")
    .addField("ium", "We are constantly adding more and more commands to make this bot much better.");

    return message.channel.send(serverEmbed);
}