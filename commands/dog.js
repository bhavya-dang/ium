const Discord = require("discord.js");
const superAgent = require("superagent");

exports.run = async (bot, message, args) => {

    let{body} = await superAgent
    .get(`https://random.dog/woof.json`);

    let dogEmbed = new Discord.RichEmbed()
    .setColor("#bd9a82")
    .setTitle("Dog :dog:")
    .setImage(body.url);

    message.channel.send(dogEmbed);
}

module.exports.help = {
    name: "dog"
  }
