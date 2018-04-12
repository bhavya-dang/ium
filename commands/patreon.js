const Discord = require("discord.js");
let inline = true


exports.run = async (bot, message, args) => {
    let botAvatar = bot.user.displayAvatarURL;
    let botEmbed = new Discord.RichEmbed()
    .setColor('#000000')
    .setDescription("ium's patreon: https://www.patreon.com/ium")



    message.channel.send(botEmbed);
}


module.exports.help = {
    name: "patreon"
}
