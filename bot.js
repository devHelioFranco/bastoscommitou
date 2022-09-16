const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
const config = require("./config.json");
const requisitionGitHub = require("./github.js");
client.on("ready", async (msg) => {
  console.log(`Bot foi iniciado`);
});

client.on("messageCreate", async (msg) => {
  if (msg.content.toLocaleLowerCase() == "bastos commitou hoje?")
    msg.reply(await requisitionGitHub());
});

client.login(config.token);
