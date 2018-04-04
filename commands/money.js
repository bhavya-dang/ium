

const Discord = require("discord.js");
let iumics = require("../money.json");

exports.run = async (bot, message, args) => {
    let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

    if(!user){

    if(!iumics[message.author.id]){
        iumics[message.author.id] = {
            iumics: 0
        };
    }

    let memberIumics = iumics[message.author.id].iumics;
    //let iumicsBalance = iumics[user.id].coins;

    let moneyEmbed1 = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("FFFFFF")
    .addField("💰Total iumics", `You have a total of **${memberIumics}** iumics`);
    
    return message.channel.send(moneyEmbed1);

}

    
    if(!iumics[user.id]){
        iumics[user.id] = {
            iumics: 0
        };
    }

    let userIumics = iumics[user.id].iumics;

    let moneyEmbed2 = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("FFFFFF")
    .addField("💰Total iumics", `**${user}** has a total of **${userIumics}** iumics`);
    
    return message.channel.send(moneyEmbed2);


}

module.exports.help = {
    name: "money"
  }