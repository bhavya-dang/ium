const Discord = require("discord.js")
const botconfig = require("../botconfig");
let xp = require("../data/xp.json");

module.exports.run = (bot, message, args) => {

  let member = message.guild.member(message.mentions.members.first()) || message.guild.members.get(args[0]);
  let authorM = message.author;
  let target = message.mentions.users.first();
  if (!member) return message.reply("**Mention someone to fight!** `ium fight <user>`");
  if (member.id === message.author.id) return message.reply("You can't fight yourself! `ium fight <user>`");
  if(member.id === bot.user.id) return message.reply("You can't fight AI...");

  if(!xp[message.author.id]){
   xp[message.author.id] = {
     xp: 0,
     level: 1
  }};

  if(!xp[member.id]){
     xp[member.id] = {
       xp: 0,
       level: 1
     };
  }

  let ucurxp = xp[member.id].xp;
  let ucurlvl = xp[member.id].level;
  let unxtLvlXp = ucurlvl * 100;
  let udifference = unxtLvlXp - ucurxp;
  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let xpAdd = Math.floor(Math.random() * 100) + 50;

  let random = Math.random() * 2 + 1;
  var fight = Math.round(random)

  if (fight === 1) {
    //xp[message.author.id].xp =  curxp + xpAdd;
    let fightEmbed = new Discord.RichEmbed()
    .setTitle(`✊ ${member.user.username} vs ${message.author.username}`)
    .setColor("#000000")
    .setDescription('Its a tie!')
    .addField("Winner", "None", true)
    .addField("Loser", "None", true);
    message.channel.send(fightEmbed)
  }

  if (fight === 2) {
    //Author Wins
	  xp[message.author.id].xp =  curxp + xpAdd;
    let fightEmbed = new Discord.RichEmbed()
    .setTitle(`✊ ${member.user.username} vs ${message.author.username}`)
    .setThumbnail((authorM.displayAvatarURL))
    .setColor("#000000")
    .addField("Winner", message.author.username, true)
    .addField("Loser", member.user.username, true)
    .addField("Level", curlvl, true)
    .addField("XP", curxp, true)
    .setFooter(`${message.author.username} +${xpAdd}XP`, member.displayAvatarURL);
    message.channel.send(fightEmbed)
  }

  if (fight === 3) {
    //Mentioned Wins
    xp[member.id].xp =  ucurxp + xpAdd;
    let fightEmbed = new Discord.RichEmbed()
    .setTitle(`✊ ${member.user.username} vs ${message.author.username}`)
    .setThumbnail((target.displayAvatarURL))
    .setColor("#000000")
    .addField("Winner", member.user.username, true)
    .addField("Loser", message.author.username, true)
    .addField("Level", ucurlvl, true)
    .addField("XP", ucurxp, true)
    .setFooter(`${member.user.username} +${xpAdd}XP`, member.displayAvatarURL);
    message.channel.send(fightEmbed)
  }
}

module.exports.help = {
    name: "fight"
  }
