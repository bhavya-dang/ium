const Discord = require('discord.js')
const weather = require('weather-js')
exports.run = (bot, message, args) => {
    
    weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) { 
    //   if (err) message.channel.send(err);
      if (result === undefined || result.length === 0) {
          const embed = new Discord.MessageEmbed()
          .setAuthor("Please enter a valid location")
          .setColor("RANDOM")
          return message.channel.send(embed);
      }
        var current = result[0].current; 
        var location = result[0].location; 

        const embed = new Discord.MessageEmbed()
            .setDescription(`**${current.skytext}**`)
            .setThumbnail(current.imageUrl) 
            .setAuthor(`Weather for ${current.observationpoint}`) 
            .setColor("RANDOM") 
            .addField('Timezone', `UTC${location.timezone}`, true) 
            .addField('Degree Type', location.degreetype, true) 
            .addField('Temperature', `${current.temperature} Degrees`, true)
            .addField('Feels Like', `${current.feelslike} Degrees`, true)
            .addField('Winds', current.winddisplay, true)
            .addField('Humidity', `${current.humidity}%`, true)
        message.channel.send(embed)
    })
 }