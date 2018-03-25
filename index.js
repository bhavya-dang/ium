const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
const ytdl = require('ytdl-core');
//let iumicDollar = require("/.money.json");

const newUsers = new Discord.Collection();
bot.commands = new Discord.Collection();
let prefix = botconfig.prefix;

fs.readdir("./commands/", (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
	  let eventFunction = require(`./commands/${file}`);
	  let eventName = file.split(".")[0];
	  bot.on(eventName, (...args) => eventFunction.run(bot, ...args));
	});
  });
  

bot.on("ready", () => {
	console.log(`${bot.user.username} is online`);
	bot.user.setActivity("ium help | v0.0.2");
});

bot.on('ready', () => {
	console.log(`${bot.user.tag} running on ${bot.guilds.size} guilds with ${bot.users.size} users.`);
});

bot.on('warn', console.warn);

bot.on('error', console.error);

bot.on('disconnect', () => console.log('Disconnecting...'));

bot.on('reconnecting', () => console.log('Reconnecting...'));

bot.on("message", message => {
	if (message.author.bot) return;
	if(message.content.indexOf(botconfig.prefix) !== 0) return;
  
	const args = message.content.slice(botconfig.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	
	//if(!iumicDollar[message.author.id]){
	//	iumicDollar[message.author.id] = {
		//	iumicDollar: 0
	//	};
//	}

	let iumicAmt = Math.floor(Math.random() * 15) + 1;
	let baseAmt = Math.floor(Math.random() * 15) + 1;

	//if(iumicAmt === baseAmt){
		//iumicAmt[message.author.id] = {
			//coin
		//}
	//}

	try {
	  let commandFile = require(`./commands/${command}.js`);
	  commandFile.run(bot, message, args);
	} catch (err) {
	  console.error(err);
	}
});


/**
//Glitch.com stuff
const http = require('http');
const express = require('express');
const app = express();

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
*/

bot.login(botconfig.token);
