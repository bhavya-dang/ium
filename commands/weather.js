const weather = require('weather-js');
const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) {
        if(err) message/channel.send(err);

        message.channel.send(JSON.stringify(result[0].current, null, 2));

        if (result.length === 0) {
            message.channel.send(`**Please enter a valid location.**`)
        }
    

    var current = result[0].current;
    var location = result[0].location;

    const weatherEmbed = new Discord.RichEmbed()
    .setColor('#f5a3fa')
    .setDescription(`**${current.skytext}**`)
    .setAuthor(`Weather for ${current.observationpoint}`)
    .setThumbnail(current.imageURL)
    .addField('Timezone', `UTC${location.timezone}`, true)
    .addField('Degree Type', location.degreetype, true)
    .addField('Temperature', `${current.temperature} Degrees`, true)
    .addField('Feels Like', `${current.feelslike} Degrees`, true)
    .addField("Winds", current.winddisplay, true)
    .addField("Humidity", `${current.humidity}%`, true);

    message.channel.send(weatherEmbed);
});
}
