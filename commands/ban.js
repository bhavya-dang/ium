const Discord = require("discord.js")

exports.run = async (bot, message, args) => {

if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**You do not have permission to do that.**");

    let member = message.mentions.members.first();

    if(!member)
    return message.channel.send("**Please mention a user to ban.** `ium ban <user>``");

    if(!member.bannable)
    return message.channel.send("**I cannot ban this user.** The user might have more permissions than me or, I do not have permission to ban them.");

    let reason = args.slice(1).join(' ');
    //if(!reason)
    //return message.channel.send("Please indicate a reason for the ban!");

    await member.ban(reason)
      .catch(error => message.channel.send(`Sorry, I couldn't ban because of : ${error}`));

    if(!reason){
        message.channel.send(`${member.user.username} has been banned by ${message.author.username}`);
        let Banembed = new Discord.RichEmbed()
        .setDescription("Ban")
        .setColor("#ecf0f1")
        .setTimestamp()
        .addField('Banned User', `${member.user.username}#${member.user.discriminator} (${member.user.id})`)
        .addField('Banned By', `${message.author.username}#${message.author.discriminator}`)
        .addField('Reason', "None");
        message.channel.send(Banembed);
    }

    message.channel.send(`${member.user.username} has been banned by ${message.author.username} because: **${reason}**`);
    let Banembed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor("#ecf0f1")
    .setTimestamp()
    .addField('Banned User', `${member.user.username}#${member.user.discriminator} (${member.user.id})`)
    .addField('Banned By', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason);
    message.channel.send(Banembed);
}


module.exports.help = {
  name: "ban"
}
