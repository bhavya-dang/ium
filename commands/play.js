const Discord = require("discord.js");
const ytdl = require('ytdl-core');
const queue = new Map();

exports.run = async (bot, message, args) => {
    const serverQueue = queue.get(msg.guild.id);
    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';

    const voiceChannel = message.member.voiceChannel;
		if (!voiceChannel) return message.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
        
        const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');
        }
        
        const songInfo = await ytdl.getInfo(args[1]);
        const song = {
            title: songInfo.title,
            url: songInfo.video_url
        };
        console.log(songInfo.baseURL);



        if (!serverQueue) {
            const queueConstruct = {
                textChannel: msg.channel,
                voiceChannel: voiceChannel,
                connection: null,
                songs: [],
                volume: 5,
                playing: true
            };
            queue.set(msg.guild.id, queueConstruct);
    
            queueConstruct.songs.push(song);
    
            try {
                var connection = await voiceChannel.join();
                queueConstruct.connection = connection;
                play(msg.guild, queueConstruct.songs[0]);
            } catch (error) {
                console.error(`I could not join the voice channel: ${error}`);
                queue.delete(msg.guild.id);
                return msg.channel.send(`I could not join the voice channel: ${error}`);
            }

        } else {
            serverQueue.songs.push(song);
            console.log(serverQueue.songs);
            return msg.channel.send(`✅ **${song.title}** has been added to the queue!`);
        }
        return;

        try {
            var connection = await voiceChannel.join();
        } catch (error) {
            console.error(`I could not join the voice channel: ${error}`);
            return message.channel.send(`I could not join the voice channel: ${error}`);
        }
        
}

function play(guild, song) {
    const serverQueue = queue.get(guild.id);

    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }

    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
    .on('end', reason => {
        console.log('song ended');
        serverQueue.songs.shift();
        play(guild, serverQueue.song[0]);
    })
    .on('error', error => console.error(error));
dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

}