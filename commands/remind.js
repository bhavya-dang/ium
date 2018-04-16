const Discord = require("discord.js");
const prefix = ("ium ");
const ms = require("ms");

exports.run = async (bot, message, args) => {

      let reminderTime = args[0];
      if(!reminderTime) return message.channel.send("**Specify a time for me to remind you. Usage: `ium remind 15min | Buy fursuit`**");

      let reminder = args.join(" ");

      let remindEmbed = new Discord.RichEmbed()
      .setColor('#ffffff')
      .setAuthor(message.author.username)
      .addField("Reminder", reminder)
      .addField("Time", reminderTime)
      .setTimestamp();

      message.channel.send(remindEmbed);


      setTimeout(function(){
        let remindeEmbed = new Discord.RichEmbed()
        .setColor('#ffffff')
        .setAuthor(message.author.username)
        .addField("Reminder", `${reminder}`)
        .setFooter(`${message.author.username}'s reminder has been triggered`)
        .setTimestamp()

        message.channel.send(remindeEmbed);
      }, ms(reminderTime));


    //end of module
    }

    module.exports.help = {
      name: "mute"
    }
