const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**You do not have permission to do that.**");
  if(!args[0]) return message.channel.send("**Specify an amount of messages for me to clear.** `ium clear [amount of messages to clear]` (Note: cannot clear more than 99 messages, cannot clear messages older than 2 weeks)");

  message.channel.bulkDelete(args[0]).then(() => {
  message.delete().catch(O_o=>{});
  message.channel.send(`Deleted **${args[0]}** messages.`).then(msg => msg.delete(5000));
3
});


}
