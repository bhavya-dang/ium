const urban = require('relevant-urban'), Discord = require('discord.js');

exports.run = async (bot, message, args, tools) => {
    if(!args[0]) return message.channel.send(`**Please specify some a word to defin.**`);

    let res = await urban(args.join(' ')).catch(e => {
        return message.channel.send(`**Definition not found.**`);
    });

    let urbanEmbed = new Discord.RichEmbed()
        .setColor(`#f5a3fa`)
        .setTitle(res.word)
        .setURL(res.urbanURL)
        .setDescription(`**Defintion**\n${res.definition}\n\n**Example**\n*${res.example}*`)

    message.channel.send(urbanEmbed);
}

module.exports.help = {
    name: "urban"
  }