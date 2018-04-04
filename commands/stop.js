const Discord = require("discord.js");
const ytdl = require('ytdl-core');

exports.run = async (bot, message, args) => {
    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
    
    const voiceChannel = message.member.voiceChannel;
    if(!message.member.voiceChannel) return message.channel.send('Your are not in a voice channel!');
    if(!serverQueue) {
        return message.channel.send('There is nothing playing to stop.');
    }
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
    return;
        
}

module.exports.help = {
    name: "stop"
  }