const Discord = require("discord.js");
const config = require("../botconfig.json")
const apikey = require("fortnite")
const Fortnite = require("fortnite");
const ft = new Fortnite(apikey.fortnite);

exports.run = async (bot, message, args) => {
    
    let username = args[0];
    let platform = args[1] || "pc";

    let datat = ft.getInfo(username, platform).then(data => {

        let stats = data.lifetimestats;
        let kills = stats.find(s => s.stat == 'kills');
        let wins = stats.find(s => s.stat == 'wins');
        let kd = stats.find(s => s.stat == 'kd');
        let matchesPlayed = stats.find(s => s.stat == 'matchesPlayed');
        let timePlayed = stats.find(s => s.stat == 'timePlayed');
        let averageSurvivalTime = stats.find(s => s.stat == 'avgSurvivalTime');

        let fortniteEmbed = new Discord.RichEmbed()
            .setTitle("Fortnite Stats")
            .setThumbnail("https://pbs.twimg.com/profile_images/966692874682118144/_9keP5sd.jpg")
            .setAuthor(data.username)
            .setColor("7221a1")
            .addField("Kills", kills.value, true)
            .addField("Winds", winds.value, true)
            .addField("kdr", kd.value, true)
            .addField("Kills", matchesPlayed.value, true)
            .addField("Kills", timePlayed.value, true)
            .addField("Kills", averageSurvivalTime.value, true)

            message.channel.send(fortniteEmbed);


    }).catch(e => {
        console.log(e);
        message.channel.send("**Couldn't fid that username in the database.**")
    });
}
