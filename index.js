const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', ()=>{

    console.log(`El bot esta listo como:  ${client.user.tag}`);

});

client.on('message', message => {
    // recibiendo el mensaje
    console.log(message.content);

   if (message.content === 'ping'){
       message.reply('pong');
   }
   
});


client.login('NTg0MjM5NTIxMTI2Njc4NTUw.XPQr9w.FWzwGPkpbxd2U39DpVPPGV7xbZA');
