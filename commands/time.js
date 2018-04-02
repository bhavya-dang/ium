const Discord = require('discord.js')
const weather = require('weather-js')
exports.run = (bot, message, args) => {
    
    let timeEmbed = new Discord.RichEmbed()

    .setTimestamp();
    
    


    message.channel.send(timeEmbed);
 } 