const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const botconfig = require("../botconfig.json");
let version = botconfig.version;


exports.run = async (bot, message, args) => {
    let botAvatar = bot.user.displayAvatarURL;
    let uptime = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
    let usersize = bot.users.size;
    var text_channels = 0, voice_channels = 0;
    bot.channels.array().forEach(channel => {
      if (channel.type == 'text') {
        text_channels += 1;
      } else if (channel.type == 'voice') {
        voice_channels += 1;
      }
    });

    let botEmbed = new Discord.RichEmbed()

    .setColor('#bf8aff')
    .setDescription(`${bot.guilds.size} servers`)
    .setTimestamp();


    message.channel.send(botEmbed);
}

module.exports.help = {
  name: "servers"
}
