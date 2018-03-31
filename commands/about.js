const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
let version = botconfig.version;

exports.run = async (bot, message, args) => {
    let botAvatar = bot.user.displayAvatarURL;
    let botEmbed = new Discord.RichEmbed()
    .setDescription("Bot Information", )
    .setColor('#000000')
    .setThumbnail(botAvatar)
    .addField("Name", bot.user.username, true)
    .addField("Current Version", botconfig.version, true)
    .addField("Born On", bot.user.WcreatedAt)
    .addField("Servers", `${bot.guilds.size} servers.`)
    .addField("Users ", `${bot.users.size} online users.`)
    .addField("Made with:", "discord.js")
    .addField("Made by:", "<@275831434772742144>")
    .addField("Github", "https://github.com/tetra-dev/ium")
    .addField("Memory ", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed() + "MB",);
    


    message.channel.send(botEmbed);
}
