const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const config = require("./config.json")

client.on("ready",async (msg) =>{
    console.log(`Bot foi iniciado`)
})


client.on("messageCreate", msg => {
    if(msg.content.toLocaleLowerCase() == "bastos commitou hoje?")
    msg.reply('Não sei')
})


    

client.login(config.token)