const Discord = require("discord.js");
let iumics = require("../money.json");
const fs = require("fs");

exports.run = async (bot, message, args) => {
    
      if(!iumics[message.author.id]){
    return message.reply("You don't have any iumics!")
  }

  let payUsers = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

  if(!iumics[payUsers.id]){
    iumics[payUsers.id] = {
      iumics: 0
    };
  }

  let payIumics = iumics[payUsers.id].iumics;
  let sIumics = iumics[message.author.id].iumics;

  if(sIumics < args[0]) return message.reply("You do not have enough iumicics!");

  iumics[message.author.id] = {
    iumics: sIumics - parseInt(args[1])
  };

  iumics[payUsers.id] = {
    iumics: payIumics + parseInt(args[1])
  };

  message.channel.send(`${message.author} has given ${payUsers}, **${args[1]}** iumics.`);

  fs.writeFile("./money.json", JSON.stringify(iumics), (err) => {
    if(err) cosole.log(err)
  });

}
