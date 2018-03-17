const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    let banUser = message.mentions.members.first();
    if(!banUser) message.reply("**User not found.**");
    if(!message.member.hasPermission("MANNAGE_MESSAGES")) return message.reply("**You do not have permission to do that!**");
    if(banUser.hasPermission("MANNAGE_MESSAGES")) return message.reply("**You cannot ban that user!**");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor("#ecf0f1")
    .addField("Banned User", `${banUser}`)
    .addField("Banned By", `<@${message.author.id}>`);
    message.guild.member();
    banUser.ban();

    return message.channel.send(banEmbed);
}
