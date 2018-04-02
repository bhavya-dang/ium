const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**You do not have permission to do that.**");
  if(!args[0]) return message.channel.send("Clear Command: **ium clear [amount of messages to clearn]**");
  message.channel.bulkDelete(args[0]).then(() => {
  message.delete().catch(O_o=>{});
  message.channel.send(`Deleted **${args[0]}** messages.`).then(msg => msg.delete(5000));

});


}