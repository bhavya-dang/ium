const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const botconfig = require("../botconfig.json");
let version = botconfig.version;
const os = require('os');
const osu = require('os-utils');


exports.run = (bot, message, args) => {
    var memory = Math.round((os.totalmem() - os.freemem()) / 1000000);
    var totalmem = Math.round(os.totalmem() / 1000000);
    //var usersize = bot.users.length;
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

    .setDescription("Bot Information", )
    .setColor('#000000')
    .setThumbnail(botAvatar)
    .addField("Name", bot.user.username, true)
    .addField("Current Version", botconfig.version, true)
    .addField("Born On", bot.user.createdAt)
    .addField('Online Users', + usersize + ' online  users', true)
    .addField("Servers", `${bot.guilds.size} servers.`, true)
    .addField("Text channels", text_channels, true)
    .addField("Voice Channels", voice_channels, true)
    //.addField("Made with:", "discord.js")
    //.addField("Made by", "<@275831434772742144>")
    .addField('RAM Usage', memory + 'MB / ' + totalmem + ' MB', true)
    //.addField('CPU Usage', (cpuUsage * 100) + '%', true)
    .addField("Uptime", uptime, true)
    .addField("Library",  "Discord.js", true)
    .addField('Server', os.hostname() + ' (' + os.type() + ')', true)
    .setTimestamp();

    message.channel.send(botEmbed);
}

module.exports.help = {
  name: "stats"
}
