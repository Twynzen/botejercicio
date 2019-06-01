const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', ()=>{

    console.log('El bot esta listo como ${client.user.tag}');

});

client.login('NTg0MjM5NTIxMTI2Njc4NTUw.XPICzg.OdUbaIiH-K4yuEZQLS6brVwJ620');
