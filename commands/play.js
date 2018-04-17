const { bot } = require('discord.js');
const yt = require('ytdl-core');
const tokens = require('../botconfig.json');

let queue = {};

exports.run = (bot, message, args) => {
	if (queue[message.guild.id] === undefined) return message.channel.send(`Add some songs to the queue first with ${tokens.prefix}add`);
	if (!message.guild.voiceConnection) return commands.join(message).then(() => commands.play(message));
	if (queue[message.guild.id].playing) return message.channel.send('Already Playing');
	let dispatcher;
	queue[message.guild.id].playing = true;

	console.log(queue);
	(function play(song) {
		console.log(song);
		if (song === undefined) return message.channel.send('Queue is empty').then(() => {
			queue[message.guild.id].playing = false;
			message.member.voiceChannel.leave();
		});
		message.channel.send(`Playing: **${song.title}** as requested by: **${song.requester}**`);
		dispatcher = message.guild.voiceConnection.playStream(yt(song.url, { audioonly: true }), { passes : tokens.passes });
		let collector = message.channel.createCollector(m => m);
		collector.on('message', m => {
			if (m.content.startsWith(tokens.prefix + 'pause')) {
				message.channel.send('paused').then(() => {dispatcher.pause();});
			} else if (m.content.startsWith(tokens.prefix + 'resume')){
				message.channel.send('resumed').then(() => {dispatcher.resume();});
			} else if (m.content.startsWith(tokens.prefix + 'skip')){
				message.channel.send('skipped').then(() => {dispatcher.end();});
			} else if (m.content.startsWith('volume+')){
				if (Math.round(dispatcher.volume*50) >= 100) return message.channel.send(`Volume: ${Math.round(dispatcher.volume*50)}%`);
				dispatcher.setVolume(Math.min((dispatcher.volume*50 + (2*(m.content.split('+').length-1)))/50,2));
				message.channel.send(`Volume: ${Math.round(dispatcher.volume*50)}%`);
			} else if (m.content.startsWith('volume-')){
				if (Math.round(dispatcher.volume*50) <= 0) return message.channel.send(`Volume: ${Math.round(dispatcher.volume*50)}%`);
				dispatcher.setVolume(Math.max((dispatcher.volume*50 - (2*(m.content.split('-').length-1)))/50,0));
				message.channel.send(`Volume: ${Math.round(dispatcher.volume*50)}%`);
			} else if (m.content.startsWith(tokens.prefix + 'time')){
				message.channel.send(`time: ${Math.floor(dispatcher.time / 60000)}:${Math.floor((dispatcher.time % 60000)/1000) <10 ? '0'+Math.floor((dispatcher.time % 60000)/1000) : Math.floor((dispatcher.time % 60000)/1000)}`);
			}
		});
		dispatcher.on('end', () => {
			collector.stop();
			play(queue[message.guild.id].songs.shift());
		});
		dispatcher.on('error', (err) => {
			return message.channel.send('error: ' + err).then(() => {
				collector.stop();
				play(queue[message.guild.id].songs.shift());
			});
		});
	})(queue[message.guild.id].songs.shift());
}


module.exports.help = {
    name: "play"
}





/**
const Discord = require('discord.js');
const opus = require('opusscript');
const ytdl = require('ytdl-core');
const bot = new Discord.bot({disableEveryone: true});
const broadcast = bot.createVoiceBroadcast();
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
