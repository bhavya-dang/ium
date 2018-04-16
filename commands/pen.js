const Discord = require("discord.js")
let game = "false";
let pens = "9";

module.exports.run = (bot, message, args) => {

  let pene = ':pen_ballpoint::pen_ballpoint::pen_ballpoint::pen_ballpoint::pen_ballpoint::pen_ballpoint::pen_ballpoint::pen_ballpoint::pen_ballpoint:';

  let penGameEmbed = new Discord.RichEmbed()
  .setAuthor("Pen Game", "https://images.emojiterra.com/emojione/v2/512px/1f58a.png")
  .setColor("#77c9ff")
  .addField("How To Play", "In the game you and me start out with 9 pens 🖊, and we take turns taking pens. In every turn you can take 1 pen, 2 pens, or 3 pens. The goal of the game is to make is to make you oponent have one pen left. When your opponent has one pen left you win!")
  .addField("Commands", "**ium pen start** - Starts game\n**ium pen 1** - Takes one pen\n**ium pen 2** - Takes two pens\n**ium pen 3** - Takes three Pens\n**ium pen stop** - Stops the game");
   if(!args[0]) return  message.channel.send(penGameEmbed)

   if(args[0] == "start"){
     game = "true";
     message.channel.send("**Game has started!** (Need help? Type: `ium pen`)")
     let penGameEmbed = new Discord.RichEmbed()
     .setColor("#77c9ff")
     .setDescription("🖊🖊🖊🖊🖊🖊🖊🖊🖊");
     return message.channel.send(penGameEmbed)
   }

   if(game === "false"){
     if(args[0] == "1" || args[0] == "2" || args[0] == "3" || args[0] == "stop"){
       return message.channel.send("**You must be in a game to use these commands. Do `ium pen start` to start a game.** (Need help? Type: `ium pen`)");
     }
   }


  if(game === "true"){

    if(args[0] == "1"){
      pens--;
      var curPene = pene.slice(0, -15);
      let penGameEmbed = new Discord.RichEmbed()
      .setColor("#77c9ff")
      .setDescription(curPene);
      return message.channel.send(penGameEmbed)
    }
    if(args[0] == "2"){
      pens = pens - 2;
      var curPene = pene.slice(0, -30);
      let penGameEmbed = new Discord.RichEmbed()
      .setColor("#77c9ff")
      .setDescription(curPene);
      return message.channel.send(penGameEmbed)
    }
    if(args[0] == "3"){
      pens = pens - 3;
      var curPene = pene.slice(0, -45);
      let penGameEmbed = new Discord.RichEmbed()
      .setColor("#77c9ff")
      .setDescription(curPene);
      return message.channel.send(penGameEmbed)
    }
    if(parseInt(args[0]) !== "1" || parseInt(args[0]) !== "2" || parseInt(args[0]) !== "3")
      return message.channel.send("**You may only take 1, 2, or 3 pens at once!** (Need help? Type: `ium pen`)");
  }
}

module.exports.help = {
    name: "Pen"
}
