const Discord = require("discord.js")

exports.run = async (bot, message, args) => {

if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**You do not have permission to do that.**");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("**Please mention member to ban!**");
    if(!member.bannable) 
      return message.reply("**I cannot ban this user!**");

    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the ban!");
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry, I couldn't ban because of : ${error}`));
    message.reply(`${member.user.username} has been banned by ${message.author.username} because: **__${reason}__**`);

    let Banembed = new Discord.RichEmbed()
    .setColor("#ecf0f1")
    .setTimestamp()
    .addField('Action:', 'Ban')
    .addField('User:', `${member.user.username}#${member.user.discriminator} (${member.user.id})`)
    .addField('Modrator:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason);

    message.channel.send(Banembed);

}