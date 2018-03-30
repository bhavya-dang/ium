const Discord = require("discord.js");
const config = require("../botconfig.json");
const Fortnite = require("fortnite");
const ft = new Fortnite(config.fortnite);

 
exports.run = (bot, message, args, tools) => {
 
  let platform;
  let username;
 
  if (!['pc','xbl','psn'].includes(args[0])) return message.channel.send('**Please Include the platform: `ium fortnite [ pc | xbl | psn ] <username>`**');

  if (!args[1]) return message.channel.send('**Please Include the username: `ium fortnite [ pc | xbl | psn ] <username>`**');
 
  // Assign fts
  platform = args.shift();
  username = args.join(' '); 
 
  // Fetch Data
  ft.getInfo(username, platform).then( data => { 
   
    const embed = new Discord.RichEmbed() 
      .setColor("#7221a1") 
      .setTitle(`Stats for ${data.username}`) 
      .setDescription(`**Top Placement**\n\n**Top 3s:** *${data.lifetimeft[0].ft}*\n**Top 5s:** *${data.lifetimeft[1].ft}*\n**Top 6s:** *${data.lifetimeft[3].ft}*\n**Top 12s:** *${data.lifetimeft[4].ft}*\n**Top 25s:** *${data.lifetimeft[5].ft}*`, true) // We can have other information look different, in fields or in the description.
      .setThumbnail('https://vignette.wikia.nocookie.net/fortnite/images/d/d8/Icon_Founders_Badge.png') // Fortnite Logo
      .addField('Total Score', data.lifetimeft[6].ft, true)
      .addField('Matches Played', data.lifetimeft[7].ft, true)
      .addField('Wins', data.lifetimeft[8].ft, true)
      .addField('Win Percentage', data.lifetimeft[9].ft, true)
      .addField('Kills', data.lifetimeft[10].ft, true)
      .addField('K/D Ratio', data.lifetimeft[11].ft, true)
      .addField('Kills Per Minute', data.lifetimeft[12].ft, true)
      .addField('Time Played', data.lifetimeft[13].ft, true)
      .addField('Average Survival Time', data.lifetimeft[14].ft, true)

    message.channel.send(embed)
   
  })
  .catch(error => {
   
    message.channel.send('Username not found!');
 
  })
 
}