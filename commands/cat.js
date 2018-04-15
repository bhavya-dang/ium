const Discord = require("discord.js");
const snekfetch = require('snekfetch');

exports.run = async (bot, message, args) => {

    let {body} = await snekfetch
    .get('http://edgecats.net/random');

    let catEmbed = new Discord.RichEmbed()
    .setColor("#bd9a82")
    .setTitle("Cat :cat:")
    .setImage(body.url);

    message.channel.send(catEmbed);
}


module.exports.help = {
    name: "nick"
}
