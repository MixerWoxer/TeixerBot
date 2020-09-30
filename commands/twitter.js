module.exports = {
    name: "twitter",
    aliases: ["twitter","twitter","twitter"],
    description: "twitter komudu",
    usage: "wx!twitter",
    ownerOnly: false,
    perm: 0,
    run: async (message,args,client) => {
          let youtube = args.slice(0).join('+');

              let link = `https://twitter.com/` + youtube;
              if(!youtube)return message.reply(`Please enter a word `)
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
