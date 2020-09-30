module.exports = {
    name: "woxle",
    aliases: ["ara","aranıyor","mixole"],
    description: "ara komudu",
    usage: "wx!ara",
    ownerOnly: false,
    perm: 0,
    run: async (message,args,client) => {
          let youtube = args.slice(0).join('+');

              let link = `https://www.youtube.com/results?search_query=` + youtube;
              if(!youtube)return message.reply(`Lütfen bir kullanıcı adı giriniz `)
              if(!link)return message.reply("Console error")
              const exampleEmbed = {
              	color: 0x0099ff,
              	title: '**Aranıyor..**',
              	fields: [
              		{
              			name: 'Aranan; ',
              			value: `${args.slice(0).join(' ')}`,
              		},
              		{
              			name: 'Link; ',
              			value: `${link}`,
              			inline: false,
              		},
              	],
              };

              message.channel.send({ embed: exampleEmbed });
              }
            }
