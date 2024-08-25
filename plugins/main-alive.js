let handler = async (m, { conn, text, usedPrefix, command }) => {
  // Sound
  let name = m.pushName || conn.getName(m.sender)
  var vn = 'https://cdn.jsdelivr.net/gh/false-eye/GURU-BOT@main/Assets/mp3/Alive.mp3'
  let url = 'https://t.me/sarca_stics'
  let murl = 'https://i.imgur.com/4WD4MVM.mp4'
  let img = 'https://imgur.com/wADXTL5.jpg'
  let con = {
    key: {
      fromMe: false,
      participant: `${m.sender.split`@`[0]}@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: 'https://instagram.com/false_eye' } : {}),
    },
    message: {
      contactMessage: {
        displayName: `${name}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  }
  let doc = {
    audio: {
      url: vn,
    },
    mimetype: 'audio/mpeg',
    ptt: true,
    waveform: [100, 0, 100, 0, 100, 0, 100],
    fileName: '9x3',

    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: 'I AM ALIVE',
        body: '9x3 by false 𓂀',
        thumbnailUrl: img,
        sourceUrl: 'https://t.me/sarca_stics',
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    },
  }

  await conn.sendMessage(m.chat, doc, { quoted: con })
}

handler.help = ['alive']
handler.tags = ['main']
handler.command = /^(alive)$/i

export default handler
