const weather = require('weather.js');
const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    weather({search: args.join(" "), degreeType: 'F'}, function(err, result) { 
        if (err) message.channel.send(err);


        if (result.length === 0) {
            message.channel.send('**Please enter a valid location.**') 
            return;
        }

        // Variables
        let current = result[0].current; 
        let location = result[0].location; 

        const weatherEmbed = new Discord.RichEmbed()
            .setDescription(`**${current.skytext}**`) 
            .setAuthor(`Weather for ${current.observationpoint}`) 
            .setThumbnail(current.imageUrl) 
            .setColor("#f5a3fa") 
            .addField('Timezone',`UTC${location.timezone}`, true) 
            .addField('Degree Type',location.degreetype, true)
            .addField('Temperature',`${current.temperature} Degrees`, true)
            .addField('Feels Like', `${current.feelslike} Degrees`, true)
            .addField('Winds',current.winddisplay, true)
            .addField('Humidity', `${current.humidity}%`, true)

            message.channel.send({weatherEmbed});
    }); 
}

module.exports.help = {
    name: weather
}