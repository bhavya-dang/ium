const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

   //!8ball question
   if(!args[1]) return message.reply("**Plesae enter a full question with 2 or more words.** ium Am I a furry?");
   let replies = ["Yes", "No"];

   let result = Math.floor((Math.random() * replies.length));
   let question = args.join(" ");

   let chooseEmbed = new Discord.RichEmbed()

   .setAuthor(message.author.username)
   .setColor("#000000")
   .addField("Question", question)
   .addField("Answer", replies[result]);

   message.channel.send(chooseEmbed)

   message.delete();


}