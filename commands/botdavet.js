const Discord = require('discord.js');
const chancejs = require('chance');
const chance = new chancejs();

module.exports = {
    name: "botdavet",
    aliases: ["botdavet","botdavetlink","botdavet"],
    description: "botdavet komudu",
    usage: "wx!botdavet",
    ownerOnly: false,
    run: async (message,args,client) => {
      let dönme = await message.channel.send({
              embed: {
                  color: 0x00AE86,
                  description: `https://discord.com/api/oauth2/authorize?client_id=756477868476858419&permissions=8&scope=bot`
                  }
              })
          }
      }
