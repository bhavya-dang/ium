const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**You do not have permission to do that!**");
  message.guild.createChannel('ium-events', 'text');
  message.channel.send("Welcome messages are now setup for your server!")

}


module.exports.help = {
    name: "setup"
}
