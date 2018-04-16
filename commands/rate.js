const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

   if(!args[0]) return message.channel.send("**Ask me to rate someone or something** `ium rate <someone/something>`");
   let ratings = ["0", "⭐ - 1", "⭐⭐ - 2", "⭐⭐⭐ - 3", "⭐⭐⭐⭐- 4", "⭐⭐⭐⭐⭐ - 5", "⭐⭐⭐⭐⭐⭐ - 6",  "⭐⭐⭐⭐⭐⭐ - 7", "⭐⭐⭐⭐⭐⭐⭐⭐ - 8", "⭐⭐⭐⭐⭐⭐⭐⭐⭐ - 9", "⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ - 10"];

   let result = Math.floor((Math.random() * ratings.length));
   let user = message.mentions.users.first();

   let rateEmbed = new Discord.RichEmbed()

   .setAuthor(message.author.username)
   .setColor("#000000")
   .addField("Something", args[0])
   .addField("Rating", ratings[result]);

   message.channel.send(rateEmbed)


}

module.exports.help = {
    name: "rate"
  }
