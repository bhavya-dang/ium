const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

   //!8ball question
   if(!args[1]) return message.channel.send("**Type a question about something that you would scale from 1-10.** ium scale 1-10 **how handsome/pretty am I?**");
   let replies = ["**1**", "2", "3", "4", "5", "6", "7","8","9","**10**"];

   let result = Math.floor((Math.random() * replies.length));
   let question = args.join(" ");

   let scaleEmbed = new Discord.RichEmbed()

   .setAuthor(message.author.username)
   .setColor("#000000")
   .addField("Question", question)
   .addField("Answer", "From a 1-10 scale you are about a " + replies[result] + " from 10");

   message.channel.send(scaleEmbed)




}

module.exports.help = {
    name: "scale"
  }