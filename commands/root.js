const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

   if(!args[0]) return message.channel.send("**Enter an input for me to square.** `ium sqr 144`");
   if(isNaN(args[0])) return message.channel.send("Supply a number! `ium sqr 144`");

    let num1 = `${args[0]}`;
   let result = Math.sqrt(parseInt(num1));

   let minusEmbed = new Discord.RichEmbed()

   .setColor("#000000")
   .setTitle(`Root of ${args[0]} = **${result}**`);

   message.channel.send(minusEmbed);



}

module.exports.help = {
    name: "root"
  }
