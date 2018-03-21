const Discord = require("discord.js");
const ytdl = require('ytdl-core');

exports.run = async (bot, message, args) => {
    const voiceChannel = message.member.voiceChannel;
    if(!message.member.voiceChannel) return message.channel.send('Your are not in a voice channel!')
    message.member.leave();
    return;
        
}
