const { bot } = require('discord.js');
const yt = require('ytdl-core');
const tokens = require('../botconfig.json');
let queue = {};

exports.run = (bot, message, args) => {
  if (queue[message.guild.id] === undefined) return message.channel.send(`Add some songs to the queue first with ${tokens.prefix}add`);
  let tosend = [];
  queue[message.guild.id].songs.forEach((song, i) => { tosend.push(`${i+1}. ${song.title} - Requested by: ${song.requester}`);});
  message.channel.send(`__**${message.guild.name}'s Music Queue:**__ Currently **${tosend.length}** songs queued ${(tosend.length > 15 ? '*[Only next 15 shown]*' : '')}\n\`\`\`${tosend.slice(0,15).join('\n')}\`\`\``);
}


module.exports.help = {
    name: "join"
}
