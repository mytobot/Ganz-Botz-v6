let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} PREMIUM ${htka}
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '💱UPGRADE DI SINI', url: 'https://wa.me/6285172446692'}},
    {index: 4, quickReplyButton: {displayText: '🌹SEWA BOT', id: '.belibot'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^(premium|beliprem)$/i
handler.private = true

export default handler
