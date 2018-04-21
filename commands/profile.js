const Discord = require("discord.js");
const botconfig = require("../botconfig");
let xp = require("../data/xp.json");
let iumics = require("../data/money.json");

exports.run = (bot, message, args) => {

  const member = message.mentions.members.first() || message.guild.members.get(args[0]);
  let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  let target = message.mentions.users.first();

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
  let userIumics = iumics[message.author.id].iumics;

  let profileEmbed = new Discord.RichEmbed()
  //.setAuthor(member.user.username)
  .setThumbnail((message.author.displayAvatarURL))
  .setColor("#FFFFFF")
  .addField("Level", curlvl, true)
  .addField("XP", curxp, true)
  .addField("iumics", `**${userIumics}** iumics`, true)
  .setFooter(`${difference} XP till level up`, message.author.displayAvatarURL);

  return message.channel.send(profileEmbed);
}

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
 let uuserIumics = iumics[user.id].iumics;

 let uprofileEmbed = new Discord.RichEmbed()
 .setAuthor(member.user.username)
 .setThumbnail((target.displayAvatarURL))
 .setColor("#FFFFFF")
 .addField("Level", ucurlvl, true)
 .addField("XP", ucurxp, true)
 .addField("iumics", `**${uuserIumics}** iumics`, true)
 .setFooter(`${udifference} XP till level up`, target.displayAvatarURL);

 return message.channel.send(uprofileEmbed);

}

module.exports.help = {
  name: "profile"
}
