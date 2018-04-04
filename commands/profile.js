const Discord = require("discord.js");
const botconfig = require("../botconfig");
let xp = require("../xp.json");
let iumics = require("../money.json");

exports.run = async (bot, message, args) => {

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

  const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
  let target = message.mentions.users.first() || message.author;

  let profileEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setThumbnail((target.displayAvatarURL))
  .setColor("#FFFFFF")
  .addField("Level", curlvl, true)
  .addField("XP", curxp, true)
  .addField("iumics", `**${userIumics}** iumics`, true)
  .setFooter(`${difference} XP till level up`, message.author.displayAvatarURL);

  message.channel.send(profileEmbed);

}

module.exports.help = {
  name: "profile"
}
