const mineflayer = require('mineflayer');
‎
‎const bot = mineflayer.createBot({
‎  host: 'your_server_ip_or_domain', // Replace with your server IP
‎  port: 25565,                      // Default Minecraft port
‎  username: 'Pixels_alt'               // Bot username
‎});
‎
‎bot.on('spawn', () => {
‎  console.log('Bot has spawned! AFK mode activated.');
‎  bot.chat('I am now AFK.');
‎  setInterval(() => {
‎    bot.setControlState('jump', true);
‎    setTimeout(() => bot.setControlState('jump', false), 500);
‎  }, 15000);
‎});
‎
‎bot.on('end', () => console.log('Bot disconnected.'));
‎bot.on('error', (err) => console.log('Error:', err));‎
