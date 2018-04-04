const Discord = require("discord.js");
let iumics = require("../money.json");

exports.run = async (bot, message, args) => {
    if(!iumics[message.author.id]){
        iumics[message.author.id] = {
            iumics: 0
        };
    }

    let userIumics = iumics[message.author.id].iumics;

    let moneyEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("FFFFFF")
    .addField("💰Total iumics", `You have a total of **${userIumics}** iumics`);
    
    message.channel.send(moneyEmbed);

}


module.exports.help = {
    name: "balance"
}