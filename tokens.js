// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1556259614050488340",
        serverId: "1556259612271841290",
        token: process.env.TOKEN1,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },
];
