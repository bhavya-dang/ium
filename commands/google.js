const cheerio = require('cheerio'),
      snekfetch = require('snekfetch'),
      querystring = require('querystring');

exports.run = async (bot, message, args) => {
   let searchMessage = await message.reply('Searching... Sec.');
   let searchUrl = `https://www.google.com/search?q=${encodeURIComponent(message.content)}`;
   return snekfetch.get(searchUrl).then((result) => {

      let $ = cheerio.load(result.text);

      let googleData = $('.r').first().find('a').first().attr('href');
 
      googleData = querystring.parse(googleData.replace('/url?', ''));
      searchMessage.edit(`Result found!\n${googleData.q}`);

  }).catch((err) => {
     searchMessage.edit('No results found!');
  });
}