// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1554636253453090856",
        serverId: "1554612231545688104",
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
