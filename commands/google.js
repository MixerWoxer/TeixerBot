module.exports = {
    name: "google",
    aliases: ["google","opera","firefox"],
    description: "google komudu",
    usage: "wx!google",
    ownerOnly: false,
    perm: 0,
    run: async (message,args,client) => {
          let youtube = args.slice(0).join('+');

              let link = `https://www.google.com/search?q=` + youtube;
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
