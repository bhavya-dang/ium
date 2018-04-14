const Discord = require("discord.js")

exports.run = async (bot, message, args) => {

   if(!args[0]) return message.channel.send("Mention someone to kill!");
   let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

   let random = Math.random() * 3 + 1;
   var kill = Math.round(random)
   if (kill === 1) {
     let killEmbed = new Discord.RichEmbed()
     .setColor("#000000")
     .setDescription(`⬇ **${member}** falls in your quarter mile pit. `);
     message.channel.send(killEmbed)
   }
   if (kill === 2) {
     let killEmbed = new Discord.RichEmbed()
     .setColor("#000000")
     .setDescription(`🦊 **${member}** suffocates of heat in your fursuit.`);
     message.channel.send(killEmbed)
   }
   if (kill === 3) {
     let killEmbed = new Discord.RichEmbed()
     .setColor("#000000")
     .setDescription(`🚚 You drive over **${member}** with your Ford truck.`);
     message.channel.send(killEmbed)
   }
   if (kill === 4) {
     let killEmbed = new Discord.RichEmbed()
     .setColor("#000000")
     .setDescription(`🍔 You feed **${member}** too much trans fat, until their arteries were clogged.`);
     message.channel.send(killEmbed)
   }
}




module.exports.help = {
    name: "bond"
}
