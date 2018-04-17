const { bot } = require('discord.js');
const yt = require('ytdl-core');
const tokens = require('../botconfig.json');


let queue = {};

exports.run = (bot, message, args) => {
  let url = args[0];
//if (url === undefined) return message.channel.send(`You must add a YouTube video url, or id after ${tokens.prefix}add`);
yt.getInfo(url, (err, info) => {
if(err) return message.channel.send('Invalid YouTube Link: ' + err);
if (!queue.hasOwnProperty(message.guild.id)) queue[message.guild.id] = {}, queue[message.guild.id].playing = false, queue[message.guild.id].songs = [];
queue[message.guild.id].songs.push({url: url, title: info.title, requester: message.author.username});
message.channel.send(`Added **${info.title}** to the queue`);
});
}
