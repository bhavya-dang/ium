const Discord = require("discord.js");
const snekfetch = require('snekfetch');

exports.run = async (bot, message, args) => {

    const { body } = await snekfetch.get('https://aws.random.cat/meow');

    let catEmbed = new Discord.RichEmbed()
    .setColor("#bd9a82")
    .setTitle("Cat :cat:")
    .setImage(body.file);

    message.channel.send(catEmbed);
}




