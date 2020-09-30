const Discord = require('discord.js');
const chancejs = require('chance');
const chance = new chancejs();

module.exports = {
    name: "destek",
    aliases: ["destek","destek","destek"],
    description: "destek komudu",
    usage: "wx!destek",
    ownerOnly: false,
    run: async (message,args,client) => {
        const exampleEmbed = {
            color: 0x0099ff,
            title: '**Woxer Bot**',
            fields: [
                {
                    name: 'Destek sunucusu',
                    value: `https://discord.gg/4DwFxzj`,
                },
            ],
        };

        message.channel.send({ embed: exampleEmbed });
        }
      }
