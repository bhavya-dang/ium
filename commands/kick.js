const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**You do not have permission to do that.**");
    if(kickUser.hasPermission("KICK_MEMBERS"))  return message.channel.send("**You cannot kick that user.**");
    let kickUser = message.mentions.members.first();
    if(!kickUser) message.channel.send("**User not found.** `ium kick <user>`");

    let reason = args.slice(1).join(' ');

    await member.kick(reason)
      .catch(error => message.channel.send(`Sorry, I couldn't kick because of : ${error}`));

    if(reason == null){
        message.channel.send(`${member.user.username} has been kicked by ${message.author.username}`);
        let kickEmbed = new Discord.RichEmbed()
        .setDescription("Kick")
        .setColor("#ecf0f1")
        .setTimestamp()
        .addField('Kicked User', `${member.user.username}#${member.user.discriminator} (${member.user.id})`)
        .addField('Kicked By', `${message.author.username}#${message.author.discriminator}`)
        .addField('Reason', "None");
        message.channel.send(kickEmbed);
    }

    message.channel.send(`${member.user.username} has been kicked by ${message.author.username} because: **__${reason}__**`);
    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Kick")
    .setColor("#ecf0f1")
    .setTimestamp()
    .addField('Kicked User', `${member.user.username}#${member.user.discriminator} (${member.user.id})`)
    .addField('Kicked By', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason);
    message.channel.send(kickEmbed);
}

module.exports.help = {
    name: "kick"
  }
