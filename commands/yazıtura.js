const Discord = require('discord.js');
const chancejs = require('chance');
const chance = new chancejs();

const cevaplar = [
  "**__TURA__**",
  "**__YAZI__**"
];

module.exports = {
    name: "yazıtura",
    aliases: ["yazıtura","yazı-tura","yatu"],
    description: "yazıtura komudu",
    usage: "wx!yazıtura",
    ownerOnly: false,
    run: async (message,args,client) => {

      	var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

      	if (cevap === "**__YAZI__**") {
          message.reply('Cevap;');
          message.channel.send(cevap);
          message.channel.send('https://img-s2.onedio.com/id-55507ad8515ad85a60a58271/rev-0/w-900/h-771/f-gif/s-7ee5e7127e7587d90e85083361103fd649b55359.gif');

      	} else if (cevap === "**__TURA__**") {
          message.reply('Cevap;');
          message.channel.send(cevap);
      		message.channel.send('https://img-s2.onedio.com/id-55507ad8515ad85a60a58271/rev-0/w-900/h-771/f-gif/s-7ee5e7127e7587d90e85083361103fd649b55359.gif');

      	}
}
}
