module.exports = {
    name: "botsite",
    aliases: ["botsite","botsite","botsite"],
    description: "botsite komudu",
    usage: "wx!botsite",
    ownerOnly: false,
    run: async (message,args,client) => {
      let dönme = await message.channel.send({
              embed: {
                  color: 0x00AE86,
                  description: `https://wmixerbot.glitch.me`,
                  }
          })
      }
    }
