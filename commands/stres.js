const Discord = require('discord.js');
const chancejs = require('chance');
const chance = new chancejs();

const cevaplar = [
  "**__TURA__**",
  "**__YAZI__**"
];

module.exports = {
    name: "strescarki",
    aliases: ["stres","strescarki","stresc"],
    description: "strescarki komudu",
    usage: "wx!strescarki",
    ownerOnly: false,
    run: async (message,args,client) => {
      let dönme = await message.channel.send({
              embed: {
                  color: 0x00AE86,
                  description: `${message.author.tag} Stres çarkı çevirdi!`,
                  image: {
                      url: "https://i.imgur.com/KJJxVi4.gif"
                  }
              }
          });

          let bitiş = (Math.random() * (60 - 5 +1)) + 5;
          setTimeout(() => {
              dönme.edit({
                  embed: {
                      color: 0x00AE86,
                      description: `${message.author.tag}, stres çarkın ${bitiş.toFixed(2)} saniye döndü.`
                  }
              });
          }, 5 * 1000);
      }
}
