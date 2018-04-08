const Discord = require("discord.js");
const YTDL = require('ytdl-core');
var servers = {};

exports.run = async (bot, message, args) => {

    function play (connection, message) {
        var server = servers[message.guild.id];

        server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

        server.queue.shift();

        server.dispatcher.on("end", function(){
            if (server.queue[0]) play (connection, message);
            else connection.disconnect();
        });
    }
    
    var server = servers[message.guild.id];

    if(server.dispatcher) server.dispatcher.end();
        
}

module.exports.help = {
    name: "skip"
  }