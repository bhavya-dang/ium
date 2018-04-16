const Discord = require("discord.js");
const snekfetch = require('snekfetch');

exports.run = (bot, message, args) => {
      //if (!['275831434772742144',].includes(message.author.id)) return message.reply('**You cant change my nick, only bot developer can!**');
      message.member.setNickname(args[0]);
}


module.exports.help = {
    name: "nick"
}
