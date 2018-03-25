const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    let botAvatar = bot.user.displayAvatarURL;
    var text_channels = 0, voice_channels = 0;
    Client.channels.array().forEach(channel => {
      if (channel.type == 'text') {
        text_channels += 1;
      } else if (channel.type == 'voice') {
        voice_channels += 1;
      }
    });

    let botEmbed = new Discord.RichEmbed()

    .setDescription("Bot Information", )
    .setColor('#000000')
    .setThumbnail(botAvatar)
    .addField("Name", bot.user.username)
    .addField("Current Version", "v0.0.2")
    .addField("Born On", bot.user.createdAt)
    .addField("Servers", `${bot.guilds.size} servers.`)
    .addField("Users ", `${bot.users.size} users.`)
    .addField("Text channels", text_channels, true)
    .addField("Voice Channels", voice_channels, true)
    .addField("Made with:", "discord.js")
    .addField("Made by", "<@275831434772742144>")
    .addField("Github", "https://github.com/tetra-dev/ium")
    .addField("Memory ", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed() + "MB",);
    


    message.channel.send(botEmbed);
}
