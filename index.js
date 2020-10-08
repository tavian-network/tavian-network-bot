const discord = require('discord.js')
const client = new discord.Client()
require('dotenv').config()
const templates = require('./templates.js')
const fetch = require('node-fetch')
client.login(process.env.token)

client.on('ready', () => {
    console.log(process.env.name) })

client.on('message', async (message) => {
    if (message.content.startsWith('Tavian Network Bot')) {
        if (message.content.split(' ')[3] == 'service' && message.content.split(' ')[4] == 'status') {
            message.channel.send(templates.embed(2393030, client.user.username, client.user.avatarURL(), [
                { "name": "Protection", "value": await fetch(process.env.protection).then(response => response.json()) },
                { "name": "Website", "value": await fetch(process.env.website).then(response => response.json()) },
                { "name": "Monitoring", "value": await fetch(process.env.monitoring).then(response => response.json()) },
                { "name": "Minecraft vanilla", "value": await fetch(process.env.minecraft_vanilla).then(response => response.json()) },
                { "name": "Ark Survival Evolved", "value": await fetch(process.env.ark_survival_evolved).then(response => response.json()) },
                { "name": "Minecraft modded", "value": await fetch(process.env.minecraft_modded).then(response => response.json()) },
                { "name": "Space Engineers", "value": await fetch(process.env.space_engineers).then(response => response.json()) },
            ], process.env.name + ' © 2015-', new Date().getFullYear()))
        }
    }
})