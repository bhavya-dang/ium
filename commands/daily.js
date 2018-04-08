const Discord = require("discord.js");
const db = require (`quick.db`);
ms = require(`parse-ms`)
let iumics = require("../money.json");

exports.run = async (bot, message, args) => {


    let cooldown = 8.64e+7,
        amount = 100;

    if(!iumics[payUsers.id]){
        iumics[payUsers.id] = {
            iumics: 0
        };
    }

    //let userIumics = iumics[message.author.id].iumics;

    let lastDaily = await db.fetch(`lastDaily_${message.author.id}`);

    if(lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0){
        let timeObj = ms(cooldown - (Date.now() - lastDaily));

        message.channel.send(`You already earned todays daily, your next daily can be earned in **${timeObj.hours}h ${timeObj.minutes}m**`);
    } else {
        messgae.channel.send(`Successfully earned ${amount} iumics 💰`)

        db.set(`lastDaily_${message.author.id}`, Date.now());
        db.add(`userBalance_${message.author.id}`, 100);
    }

    let userIumics = iumics[message.author.id].iumics;

    let moneyEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("FFFFFF")
    .addField("💰Total iumics", `You have a total of **${userIumics}** iumics`);
    
    message.channel.send(moneyEmbed);

}

module.exports.help = {
    name: "daily"
  }
