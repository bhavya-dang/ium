const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    const serverEmbed = new Discord.RichEmbed()
    .setColor('#ffffff')
    .addField("Commands", "Prefix: **ium **")
    .addField("Info", "define, avatar, weather, announce")
    .addField("Bot Info", "discord, invite, info, ping, dev, version, ium, stats")
    .addField("Moderation", "ban, kick, mute, unmute, report, hastebin")
    .addField("Fun", "dog, 8ball, choose, say, scale, search, money, pay, mock, reverse, furry, bond, wave")
    .addField("ium", "We are constantly adding more and more commands to make this bot much better.");

    return message.channel.send(serverEmbed);
}
