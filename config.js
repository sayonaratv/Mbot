module.exports = {
    clients: {
        token: 'Put-Token-Here',
        prefix: 'Prefix',
        activity: 'discord.gg/novaworld',
        name: '',
        logo: '',
        embedColor: ''
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'Role-Name',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
