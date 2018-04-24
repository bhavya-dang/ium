const Discord = require("discord.js");
let iumics = require("../data/money.json");

exports.run = (bot, message, args) => {

  if(!args[0]) return message.channel.send("**Choose Rock, Paper, or Scissors.** `ium rps rock`");

  //if(args[0] != 'rock' || args[0] != 'paper' ||args[0] != 'scissors') return message.channel.send("**Choose Rock, Paper, or Scissors.** `ium rps rock`");

  if(!iumics[message.author.id]){
      iumics[message.author.id] = {
          iumics: 0
      };
  }

  let person = message.author;
  let author = member.author;
  let sIumics = iumics[message.author.id].iumics;
  let iumEarn = Math.floor(Math.random() * 60) + 50;

  botChoice = Math.ceil(Math.random() * 3);
  if(botChoice == 1)	botChoice = 'rock';
  else if (botChoice == 2) botChoice = 'paper';
  else botChoice = 'scissors';

  if (botChoice == args[0]){
    let rpsEmbed = new Discord.RichEmbed()
    .setColor("#f55783")
    .setAuthor(message.author.username)
    .setAuthor("Rock, Paper, Scissors")
    .addField('You Put', args[0], true)
    .addField('I Put', botChoice, true)
    .addField("Summary", `${args[0]} doesn't beat ${botChoice}! It's a tie!`);
    return message.channel.send(rpsEmbed)
  }

  if(botChoice == 'rock') {
    if(args[0] == 'paper'){
      let rpsEmbed = new Discord.RichEmbed()
      .setColor("#f55783")
      .setAuthor(message.author.username)
      .setAuthor("Rock, Paper, Scissors")
      .addField('You Put', args[0], true)
      .addField('I Put', botChoice, true)
      .addField("Result", `${args[0]} beats ${botChoice}! You win!`)
      .setFooter(`${message.author.username} +${iumEarn} iumics`, member.displayAvatarURL);
      return message.channel.send(rpsEmbed)
    }

    if(args[0] == 'scissors'){
      let rpsEmbed = new Discord.RichEmbed()
      .setColor("#f55783")
      .setAuthor(message.author.username)
      .setAuthor("Rock, Paper, Scissors")
      .addField('You Put', args[0], true)
      .addField('I Put', botChoice, true)
      .addField("Result", `${botChoice} beats ${args[0]}! I win!`)
      .setFooter(`${message.author.username} +0 iumics`, member.displayAvatarURL);
      return message.channel.send(rpsEmbed)
    }
  }

  if(botChoice == 'paper') {
    if(args[0] == 'scissors'){
      let rpsEmbed = new Discord.RichEmbed()
      .setColor("#f55783")
      .setAuthor(message.author.username)
      .setAuthor("Rock, Paper, Scissors")
      .addField('You Put', args[0], true)
      .addField('I Put', botChoice, true)
      .addField("Result", `${args[0]} beats ${botChoice}! You win!`)
      .setFooter(`${message.author.username} +${iumEarn} iumics`, member.displayAvatarURL);
      return message.channel.send(rpsEmbed)
    }

    if(args[0] == 'rock'){
      let rpsEmbed = new Discord.RichEmbed()
      .setColor("#f55783")
      .setAuthor(message.author.username)
      .setAuthor("Rock, Paper, Scissors")
      .addField('You Put', args[0], true)
      .addField('I Put', botChoice, true)
      .addField("Result", `${botChoice} beats ${args[0]}! I win!`)
      .setFooter(`${message.author.username} +0 iumics`, member.displayAvatarURL);
      return message.channel.send(rpsEmbed)
    }
  }

  if(botChoice == 'scissors') {
    if(args[0] == 'rock'){
      let rpsEmbed = new Discord.RichEmbed()
      .setColor("#f55783")
      .setAuthor(message.author.username)
      .setAuthor("Rock, Paper, Scissors")
      .addField('You Put', args[0], true)
      .addField('I Put', botChoice, true)
      .addField("Result", `${args[0]} beats ${botChoice}! You win!`)
      .setFooter(`${message.author.username} +${iumEarn} iumics`, member.displayAvatarURL);
      return message.channel.send(rpsEmbed)
    }

    if(args[0] == 'paper'){
      let rpsEmbed = new Discord.RichEmbed()
      .setColor("#f55783")
      .setAuthor(message.author.username)
      .setAuthor("Rock, Paper, Scissors")
      .addField('You Put', args[0], true)
      .addField('I Put', botChoice, true)
      .addField("Result", `${botChoice} beats ${args[0]}! I win!`)
      .setFooter(`${message.author.username} +0 iumics`, member.displayAvatarURL);
      return message.channel.send(rpsEmbed)
    }
  }
}
