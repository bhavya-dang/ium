const Discord = require("discord.js");
const botconfig = require("../botconfig");
let xp = require("../data/xp.json");

exports.run = (bot, message, args) => {

  const member = message.mentions.members.first() || message.guild.members.get(args[0]);
  let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

  if(!user){
  if(!xp[message.author.id]){
   xp[message.author.id] = {
     xp: 0,
     level: 1
  };
}


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvlXp = curlvl * 100;
  let difference = nxtLvlXp - curxp;

  let lvlEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#7f46b7")
  .addField("Level", curlvl, true)
  .addField("XP", curxp, true)
  .setFooter(`${difference} XP till level up`, message.author.displayAvatarURL);

  return message.channel.send(lvlEmbed);
}

let target = message.mentions.users.first();

if(!xp[user.id]){
  xp[user.id] = {
    xp: 0,
    level: 1
 };
}


 let ucurxp = xp[user.id].xp;
 let ucurlvl = xp[user.id].level;
 let unxtLvlXp = ucurlvl * 100;
 let udifference = unxtLvlXp - ucurxp;

 let ulvlEmbed = new Discord.RichEmbed()
 .setAuthor(member.user.username)
 .setColor("#7f46b7")
 .addField("Level", ucurlvl, true)
 .addField("XP", ucurxp, true)
 .setFooter(`${udifference} XP till level up`, target.displayAvatarURL);

 return message.channel.send(ulvlEmbed);

}

module.exports.help = {
  name: "xp"
}
