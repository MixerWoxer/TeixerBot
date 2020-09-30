const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: "botbilgi",
    aliases: ["botbilgi","botbilgi","bot"],
    description: "botbilgi komudu",
    usage: "wx!botbilgi",
    ownerOnly: false,
    run: async (message,args,client) => {
		const duration = moment
		.duration(client.uptime)
		.format("D [gün], H [saat], m [dakika], s [saniye]"); 
      const exampleEmbed = {
      	color: 0x0099ff,
		  title: '**Bot hakkında bilgi**',
		description: 'Mixer Bot',
		thumbnail: {
			url: 'https://images.discordapp.net/avatars/750694500271128617/728431d8644a5e415bfabdda46ced30f.png?size=512',
		},
      	fields: [
      		{
      			name: 'Sunucu Sayısı; ',
      			value: '**' + client.guilds.size + '**',
      		},
      		{
      			name: 'Kullanıcı Sayısı; ',
      			value: '**' + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + '**',
      			inline: false,
			  },
			  {
				name: 'Uptime; ',
				value: '**' + duration + '**',
				inline: false,
			},
			{
				name: 'Ram Kullanımı; ',
				value: '**' + `%${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}` + '**',
				inline: false,
			},
      		{
      			name: 'Site; ',
      			value: 'https://wmixerbot.glitch.me',
      			inline: true,
      		},
      		{
      			name: 'Sahip; ',
      			value: 'Hükümsüz#9432',
      			inline: true,
      		},
      		{
      			name: 'Coded by Hükümsüz',
      			value: 'Kaynak kodları paylaşılamaz',
      			inline: true,
      		},
      	],
      };

      message.channel.send({ embed: exampleEmbed });
      }
    }
