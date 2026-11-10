const RPC = require('discord-rpc');

// Récupère le token/ID client depuis la variable d'environnement exacte configurée sur votre hébergeur
const clientId = process.env.DISCORD_BOT_TOKEN;

if (!clientId) {
    console.error("Erreur : La variable d'environnement DISCORD_BOT_TOKEN n'est pas définie !");
    process.exit(1);
}

const rpc = new RPC.Client({ transport: 'ipc' });

rpc.on('ready', () => {
    console.log(`Connecté à Discord en tant que ${rpc.user.username}`);

    // Configuration de l'apparence / Rich Presence
    rpc.setActivity({
        details: "Competitive",
        state: "Playing Solo",
        startTimestamp: 1507665886,
        largeImageKey: "mineberry_bedwars",
        largeImageText: "Numbani",
        smallImageText: "Rogue - Level 100",
        partyId: "ae488379-351d-4a4f-ad32-2b9b01c91657",
        partySize: 1,
        partyMax: 5,
        joinSecret: "MTI4NzM0OjFpMmhuZToxMjMxMjM=",
    });
});

rpc.login({ clientId }).catch(console.error);
