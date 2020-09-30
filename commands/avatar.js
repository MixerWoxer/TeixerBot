const Discord = require('discord.js');
const chancejs = require('chance');
const chance = new chancejs();

module.exports = {
    name: "avatar",
    aliases: ["avatar","avatar","avatar"],
    description: "avatar komudu",
    usage: "wx!avatar",
    ownerOnly: false,
    run: async (message,args,client) => {
      let dönme = await message.channel.send({
              embed: {
                  color: 0x00AE86,
                  description: `Avatarın;`,
                  image: {
                      url: (message.author.avatarURL)
                  }
              }
          })
      }
    }
