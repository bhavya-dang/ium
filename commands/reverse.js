const Discord = require("discord.js")

exports.run = async (bot, message, args) => {
  if(!args[0]) {

      return message.channel.send("**Input some text to reverse.** `ium reverse <text>`");

  }
    message.channel.send(args.join(' ').split('').reverse().join(''));


}

module.exports.help = {
    name: "reverse"
  }
