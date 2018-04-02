const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    let kickUser = message.mentions.members.first();
    if(!kickUser) message.channel.send("**User not found.**");
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**You do not have permission to do that.**");
    if(kickUser.hasPermission("KICK_MEMBERS"))  return message.channel.send("**You cannot kick that user.**");

    let kickEmbed = new Discord.RichEmbed()
        .setDescription("Kick")
        .setColor("#ecf0f1")
        .setTimestamp()
        .addField("Kicked User", `${kickUser.user.username}#${kickUser.user.discriminator} (${kickUser.user.id})`)
        .addField("Kicked By", `<@${message.author.id}>`);

        message.guild.member();
        kickUser.kick();

        

    return message.channel.send(kickEmbed);
}
