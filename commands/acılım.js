module.exports = {
    name: "açılım",
    aliases: ["açılım","açılımı","açılımıney"],
    description: "twitter komudu",
    usage: "wx!açılım",
    ownerOnly: false,
    perm: 0,
    run: async (message,args,client) => {
        let youtube = args.slice(0).join('+');
        if(!youtube) {
            return message.channel.send('Lütfen bir kısaltım girin, (İngilizce, Örnek: ff)');
        }
        if(youtube === 'afk') {
            const exampleEmbed = {
                color: 0x0099ff,
                title: `${args.slice(0).join(' ')}`,
                fields: [
                    {
                        name: 'Away From KeyBoard',
                        value: `Klavyeden uzak`,
                    },
                ],
                };

                message.channel.send({ embed: exampleEmbed });
                }
            else if(youtube === 'gg') {
                const exampleEmbed = {
                    color: 0x0099ff,
                    title: `${args.slice(0).join(' ')}`,
                    fields: [
                        {
                            name: 'Good Game',
                            value: `İyi oyun`,
                        },
                    ],
                };

                message.channel.send({ embed: exampleEmbed });
                }
            else if(youtube === 'hf') {
                const exampleEmbed = {
                    color: 0x0099ff,
                    title: `${args.slice(0).join(' ')}`,
                    fields: [
                        {
                            name: 'Have fun',
                            value: `İyi eğlenceler`,
                        },
                    ],
                };

                message.channel.send({ embed: exampleEmbed });
                }
            else if(youtube === 'gl') {
                const exampleEmbed = {
                    color: 0x0099ff,
                    title: `${args.slice(0).join(' ')}`,
                    fields: [
                        {
                            name: 'Good luck',
                            value: `İyi şans|lar`,
                        },
                    ],
                };

                message.channel.send({ embed: exampleEmbed });
                }
            else if(youtube === 'ff') {
                const exampleEmbed = {
                    color: 0x0099ff,
                    title: `${args.slice(0).join(' ')}`,
                    fields: [
                        {
                            name: 'Surrender',
                            value: `Teslim ol`,
                        },
                    ],
                };

                message.channel.send({ embed: exampleEmbed });
                }
            else if(youtube === 'nt') {
                const exampleEmbed = {
                    color: 0x0099ff,
                    title: `${args.slice(0).join(' ')}`,
                    fields: [
                        {
                            name: 'Nice Try',
                            value: `İyi deneme`,
                        },
                    ],
                };

                message.channel.send({ embed: exampleEmbed });
                }
            else if(youtube === 'lmao') {
                const exampleEmbed = {
                    color: 0x0099ff,
                    title: `${args.slice(0).join(' ')}`,
                    fields: [
                        {
                            name: 'Laughing my arse off',
                            value: `Gülmekden öldüm/çatladım`,
                        },
                    ],
                };

                message.channel.send({ embed: exampleEmbed });
                }
            else if(youtube === 'lol') {
                const exampleEmbed = {
                    color: 0x0099ff,
                    title: `${args.slice(0).join(' ')}`,
                    fields: [
                        {
                            name: 'Laughing Out Loud',
                            value: `Sesli güldüm`,
                        },
                    ],
                };

                message.channel.send({ embed: exampleEmbed });
                }
            }
        }