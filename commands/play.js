/** 
const Discord = require('discord.js');
const opus = require('opusscript');
const ytdl = require('ytdl-core');
const client = new Discord.Client({disableEveryone: true});
const broadcast = client.createVoiceBroadcast();
exports.run = async (bot, message, args) => {
    const url = args[0];
    const channel = message.member.voiceChannel;
    channel.join()
    .then(connection => {
        const stream = ytdl(url, { filter: 'audioonly' });
        const dispatcher = connection.playStream(stream);
        dispatcher.on('end', () => {
          channel.leave();
            }); 
    });
}

exports.help = {
    name: 'play'
  }
  */

/** 
const Discord = require("discord.js");
const YTDL = require("ytdl-core");
var servers = {};

exports.run = (bot, message, args) => {

    var server = servers[message.guild.id];

    function play (connection, message) {

        server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

        server.queue.shift();

        server.dispatcher.on("end", function(){
            if (server.queue[0]) play (connection, message);
            else connection.disconnect();
        });
    }

    if(!args[0]) return message.channel.send("**Provide a youtube link for me to play!**");

    if(!message.member.voiceChannel) {
        return message.channel.send("**You must be in a voice channel to play music!**");
    }

    if(!servers[message.guild.id]) return;
    servers[message.guild.id].queue = [];

    server.queue.push(args[0]);

    if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
        //play(connection, message);
        console.log("Playing...");
    })


}

module.exports.help = {
    name: "ping"
  }

  */