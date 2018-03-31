const Discord = require("discord.js");
let iumics = require("../money.json");
const fs = require("fs");

exports.run = async (bot, message, args) => {
    
if(!iumics[message.author.id]){
    return message.reply("You don't have any iumics!")
  }

  let payUsers = message.mentions.users.first();

  if(!iumics[payUsers.id]){
    iumics[payUsers.id] = {
      iumics: 0
    };
  }

  let payIumics = iumics[payUsers.id].iumics;
  let sIumics = iumics[message.author.id].iumics;

  if(message.author.id === payUsers.id){
    return message.reply("You can't pay money to yourself!")
}

if(isNaN(args[1])) return message.channel.send("Supply a number!");

  if(sIumics < args[1]) return message.reply("You do not have enough iumicics!");

  if (parseInt(args[1]) <= 0) return message.reply("You must give a number that is higher than 0.");

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
