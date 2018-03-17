const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

   //!8ball question
   if(!args[1]) return message.reply("**Type a question with two or mords!** ium Am I a furry?");
   let replies = ["Yes", "No", "I don't know", "Ask again later!", "Nope", "I am not sure!", "You tell me"];

   let result = Math.floor((Math.random() * replies.length));
   let question = args.join(" ");

   let ballembed = new Discord.RichEmbed()

   .setAuthor(message.author.username)
   .setColor("#000000")
   .addField("Question", question)
   .addField("Answer", replies[result]);

   message.channel.send(ballembed)

   message.delete();


}