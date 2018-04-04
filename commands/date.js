const Discord = require('discord.js')
const weather = require('weather-js')
exports.run = (bot, message, args) => {
    
    weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) { 
    //   if (err) message.channel.send(err);
      if (result === undefined || result.length === 0) {
          const embed = new Discord.RichEmbed()
          .setAuthor("Please enter a valid location")
          .setColor("#f5a3fa")
          return message.channel.send(embed);
      }
        var current = result[0].current; 
        var location = result[0].location; 

        const embed = new Discord.RichEmbed()

            .addField("Day", `${current.day}`, true)
            .addField("Date", `${current.date}`, true);
        message.channel.send(embed)
    })
 } 

 module.exports.help = {
    name: "date"
  }