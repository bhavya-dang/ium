const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
let version = botconfig.version;


exports.run = async (bot, message, args) => {
    let verEmbed = new Discord.RichEmbed()
    .setDescription("Version")
    .setColor('#ffffff')
    .addField("Current Version", botconfig.version)
    .addField("Made with", "discord.js v11.3 \nnpm v11.3.2 \nnode.js v8.10.0 and 💗");
    
    message.channel.send(verEmbed);
}
