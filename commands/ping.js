const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (bot, message, args) => {
    message.channel.send(`Pong! \`${Date.now() - message.createdTimestamp} ms\``);
}
