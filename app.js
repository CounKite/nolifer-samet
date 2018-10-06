const Discord = require('discord.js');
const bot = new Discord.Client();
                                      
bot.on("ready", async () => {
    console.log(`${bot.user.username} ${bot.guilds.size} sunucuda aktif!`);
  
    bot.user.setActivity("7/24 Onlineyim Çünkü Benim Bir Hayatım Yok...", {type: "PLAYING"});
  });
  
  bot.on("ready", () => {
  const channel = bot.channels.get("434061914377682944");
  if (!channel) return console.error("The channel does not exist!");
  channel.join().then(connection => {
    // Yay, it worked!
    console.log("Successfully connected.");
  }).catch(e => {
    // Oh no, it errored! Let's log it to console :)
    console.error(e);
  });
});
                                                                                                                                 
bot.login(process.env.BOT_TOKEN);

