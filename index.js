const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
const ytdl = require('ytdl-core');
const DBL = require("dblapi.js");
const dbl = new DBL(botconfig.dbltoken, bot);
let version = botconfig.version;
let iumics = require("./data/money.json");
let xp = require("./data/xp.json");
let coolDown = new Set();
let coolSeconds = 2;
let inline = true;
let queue = {};

const newUsers = new Discord.Collection();
bot.commands = new Discord.Collection();
let prefix = botconfig.prefix;
let ciprefix = prefix.toLowerCase();

fs.readdir("./commands/", (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
	  let eventFunction = require(`./commands/${file}`);
	  let eventName = file.split(".")[0];
	  bot.on(eventName, (...args) => eventFunction.run(bot, ...args));
	});
  });


bot.on("ready", () => {
	//PuTTy
	console.log(`${bot.user.username} is online`);
	console.log(`${bot.user.tag} running on ${bot.guilds.size} guilds with ${bot.users.size} users.`);

	//Activity
	bot.user.setActivity(`ium help | ${botconfig.version} RIP CPU`);

	//Restart Logs
	let restartEmbed = new Discord.RichEmbed()
	.setColor('#f5a3fa')
	.setDescription("ium has **restarted**")
	.setTimestamp();

	bot.channels.filter(c => c.id === '434521909745549333').forEach(channel => channel.send(restartEmbed).then(message => {message.delete(20000)}))
});

bot.on('guildCreate', guild => {

	const verlvl = {
			0: "None",
			1: "Low",
			2: "Medium",
			3: "(╯°□°）╯︵ ┻━┻",
			4: "(ノಠ益ಠ)ノ彡┻━┻"
		}

	let sicon = guild.iconURL;
	let guildEmbed = new Discord.RichEmbed()
	.setAuthor("ium", "https://ium-bot.github.io/ium.jpg")
	.setColor('#f5a3fa')
	.setThumbnail(sicon)
	.setDescription("ium has been **added** to a server :)")
	.addField("Guild", `${guild}`, inline)
	.addField("Users", `${guild.memberCount}`, inline)
	.addField("Owner", guild.owner, inline)
	.addField("Region", guild.region, inline)
	.addField("Roles", guild.roles.size, inline)
	.addField("Channels", guild.channels.size, inline)
	.setFooter(`ID - ${guild.id}`)
	.setTimestamp();

  bot.channels.filter(c => c.id === '434521909745549333').forEach(channel => channel.send(guildEmbed));
});

bot.on('guildDelete', guild => {
	const verlvl = {
			0: "None",
			1: "Low",
			2: "Medium",
			3: "(╯°□°）╯︵ ┻━┻",
			4: "(ノಠ益ಠ)ノ彡┻━┻"
		}

	let sicon = guild.iconURL;
	let guildEmbed = new Discord.RichEmbed()
	.setColor('#34e7e4')
	.setThumbnail(sicon)
	.setDescription("ium has been **removed** from a server :(")
	.addField("Guild", `${guild}`, inline)
	.addField("Users", `${guild.memberCount}`, inline)
	.addField("Owner", guild.owner, inline)
	.addField("Region", guild.region, inline)
	.addField("Roles", guild.roles.size, inline)
	.addField("Channels", guild.channels.size, inline)
	.setFooter(`ID - ${guild.id}`)
	.setTimestamp();

	bot.channels.filter(c => c.id === '434521909745549333').forEach(channel => channel.send(guildEmbed));
});

bot.on('warn', console.warn);

bot.on('error', console.error);

bot.on('disconnect', () => console.log('Disconnecting...'));

bot.on('reconnecting', () => console.log('Reconnecting...'));

bot.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', "ium-events");
  if (!channel) return;
	//Embed Creation
	let memberEmbed = new Discord.RichEmbed()
	.setColor('#a193ff')
	.setDescription(`**${member}** has joined`)
	.setFooter(`ID - ${member.id}`)
	.setTimestamp();

  channel.send(memberEmbed);
});

bot.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', "ium-events");
  if (!channel) return;
	//Embed Creation
	let memberEmbed2 = new Discord.RichEmbed()
	.setColor('#66545e')
	.setDescription(`**${member}** has left`)
	.setFooter(`ID - ${member.id}`)
	.setTimestamp();

  channel.send(memberEmbed2);
});

/**
dbl.webhook.on('ready', hook => {
  console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);

	console.log(`User with ID ${vote.user} just voted!`);
	let hookEmbed = new Discord.RichEmbed()
	.setAuthor("ium", "https://ium-bot.github.io/ium.jpg")
	.setColor('#90e386')
	.setDescription("Webhook running at http://" + hook.hostname + ":" + hook.port + ":" + hook.path);

	bot.channels.filter(c => c.id === '434521909745549333').forEach(channel => channel.send(hookEmbed));
});
dbl.webhook.on('vote', vote => {
  console.log(`User with ID ${vote.user} just voted!`);
	let voteEmbed = new Discord.RichEmbed()
	.setAuthor("ium", "https://ium-bot.github.io/ium.jpg")
	.setColor('#f55783')
	.setDescription("User with ID " + vote.user + "just voted! :)")/

	bot.channels.filter(c => c.id === '434521909745549333').forEach(channel => channel.send(voteEmbed));
});
*/

bot.on("message", message => {
	if (message.author.bot) return;

	//XP and Level System
	let xpAdd = Math.floor(Math.random() * 7) + 8;
	//console.log(xpAdd);

	if(!xp[message.author.id]){
	  xp[message.author.id] = {
		xp: 0,
		level: 1
	  };
	}

	let curxp = xp[message.author.id].xp;
	let curlvl = xp[message.author.id].level;
	let nxtLvl = xp[message.author.id].level * 100;
	xp[message.author.id].xp =  curxp + xpAdd;
	if(nxtLvl <= xp[message.author.id].xp){
	  xp[message.author.id].level = curlvl + 1;
	  let lvlup = new Discord.RichEmbed()
	  .setTitle("You Leveled Up!")
	  .setColor("#FFFFFF")
	  .addField("New Level", curlvl + 1);

	  //message.channel.send(lvlup);
	}
	fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
	  if(err) console.log(err)
	});

	if(message.content.toLowerCase().indexOf(ciprefix) !== 0) return;

  	//Prefix + Command
	let args = message.content.toLowerCase().slice(ciprefix.length).trim().split(/ +/g);
	let command = args.shift().toLowerCase();


	//CoolDown
	if(!message.content.toLowerCase().startsWith(ciprefix)) return;
	if(coolDown.has(message.author.id)){
		message.delete();
		let cooldownEmbed = new Discord.RichEmbed()
		.setAuthor(message.author.username)
		.setColor("#FFFFFF")
		.addField("Cooldown! 🙃", `You must wait **2** seconds between commands.`)
		return message.channel.send(cooldownEmbed).then(message => {message.delete(5000)});
	}
	//if(!message.member.hasPermissions("ADMINISTRATOR")){
		//coolDown.add(message.author.id);
//	}


	//Currency
	if(!iumics[message.author.id]){
		iumics[message.author.id] = {
			iumics: 0
		}
	}

	let iumicAmt = Math.floor(Math.random() * 15) + 1;
	let baseAmt = Math.floor(Math.random() * 15) + 1;

	if(iumicAmt === baseAmt){
		iumics[message.author.id] = {
			iumics: iumics[message.author.id].iumics + iumicAmt
		}
	fs.writeFile("./data/money.json", JSON.stringify(iumics), (err) => {
		if(err) console.log(err)
	});
	let moneyEmbed = new Discord.RichEmbed()
	.setAuthor(message.author.username)
	.setColor("#FFFFFF")
	.addField("💰", `**${iumicAmt}** iumics added!`)

	message.channel.send(moneyEmbed).then(message => {message.delete(8000)});

	}

	//Commands
	try {
	  let commandFile = require(`./commands/${command}.js`);
	  commandFile.run(bot, message, args);
	} catch (err) {
	  //console.error(err);
	}

	setTimeout(() => {
		coolDown.delete(message.author.id)
	}, coolSeconds * 1000)
});

const commands = {
	'play': (msg) => {
		if (queue[msg.guild.id] === undefined) return msg.channel.send(`Add some songs to the queue first with ${ciprefix}add`);
		if (!msg.guild.voiceConnection) return commands.join(msg).then(() => commands.play(msg));
		if (queue[msg.guild.id].playing) return msg.channel.send('**Already playing.** To add that song to the queue type: `ium add <url>`');
		let dispatcher;
		queue[msg.guild.id].playing = true;

		console.log(queue);
		(function play(song) {
			console.log(song);
			if (song === undefined) return msg.channel.send('**There are no songs in the queue.** To add a song to the queue type: `ium add <url of song>`').then(() => {
				queue[msg.guild.id].playing = false;
				msg.member.voiceChannel.leave();
			});
			msg.channel.send(`Now Playing: **${song.title}**, requested by: **${song.requester}**`);
			dispatcher = msg.guild.voiceConnection.playStream(ytdl(song.url, { audioonly: true }), { passes : botconfig.passes });
			let collector = msg.channel.createCollector(m => m);
			collector.on('message', m => {
				if (m.content.startsWith(ciprefix + 'pause')) {
					msg.channel.send('Paused...').then(() => {dispatcher.pause();});
				} else if (m.content.startsWith(ciprefix + 'resume')){
					msg.channel.send('Resumed...').then(() => {dispatcher.resume();});
				} else if (m.content.startsWith(ciprefix + 'skip')){
					msg.channel.send('Skipped...').then(() => {dispatcher.end();});
				} else if (m.content.startsWith('volume+')){
					if (Math.round(dispatcher.volume*50) >= 100) return msg.channel.send(`Volume: ${Math.round(dispatcher.volume*50)}%`);
					dispatcher.setVolume(Math.min((dispatcher.volume*50 + (2*(m.content.split('+').length-1)))/50,2));
					msg.channel.send(`Volume: ${Math.round(dispatcher.volume*50)}%`);
				} else if (m.content.startsWith('volume-')){
					if (Math.round(dispatcher.volume*50) <= 0) return msg.channel.send(`Volume: ${Math.round(dispatcher.volume*50)}%`);
					dispatcher.setVolume(Math.max((dispatcher.volume*50 - (2*(m.content.split('-').length-1)))/50,0));
					msg.channel.send(`Volume: ${Math.round(dispatcher.volume*50)}%`);
				} else if (m.content.startsWith(ciprefix + 'time')){
					msg.channel.send(`Time of queue: ${Math.floor(dispatcher.time / 60000)}:${Math.floor((dispatcher.time % 60000)/1000) <10 ? '0'+Math.floor((dispatcher.time % 60000)/1000) : Math.floor((dispatcher.time % 60000)/1000)}`);
				}
			});
			dispatcher.on('error', (err) => {
				return msg.channel.send('error: ' + err).then(() => {
					collector.stop();
					play(queue[msg.guild.id].songs.shift());
				});
			});
		})(queue[msg.guild.id].songs.shift());
	},
	'join': (msg) => {
		return new Promise((resolve, reject) => {
			const voiceChannel = msg.member.voiceChannel;
			if (!voiceChannel || voiceChannel.type !== 'voice') return msg.reply('I couldn\'t connect to your voice channel...');
			voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
		});
	},
	'add': (msg) => {
		let url = msg.content.split(' ')[2];
		//if (url == '' || url === undefined) return msg.channel.send(`You must add a YouTube video url, or id after ${ciprefix}add`);
		ytdl.getInfo(url, (err, info) => {
			//if(err) return msg.channel.send('Invalid YouTube Link: ' + err);
			if (!queue.hasOwnProperty(msg.guild.id)) queue[msg.guild.id] = {}, queue[msg.guild.id].playing = false, queue[msg.guild.id].songs = [];
			queue[msg.guild.id].songs.push({url: url, title: info.title, requester: msg.author.username});
			msg.channel.send(`added **${info.title}** to the queue`);
		});
	},
	'queue': (msg) => {
		if (queue[msg.guild.id] === undefined) return msg.channel.send(`**Add some songs to the queue first.**`);
		let tosend = [];
		queue[msg.guild.id].songs.forEach((song, i) => { tosend.push(`${i+1}. ${song.title} - Requested by: ${song.requester}`);});
		msg.channel.send(`__**${msg.guild.name}'s Music Queue:**__ Currently **${tosend.length}** songs queued ${(tosend.length > 15 ? '*[Only next 15 shown]*' : '')}\n\`\`\`${tosend.slice(0,15).join('\n')}\`\`\``);
	},
	//'help': (msg) => {
		//let tosend = ['```xl', ciprefix + 'join : "Join Voice channel of msg sender"',	ciprefix + 'add : "Add a valid youtube link to the queue"', ciprefix + 'queue : "Shows the current queue, up to 15 songs shown."', ciprefix + 'play : "Play the music queue if already joined to a voice channel"', '', 'the following commands only function while the play command is running:'.toUpperCase(), ciprefix + 'pause : "pauses the music"',	ciprefix + 'resume //: "resumes the music"', ciprefix + 'skip : "skips the playing song"', ciprefix + 'time : "Shows the playtdlime of the song."',	'volume+(+++) : "increases volume by 2%/+"',	'volume-(---) : "decreases volume by 2%/-"',	'```'];
		//msg.channel.send(tosend.join('\n'));
	//},
};

bot.on('message', msg => {
	if (!msg.content.startsWith(ciprefix)) return;
	if (commands.hasOwnProperty(msg.content.toLowerCase().slice(ciprefix.length).split(' ')[0])) commands[msg.content.toLowerCase().slice(ciprefix.length).split(' ')[0]](msg);
});


bot.login(botconfig.token);
