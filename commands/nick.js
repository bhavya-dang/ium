const Discord = require("discord.js");
const snekfetch = require('snekfetch');

exports.run = async (bot, message, args) => {
      if (!['275831434772742144',].includes(message.author.id)) return message.reply('**You cant change my nick, only bot developer can!**');
      bot.user.setUsername(args[0]);
}


module.exports.help = {
    name: "nick"
}
