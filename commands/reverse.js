const Discord = require("discord.js")

exports.run = async (bot, message, args) => {
    if (args.length < 1) {
        throw 'You must input text to be reversed!';
    }
    message.channel.send(args.join(' ').split('').reverse().join(''));


}