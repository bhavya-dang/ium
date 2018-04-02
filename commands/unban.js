const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    const reason = args.slice(1).join(' ');
    unban.unbanAuth = message.author;
    const user = args[0];
    if (reason.length < 1) return message.channel.send('You must supply a reason for the unban.');
    if (!user) return message.channel.send('You must supply a User Resolvable, such as a user id.').catch(console.error);
    message.guild.unban(user);

}