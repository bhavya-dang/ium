const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    const serverEmbed = new Discord.RichEmbed()
    .setColor('#ffffff')
    .addField("Commands", "Prefix: **ium **")
    .addField("Info", "discord, invite, server, info, ping, help, dev, version, definition, avatar")
    .addField("Moderation", "ban, kick, mute, report, warn, warnlevel (malfunctioning)")
    .addField("Fun", "dog, 8ball, choose, say, scale")
    .addField("ium", "We are constantly adding more and more commands to make this bot much better.");

    return message.channel.send(serverEmbed);
}