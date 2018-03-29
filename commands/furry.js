const Discord = require("discord.js")

exports.run = async (bot, message, args) => {
   let furryEmbed = new Discord.RichEmbed()

   .setColor("#FFFF00")
   .setTitle("Furry")
   .setImage("https://cdn.discordapp.com/attachments/414650165987639299/428749743741599745/image.png");

   message.channel.send(furryEmbed);


}