const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

   if(!args[1]) return message.channel.send("**Enter two inputs for me to get the power of.** ium exponent 52 69");
   if(isNaN(args[0])) return message.channel.send("Supply a number! `ium exponent 52 69`");

    let num1 = `${args[0]}`;
    let num2 = `${args[1]}`;
   let result = Math.pow(parseInt(num1), parseInt(num2));

   let minusEmbed = new Discord.RichEmbed()

   .setColor("#000000")
   .setTitle(`${args[0]} ^ ${args[1]} = **${result}**`);

   message.channel.send(minusEmbed);



}
module.exports.help = {
    name: "exponent"
  }