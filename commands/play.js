const Discord = require("discord.js");
const ytdl = require('ytdl-core');

exports.run = async (bot, message, args) => {
    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';

    const voiceChannel = message.member.voiceChannel;
		if (!voiceChannel) return message.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
		
        
        try {
            var connection = await voiceChannel.join();
        } catch (error) {
            console.error(`I could not join the voice channel: ${error}`);
            return message.channel.send(`I could not join the voice channel: ${error}`);
        }

        const dispatcher = connection.playStream(ytdl(args[1]))
            .on('end', () => {
                console.log('song ended!');
                voiceChannel.leave();
            })
            .on('error', error => {
                console.error(error);
            })
        dispatcher.setVolumeLogarithmic(5 / 5); 
        
}
