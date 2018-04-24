const Discord = require('discord.js');
const rps = ["rock", "paper", "scissors"];
let iumics = require("../data/money.json");
const botconfig = require('../botconfig.json');
const fs = require('fs');

exports.run = (message, args, bot) => {

    if(!args[0]) return message.channel.send("**Choose Rock, Paper, or Scissors.** `ium rps rock`");
    //if (!rps.includes(args[0].toLowerCase()))
        //return messageUtil.sendError(message.channel, '**You need to use rock, paper, or scissors in order to play** `ium rps rock`');

    if (!iumics[message.member.id]) iumics[message.member.id] = 0;

    let sIumics = iumics[message.author.id].iumics;
    let iumEarn = Math.floor(Math.random() * 60) + 50;

    const botChoice = rps[Math.floor(Math.random() * rps.length)];
    const member = message.member;

    switch (botChoice) {
        case 'rock':
            switch (args[0].toLowerCase()) {
                case 'rock':
                    let rpsEmbed1 = new Discord.RichEmbed()
                    .setColor("#f55783")
                    .setAuthor(message.author.username)
                    .setAuthor("Rock, Paper, Scissors")
                    .addField('You Put', args[0], true)
                    .addField('I Put', botChoice, true)
                    .addField("Summary", `${args[0]} doesn't beat ${botChoice}! It's a tie!`);
                    return message.channel.send(rpsEmbed1)
                    break;
                case 'paper':
                    iumics[message.author.id] = {
                        iumics: sIumics + iumEarn
                    };
                    let rpsEmbed2 = new Discord.RichEmbed()
                    .setColor("#f55783")
                    .setAuthor(message.author.username)
                    .setAuthor("Rock, Paper, Scissors")
                    .addField('You Put', args[0], true)
                    .addField('I Put', botChoice, true)
                    .addField("Result", `${args[0]} beats ${botChoice}! You win!`)
                    .setFooter(`${message.author.username} +${iumEarn} iumics`, member.displayAvatarURL);
                    return message.channel.send(rpsEmbed2)
                    break;
                case 'scissors':
                    let rpsEmbed3 = new Discord.RichEmbed()
                    .setColor("#f55783")
                    .setAuthor(message.author.username)
                    .setAuthor("Rock, Paper, Scissors")
                    .addField('You Put', args[0], true)
                    .addField('I Put', botChoice, true)
                    .addField("Result", `${botChoice} beats ${args[0]}! I win!`)
                    .setFooter(`${message.author.username} +0 iumics`, member.displayAvatarURL);
                    return message.channel.send(rpsEmbed3)
                    break;
            }
            break;
        case 'paper':
            switch (args[0].toLowerCase()) {
                case 'rock':
                    let rpsEmbed4 = new Discord.RichEmbed()
                    .setColor("#f55783")
                    .setAuthor(message.author.username)
                    .setAuthor("Rock, Paper, Scissors")
                    .addField('You Put', args[0], true)
                    .addField('I Put', botChoice, true)
                    .addField("Result", `${botChoice} beats ${args[0]}! I win!`)
                    .setFooter(`${message.author.username} +0 iumics`, member.displayAvatarURL);
                    return message.channel.send(rpsEmbed4)
                    break;
                case 'paper':
                  let rpsEmbed5 = new Discord.RichEmbed()
                    .setColor("#f55783")
                    .setAuthor(message.author.username)
                    .setAuthor("Rock, Paper, Scissors")
                    .addField('You Put', args[0], true)
                    .addField('I Put', botChoice, true)
                    .addField("Summary", `${args[0]} doesn't beat ${botChoice}! It's a tie!`);
                    return message.channel.send(rpsEmbed5)
                    break;
                case 'scissors':
                    iumics[message.author.id] = {
                        iumics: sIumics + iumEarn
                    };
                    let rpsEmbed6 = new Discord.RichEmbed()
                    .setColor("#f55783")
                    .setAuthor(message.author.username)
                    .setAuthor("Rock, Paper, Scissors")
                    .addField('You Put', args[0], true)
                    .addField('I Put', botChoice, true)
                    .addField("Result", `${args[0]} beats ${botChoice}! You win!`)
                    .setFooter(`${message.author.username} +${iumEarn} iumics`, member.displayAvatarURL);
                    return message.channel.send(rpsEmbed6)
                    break;
            }
            break;
        case 'scissors':
            switch (args[0].toLowerCase()) {
                case 'rock':
                    iumics[message.author.id] = {
                        iumics: sIumics + iumEarn
                    };
                    let rpsEmbed7 = new Discord.RichEmbed()
                    .setColor("#f55783")
                    .setAuthor(message.author.username)
                    .setAuthor("Rock, Paper, Scissors")
                    .addField('You Put', args[0], true)
                    .addField('I Put', botChoice, true)
                    .addField("Result", `${args[0]} beats ${botChoice}! You win!`)
                    .setFooter(`${message.author.username} +${iumEarn} iumics`, member.displayAvatarURL);
                    return message.channel.send(rpsEmbed7)
                    break;
                case 'paper':
                    let rpsEmbed8 = new Discord.RichEmbed()
                    .setColor("#f55783")
                    .setAuthor(message.author.username)
                    .setAuthor("Rock, Paper, Scissors")
                    .addField('You Put', args[0], true)
                    .addField('I Put', botChoice, true)
                    .addField("Result", `${botChoice} beats ${args[0]}! I win!`)
                    .setFooter(`${message.author.username} +0 iumics`, member.displayAvatarURL);
                    return message.channel.send(rpsEmbed8)
                    break;
                case 'scissors':
                    let rpsEmbed9 = new Discord.RichEmbed()
                    .setColor("#f55783")
                    .setAuthor(message.author.username)
                    .setAuthor("Rock, Paper, Scissors")
                    .addField('You Put', args[0], true)
                    .addField('I Put', botChoice, true)
                    .addField("Summary", `${args[0]} doesn't beat ${botChoice}! It's a tie!`);
                    return message.channel.send(rpsEmbed9)
                    break;
            }
            break;
    }

    fs.writeFile("../data/money.json", JSON.stringify(iumics), (err) => {
      if(err) cosole.log(err)
    });
};

module.exports.help = {
    name: 'rps',
};
