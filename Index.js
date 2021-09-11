Discord = require('discord.js');
Pagination = require('discord.js-pagination');
FileSync = require('fs');
Client = new Discord.Client();

Prefix = process.env['PREFIX'];
Token = process.env['TOKEN'];

Client.commands = new Discord.Collection();
Folder = FileSync.readdirSync('./Commands/');
Folder.filter(File => File.endsWith('.js'));

for (File of Folder) {
  Command = require(`./Commands/${File}`);
  Client.commands.set(Command.name, Command);
}

Client.once('ready', async () => {
  console.log(`${Client.user.username} Is Online!`);
});

Client.on('message', async (message) => {
  if (!message.content.startsWith(Prefix) || message.author.bot) {return}
  Arguments = message.content.slice(Prefix.length).split(/ +/);
  Command = Arguments.shift();
  
  if (Command === 'help') {Client.commands.get('help').execute(message, Discord, Pagination)}
});

Client.login(Token);
