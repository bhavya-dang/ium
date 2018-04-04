const Discord = require("discord.js");
const ytdl = require('ytdl-core');
const queue = new Map();

exports.run = async (bot, message, args) => {
    const serverQueue = queue.get(message.guild.id);
    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';

    const voiceChannel = message.member.voiceChannel;  
    const permissions = voiceChannel.permissionsFor(message.client.user);

    if(!message.member.voiceChannel) return message.channel.send('Your are not in a voice channel!')
    if(!serverQueue) {
        return message.channel.send('There is nothing playing to skip.');
    }
    serverQueue.connection.dispatcher.end();
    return;

        
}

module.exports.help = {
    name: "skip"
  }