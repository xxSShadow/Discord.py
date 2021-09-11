module.exports = ({
  name: 'help',
  description: 'This Is A Help Command!',
  execute (message, Discord, Pagination) {
    
    Page1 = new Discord.MessageEmbed().setTitle('Page 1');
    Page2 = new Discord.MessageEmbed().setTitle('Page 2');
    Page3 = new Discord.MessageEmbed().setTitle('Page 3');

    Pages = [ Page1, Page2, Page3 ];
    Emojis = [ '⏪', '⏩' ];
    Pagination(message, Pages, Emojis);

  }
});
