const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**You do not have permission to do that.**");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("**Please mention member to ban!**");
    if(!member.bannable) 
      return message.reply("**I cannot ban this user!**");
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry, I couldn't ban because of : ${error}`));
    message.reply(`${member.user.username} has been banned by ${message.author.username}.`);

    let Banembed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setTimestamp()
    .addField('Action:', 'Ban')
    .addField('User:', `${member.user.username}#${member.user.discriminator} (${member.user.id})`)
    .addField('Modrator:', `${message.author.username}#${message.author.discriminator}`)

    message.channel.send(Banembed);

    message.delete();

}