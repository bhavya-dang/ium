const Discord = require("discord.js");
const snekfetch = require('snekfetch');

exports.run = async (bot, message, args) => {

  let{body} = await superAgent
  .get(`http://random.birb.pw/tweet.json/`);


  const birdEmbed = new Discord.RichEmbed()
  .setColor("#ffd8bb")
  .setImage(body.url)
  .setTitle("Bird :bird:")
  .setFooter("Powered by random.birb.pw");
  message.channel.send(birdEmbed)

}


module.exports.help = {
    name: "bird"
}
